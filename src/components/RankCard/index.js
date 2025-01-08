import React, { useRef } from "react";
import styles from "./styles.module.css";

// Rank List data
const RankList = [
  {
    title: "IRON",
    description: "ฟีเจอร์",
    playtime: "Default",
    ownerland: "1 Land Owner",
    l_avai: "3 Land Available",
    landmember: " 10 Land Member",
    link: "#",
    cardColorClass: styles.iron, // Specific color class
  },
  {
    title: "BRONZE",
    playtime: "6 hours",
    description: "ฟีเจอร์",
    link: "#",
    cardColorClass: styles.bronze, // Specific color class
  },
  {
    title: "SILVER",
    playtime: "20 hours",
    description: "ฟีเจอร์",
    link: "#",
    cardColorClass: styles.silver, // Specific color class
  },
  ,
  {
    title: "GOLD",
    playtime: "43 hours",
    description: "ฟีเจอร์",
    link: "#",
    cardColorClass: styles.gold, // Specific color class
  },
  ,
  {
    title: "PLATINUM",
    playtime: "78 hours",
    description: "ฟีเจอร์",
    link: "#",
    cardColorClass: styles.platinum, // Specific color class
  },
];

// Feature component for each card
function Feature({
  title,
  playtime,
  description,
  ownerland,
  l_avai,
  landmember,
  cardColorClass,
}) {
  return (
    <div className={styles.card}>
      <div className={`${styles.cardColor} ${cardColorClass}`}></div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <info>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3z"
            ></path>
          </svg>
          {playtime}
        </info>
        <h4>Land Information</h4>
        <info><br/>
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
        <info><br/>
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
        <info><br/>
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
        <info>{description}</info>
        {/*<a href={link}>Learn more</a>*/}
      </div>
    </div>
  );
}

// Main RankCard component rendering the list of cards with horizontal scrolling
export default function RankCard() {
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"></path></svg>
      </button>
      <div className={styles.cardContainer} ref={scrollRef}>
        {RankList.map((item, idx) => (
          <Feature key={idx} {...item} />
        ))}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"></path></svg>
      </button>
    </div>
  );
}
