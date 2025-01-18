import History from "@site/src/components/history/HistoryTable.jsx"

import React from 'react'

export default function DispenserHistory(props) {

  const data = [
    { release: "1.9.3", description: "- Added Super Powered Rail 4X, Super Stopper Rail 8X", descriptionTH: '- เพิ่ม Super Powered Rail 4X, Super Stopper Rail 8X' },
    { release: "1.9.4", description: "- Changed High Speed Rails Block from Redstone Block to Gold Block", descriptionTH: '- เปลี่ยนบล็อกใต้ราง High Speed Rails จาก Redstone Block เป็น Gold Block' },
  ]

  return (
    <History releasesData={data} />
  )
}