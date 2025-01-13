import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import QOLEmbed from "../components/Embed";

export default function EmbedPage() {
  return (
    <Layout>
      <main>
        <header className={clsx("hero hero--black", styles.heroBanner)}>
          <div className="container">
            <span className="content">
              <QOLEmbed />
            </span>
          </div>
        </header>
      </main>
    </Layout>
  );
}
