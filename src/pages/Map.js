import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import Iframe from "../components/Iframe"

export default function MapPage() {
  return (
    <Layout>
      <main>
        <header className={clsx("hero hero--black", styles.heroBanner)}>
          <div className="container">
            <span className="content">
              <h2>Map</h2>
              <Iframe
                src="https://map.lamalia.net/"
                title="Lamalia Map"
              ></Iframe>
            </span>
          </div>
        </header>
      </main>
    </Layout>
  )
}
