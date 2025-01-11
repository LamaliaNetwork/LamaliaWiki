import React, { useRef } from "react";
import styles from "./styles.module.css";

// Rank List data
const RankList = [
  {
    title: "SUPPORTER I",
    price: "199THB",
    ownerland: "4 Land Owner",
    l_avai: "9 Land Availability",
    supchunk: "7 Support Chunk",
    freechunk: "15 Free Chunk",
    chunklimit: "90 Chunk Limit",
    arealimit: "3 Area Limit",
    landmember: "18 Land Member",
    landrole: "6 Land Role",
    description: "- Access Diamond Rank Features\n- /hat command\n - Player Market Capacity : 3\n- Player Market Time : 10 Days\n- Image Map : 10\n- Max Homes : 5\n- Chest Shop : 10\n- Player Warp : 2",
    link: "#",
    cardTTClass: styles.SupI,
  },
  {
    title: "SUPPORTER II",
    price: "399THB",
    ownerland: "7 Land Owner",
    l_avai: "12 Land Availability",
    supchunk: "7 Support Chunk",
    freechunk: "15 Free Chunk",
    chunklimit: "90 Chunk Limit",
    arealimit: "5 Area Limit",
    landmember: "18 Land Member",
    landrole: "6 Land Role",
    description: "- Access Suppoerter I Features\n- Unlock all Pose /crawl, /bellyflop, /lay, /spin, /sit and sit on other player head\n - Player Market Capacity : 5\n- Player Market Time : 12 Days\n- Image Map : 15\n- Max Homes : 5\n- Chest Shop : 15\n- Player Warp : 4",
    link: "#",
    cardTTClass: styles.SupII,
  },
  {
    title: "SUPPORTER III",
    price: "799THB",
    ownerland: "10 Land Owner",
    l_avai: "15 Land Availability",
    supchunk: "7 Support Chunk",
    freechunk: "15 Free Chunk",
    chunklimit: "90 Chunk Limit",
    arealimit: "7 Area Limit",
    landmember: "18 Land Member",
    landrole: "7 Land Role",
    description: "- Access Suppoerter I-II Features\n- Auto Tree Chopping Unlimited\n - Player Market Capacity : 10\n- Player Market Time : 15 Days\n- Image Map : 20\n- Max Homes : 7\n- Chest Shop : 15\n- Player Warp : 6",
    link: "#",
    cardTTClass: styles.SupIII,
  },
  {
    title: "SUPPORTER IV",
    price: "1,499THB",
    ownerland: "15 Land Owner",
    l_avai: "20 Land Availability",
    supchunk: "15 Support Chunk",
    freechunk: "15 Free Chunk",
    chunklimit: "90 Chunk Limit",
    arealimit: "10 Area Limit",
    landmember: "18 Land Member",
    landrole: "10 Land Role",
    description: "- Access Suppoerter I-III\n- Early Access to new features\n- Buy/Sell in Player Shop using /ah [sell/buy][price] command\n- /tpignore command \n - Player Market Capacity : 15\n- Player Market Time : 20 Days\n- Image Map : 25\n- Max Homes : 10\n- Chest Shop : 20\n- Player Warp : 10",
    link: "#",
    cardTTClass: styles.SupIV,
  },
  {
    title: "SUPPORTER V",
    price: "2,999THB",
    ownerland: "20 Land Owner",
    l_avai: "30 Land Availability",
    supchunk: "25 Support Chunk",
    freechunk: "15 Free Chunk",
    chunklimit: "90 Chunk Limit",
    arealimit: "15 Area Limit",
    landmember: "65 Land Member",
    landrole: "15 Land Role",
    description: "- Access Suppoerter I-IV\n- /ptime command  to change the time in the server(Personal)\n- /pweather command to change the season in the server(Personal)\n- /back command to teleport to the previous location.\n - Player Market Capacity : 30\n- Player Market Time : 30 Days\n- Image Map : 30\n- Max Homes : 15\n- Chest Shop : 30\n- Player Warp : 15",
    link: "#",
    cardTTClass: styles.SupV,
  },
];

// Feature component for each card
function Feature({
  title,
  price,
  description,
  ownerland,
  l_avai,
  freechunk,
  supchunk,
  chunklimit,
  arealimit,
  landmember,
  landrole,
  cardTTClass,
}) {
  return (
    <div className={styles.card}>
      <div className={`${styles.cardTT} ${cardTTClass}`}></div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <info>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M21.402 15.643A4.97 4.97 0 0 0 23 12v-1a5.006 5.006 0 0 0-5-5h-1V3h-2v3h-5v20h5v3h2v-3h2a5.006 5.006 0 0 0 5-5v-1a4.98 4.98 0 0 0-2.598-4.357M12 8h6a3.003 3.003 0 0 1 3 3v1a3.003 3.003 0 0 1-3 3h-6Zm10 13a3.003 3.003 0 0 1-3 3h-7v-7h7a3.003 3.003 0 0 1 3 3Z"
            />
          </svg>
          {price}
        </info>
        <br />
        <h4>Land Information</h4>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m3.1 11.3l3.6 3.3l-1 4.6c-.1.6.1 1.2.6 1.5c.2.2.5.3.8.3c.2 0 .4 0 .6-.1c0 0 .1 0 .1-.1l4.1-2.3l4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1c.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7l.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5l-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1s-1 .3-1.3.8c0 0 0 .1-.1.1L8.7 8.2L4 8.7h-.1c-.5.1-1 .5-1.2 1c-.1.6 0 1.2.4 1.6"
            ></path>
          </svg>
          {ownerland}
        </info>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.855 20.966c-.224 0-.443-.05-.646-.146l-.104-.051l-4.107-2.343l-4.107 2.344l-.106.053a1.52 1.52 0 0 1-1.521-.143a1.5 1.5 0 0 1-.586-1.509l.957-4.642l-1.602-1.457l-1.895-1.725l-.078-.082a1.5 1.5 0 0 1-.34-1.492c.173-.524.62-.912 1.16-1.009l.102-.018l4.701-.521l1.946-4.31l.06-.11a1.5 1.5 0 0 1 1.309-.771c.543 0 1.044.298 1.309.77l.06.112l1.948 4.312l4.701.521l.104.017c.539.1.986.486 1.158 1.012c.17.521.035 1.098-.34 1.494l-.078.078l-3.498 3.184l.957 4.632a1.51 1.51 0 0 1-.59 1.519a1.5 1.5 0 0 1-.874.281m-8.149-6.564c-.039.182-.466 2.246-.845 4.082l3.643-2.077a1 1 0 0 1 .99 0l3.643 2.075l-.849-4.104a1 1 0 0 1 .308-.942l3.1-2.822l-4.168-.461a1 1 0 0 1-.801-.584l-1.728-3.821l-1.726 3.821c-.146.322-.45.543-.801.584l-4.168.461l3.1 2.822a1 1 0 0 1 .302.966"
            ></path>
          </svg>
          {l_avai}
        </info>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5"
            ></path>
          </svg>
          {freechunk}
        </info>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46l-7.05 7.04l-.66-.63a3 3 0 0 1 0-4.24l4.24-4.24a3 3 0 0 1 4.24 0L16.48 9c.39.39.39 1.02 0 1.41m.7-2.12c.78.78.78 2.05 0 2.83c-1.27 1.27-2.61.22-2.83 0l-3.76-3.76l-5.57 5.57a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 1 0 1.41 1.41l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 1 0 1.41 1.41l8.32-8.34a3 3 0 0 0 0-4.24l-4.24-4.24a3 3 0 0 0-4.18-.06z"
            />
          </svg>
          {supchunk}
        </info>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m18.25 7.6l-5.5-3.18a1.49 1.49 0 0 0-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3M7 14.96v-4.62l4 2.32v4.61zm5-4.03L8 8.61l4-2.31l4 2.31zm1 6.34v-4.61l4-2.32v4.62zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3z"
            />
          </svg>
          {chunklimit}
        </info>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14 9l-1-2H7V5.72c.6-.34 1-.98 1-1.72c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V21h2v-4h5l1 2h7V9zm4 8h-4l-1-2H7V9h5l1 2h5z"
            ></path>
          </svg>
          {arealimit}
        </info>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6"
            ></path>
          </svg>
          {landmember}
        </info>
        <info>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87"
            />
            <circle
              cx="9"
              cy="8"
              r="4"
              fill="currentColor"
              fill-rule="evenodd"
            />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4"
            />
          </svg>
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
  );
}

// Main SupporterRankCard component rendering the list of cards with horizontal scrolling
export default function SupporterRankCard() {
  const scrollRef = useRef(null);

  // Scroll right function
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Scroll left function
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
          ></path>
        </svg>
      </button>
      <div className={styles.cardContainer} ref={scrollRef}>
        {RankList.map((item, idx) => (
          <Feature key={idx} {...item} />
        ))}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
