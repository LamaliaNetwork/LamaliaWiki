import React, { useRef } from "react"
import styles from "./styles.module.css"
import * as ICON from "../Icon/Icon"

import { rankData } from "./RankData"

// Feature component for each card
function Feature({
	title,
	playtime,
	price,
	description,
	ownerland,
	l_avai,
	freechunk,
	supchunk,
	chunklimit,
	landmember,
	landrole,
	cardColorClass,
	lang,
	type
}) {

	return (
		<div className={styles.card}>
			<div className={`${styles.cardColor} ${cardColorClass}`}></div>
			<div className={styles.cardContent}>
				<h3>{title}</h3>
				{type === 'playtime' ?
					<info>
						<ICON.Clock />
						{playtime}
					</info>
					: type === 'sup' ?
						<info>
							<ICON.ThaiBaht />
							{price}
						</info>
						: null
				}

				<br />
				<h4>{rankData[lang].landInfo}</h4>
				<info>
					<br />
					<ICON.FullStar />
					{ownerland}
				</info>
				<info>
					<br />
					<ICON.BorderStar />
					{l_avai}
				</info>
				<info>
					<br />
					<ICON.Jigsaw />
					{freechunk}
				</info>
				<info>
					<br />
					<ICON.HandShake />
					{supchunk}
				</info>
				<info>
					<br />
					<ICON.BlockLimit />

					{chunklimit}
				</info>
				<info>
					<br />
					<ICON.Person />
					{landmember}
				</info>
				<info>
					<br />
					<ICON.People />
					{landrole}
				</info>
				<br />
				<h4>{rankData[lang].unlockFeature}</h4>
				<info>
					<p>{description}</p>
				</info>
				{/*<a href={link}>Learn more</a>*/}
			</div>
		</div>
	)
}

// Main RankCard component rendering the list of cards with horizontal scrolling
export default function RankCard({ lang = 'en', type = 'playtime' }) {
	const scrollRef = useRef(null)

	// Scroll right function
	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 320, behavior: "smooth" })
		}
	}

	// Scroll left function
	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -320, behavior: "smooth" })
		}
	}
	
	const rankDataMap = 
		type === 'playtime' ? rankData[lang].RankList :
		type === 'sup' ? rankData[lang].RankSupList :
		null

	return (
		<div className={styles.container}>
			<button className={styles.scrollButton} onClick={scrollLeft}>
				<ICON.AngleLeft />
			</button>
			<div className={styles.cardContainer} ref={scrollRef}>
				{rankDataMap.map((item, idx) => (
					<Feature key={idx} {...item} lang={lang} type={type}/>
				))}
			</div>
			<button className={styles.scrollButton} onClick={scrollRight}>
				<ICON.AngleRight />
			</button>
		</div>
	)
}
