import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import Iframe from "../components/Iframe"

export default function EmbedPage() {
  return (
    <Layout>
      <main>
        <header className={clsx("hero hero--black", styles.heroBanner)}>
          <div className="container">
            <span className="content">
              <Iframe
                src="https://open.codecks.io/lamalia-public"
                title="Codecks" 
              />
            </span>
          </div>
        </header>
      </main>
    </Layout>
  )
}