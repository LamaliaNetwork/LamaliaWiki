import React, { useMemo } from 'react'
import { Table } from 'antd'
import Link from '@docusaurus/Link'
import releases from '@site/src/releases.json' // นำเข้าข้อมูลจากไฟล์ JSON
import moment from "moment-timezone"
moment.tz.setDefault("Asia/Bangkok")
moment.locale("th")



/**
 * History component that displays a table of release history.
 *
 * @param {object} props - Component props
 * @param {string} props.lang - The language to display content in. It can be "en" or "th".
 * @param {Array<{ release: string, description: string, descriptionTH: string, descriptionTh: string, date?: string }>} props.releasesData - The data to be displayed in the table.
 *     - `release` is the version name (e.g., "2.2.0").
 *     - `description` is the description of the release.
 *     - `descriptionTH` || `descriptionTh` is the descriptionTH of the release. of not exist will default by EN
 *     - `date` is optional, it will be used if provided. Otherwise, the date will be determined from the release name.
 * 
 * @returns {JSX.Element} The rendered History component with a table.
 */
export default function History({ lang, releasesData }) {
    // ฟังก์ชันที่ใช้จัดการการแสดงผลตามภาษาและข้อมูลที่ได้รับ
    const translations = useMemo(() => ({
        en: {
            title: "History",
            date: "Date",
            release: "Lamalia Release",
            description: "Description",
        },
        th: {
            title: "ประวัติ",
            date: "วันที่",
            release: "Lamalia Release",
            description: "คำอธิบาย",
        },
    }), [])

    const t = translations[lang] || translations.en

    const getReleaseDetails = (releaseName) => {
        // ค้นหาข้อมูลจาก releaseName และคืนค่า date
        const releaseDetails = releases.find(release => release.release === releaseName)
        return releaseDetails || {}
    }

    const data = releasesData.map((releaseData) => {
        let releaseDetails = {}

        if (releaseData.release) {
            // ถ้ามี release, ค้นหาข้อมูลวันที่จาก releases.json
            releaseDetails = getReleaseDetails(releaseData.release)
        }

        const description = lang === 'th'
            ? releaseData.descriptionTH || releaseData.descriptionTh || releaseData.description
            : releaseData.description

        return {
            date: releaseData.date || releaseDetails.date || 'Unknown',
            release: releaseData.release || '',
            releaseLink: releaseDetails ? releaseDetails.releaseLink : '',
            description: description || 'No description available',
        }
    })

    const columns = useMemo(() => [
        {
            title: t.date,
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => {
                const dateA = moment(a.date, "DD/MM/YYYY")
                const dateB = moment(b.date, "DD/MM/YYYY")
                return dateB.diff(dateA)
            }
        },
        {
            title: (
                <Link to="/patchNotes">
                    {t.release}
                </Link>
            ),
            dataIndex: 'release',
            key: 'release',
            render: (release, row) => {
                if (release) {
                    return <Link to={row.releaseLink}>{release}</Link>
                }
                return null
            },
        },
        {
            title: t.description,
            dataIndex: 'description',
            key: 'description',
        },
    ], [t, lang])

    return (
        <>
            <h2>{t.title}</h2>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                rowKey={(record, index) => `${record.release || index}`}
            />
        </>
    )
}