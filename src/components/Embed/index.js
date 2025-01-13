import React, { useState } from "react";
import styles from "./styles.module.css";

const QOLEmbed = () => {
  const [activeTab, setActiveTab] = useState("codecks");

  return (
<div>
  <div className={styles.btnlayout}>
    <div
      className={`${styles.btnEmbed} ${activeTab === "codecks" ? styles.active : ""}`}
      onClick={() => setActiveTab("codecks")}
    >
      Codecks
    </div>
    <div
      className={`${styles.btnEmbed} ${activeTab === "map" ? styles.active : ""}`}
      onClick={() => setActiveTab("map")}
    >
      Map
    </div>
  </div>

  <div className={styles.iframeContainer}>
    {activeTab === "codecks" && (
      <iframe
        src="https://open.codecks.io/lamalia-public"
        title="Codecks"
      ></iframe>
    )}
    {activeTab === "map" && (
      <iframe
        src="https://map.lamalia.net/"
        title="Lamalia Map"
      ></iframe>
    )}
  </div>
</div>
  );
};

export default QOLEmbed;
