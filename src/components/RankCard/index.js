import React, { useRef } from "react"
import styles from "./styles.module.css"
import * as ICON from "../Icon/Icon"

// Rank List data
const RankList = [
	{
		title: "IRON",
		playtime: "Default",
		ownerland: "1 Land Owner",
		l_avai: "3 Land Availability",
		supchunk: "1 Support Chunk",
		freechunk: "10 Free Chunk",
		chunklimit: "20 Chunk Limit",
		landmember: " 10 Land Member",
		landrole: "5 Land Role",
		description: "- Minespawner \n(Netherite Pickaxe + Silk Touch)",
		link: "#",
		cardColorClass: styles.iron, // Specific color class
	},
	{
		title: "BRONZE",
		playtime: "6 hours",
		ownerland: "1 Land Owner",
		l_avai: "4 Land Availability",
		supchunk: "2 Support Chunk",
		freechunk: "12 Free Chunk",
		chunklimit: "25 Chunk Limit",
		landmember: " 10 Land Member",
		landrole: "5 Land Role",
		description: "- Sit on sitable block\n - /lands inspect command",
		link: "#",
		cardColorClass: styles.bronze, // Specific color class
	},
	{
		title: "SILVER",
		playtime: "20 hours",
		ownerland: "1 Land Owner",
		l_avai: "5 Land Availability",
		supchunk: "3 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "30 Chunk Limit",
		landmember: " 10 Land Member",
		landrole: "5 Land Role",
		description: "- /Sit command to sit",
		link: "#",
		cardColorClass: styles.silver, // Specific color class
	},
	,
	{
		title: "GOLD",
		playtime: "43 hours",
		ownerland: "2 Land Owner",
		l_avai: "6 Land Availability",
		supchunk: "4 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "40 Chunk Limit",
		landmember: " 12 Land Member",
		landrole: "5 Land Role",
		description: "- /craft or /wb command to open workbench\n - Image Map 10\n - Chest Shop 10\n- Player Warp : 1 ",
		link: "#",
		cardColorClass: styles.gold, // Specific color class
	},
	,
	{
		title: "PLATINUM",
		playtime: "78 hours",
		ownerland: "2 Land Owner",
		l_avai: "7 Land Availability",
		supchunk: "5 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "55 Chunk Limit",
		landmember: " 14 Land Member",
		landrole: "5 Land Role",
		description: "- /anvil command to open anvil\n - Elytraboost\n- Player Warp : 1",

		link: "#",
		cardColorClass: styles.platinum, // Specific color class
	},
	{
		title: "EMERALD",
		playtime: "131 hours",
		ownerland: "3 Land Owner",
		l_avai: "8 Land Availability",
		supchunk: "6 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "70 Chunk Limit",
		landmember: " 16 Land Member",
		landrole: "5 Land Role",
		description: "- Create Nation\n - /bin or /dispose for clear you don't need\n - Open Shulker without placing\n- Player Warp : 2",
		link: "#",
		cardColorClass: styles.emerald, // Specific color class
	},
	{
		title: "DIAMOND",
		playtime: "214 hours",
		ownerland: "4 Land Owner",
		l_avai: "9 Land Availability",
		supchunk: "7 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "90 Chunk Limit",
		landmember: " 18 Land Member",
		landrole: "5 Land Role",
		description: "- Head Shop /hdb and /hdb \nsearch[name]\n - Armor Stand Editing \n(Shift + Right-Click\n - Open enderchest /ec or /ender command\n- Player Warp : 2",
		link: "#",
		cardColorClass: styles.diamond, // Specific color class
	},
	{
		title: "ASTRAL",
		playtime: "354 hours",
		ownerland: "5 Land Owner",
		l_avai: "10 Land Availability",
		supchunk: "8 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "150 Chunk Limit",
		landmember: " 20 Land Member",
		landrole: "5 Land Role",
		description: "- Mirror\n- Player Warp : 4",
		link: "#",
		cardColorClass: styles.astral, // Specific color class
	},
	{
		title: "COSMIC",
		playtime: "603 hours",
		ownerland: "7 Land Owner",
		l_avai: "12 Land Availability",
		supchunk: "10 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "250 Chunk Limit",
		landmember: " 25 Land Member",
		landrole: "5 Land Role",
		description: "- Flight Charge\n- Player Warp : 6",
		link: "#",
		cardColorClass: styles.cosmic, // Specific color class
	},
	{
		title: "ETERNITY",
		playtime: "1080 hours",
		ownerland: "10 Land Owner",
		l_avai: "15 Land Availability",
		supchunk: "15 Support Chunk",
		freechunk: "15 Free Chunk",
		chunklimit: "400 Chunk Limit",
		landmember: " 40 Land Member",
		landrole: "5 Land Role",
		description: "- Early Access to new features\n- Player Warp : 8",
		link: "#",
		cardColorClass: styles.eternity, // Specific color class
	},
]

// Feature component for each card
function Feature({
	title,
	playtime,
	description,
	ownerland,
	l_avai,
	freechunk,
	supchunk,
	chunklimit,
	landmember,
	landrole,
	cardColorClass,
}) {

	return (
		<div className={styles.card}>
			<div className={`${styles.cardColor} ${cardColorClass}`}></div>
			<div className={styles.cardContent}>
				<h3>{title}</h3>
				<info>
					<ICON.Clock />
					{playtime}
				</info>
				<br />
				<h4>Land Information</h4>
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
				<h4>Additional Features</h4>
				<info>
					<p>{description}</p>
				</info>
				{/*<a href={link}>Learn more</a>*/}
			</div>
		</div>
	)
}

// Main RankCard component rendering the list of cards with horizontal scrolling
export default function RankCard() {
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

	return (
		<div className={styles.container}>
			<button className={styles.scrollButton} onClick={scrollLeft}>
				<ICON.AngleLeft />
			</button>
			<div className={styles.cardContainer} ref={scrollRef}>
				{RankList.map((item, idx) => (
					<Feature key={idx} {...item} />
				))}
			</div>
			<button className={styles.scrollButton} onClick={scrollRight}>
				<ICON.AngleRight />
			</button>
		</div>
	)
}
