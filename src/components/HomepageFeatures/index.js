import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'Patch Notes',
        Svg: require('/img/home/text_compare.svg').default,
        description: (
            <>
                Learn about the latest changes on the server. We are constantly updating the server to make it better.
            </>
        ),
        linkToPage: '/patchNotes',
        buttonDescription: 'Explore Patch Notes'
    },
    {
        title: 'Features',
        Svg: require('/img/home/rocket_launch.svg').default,
        description: (
            <>
                Lamalia have some of its own core features extended from traditional Minecraft.
            </>
        ),
        linkToPage: '/docs/category/features',
    },
    {
        title: 'Quality of Life',
        Svg: require('/img/home/psychiatry.svg').default,
        description: (
            <>
                We have tons of quality of life changes. Make sure to read it all to not miss out.
            </>
        ),
        linkToPage: '/docs/intro',
    }
];

function EventCard() {
    return (
        <div className={styles.eventCard}>
            <strong>Event Date : 16 November 2024</strong>
        </div>
    );
}
function Feature({ Svg, title, description, linkToPage, buttonDescription }) {
    return (
        <div className={clsx('col col--4')}>
            {/*<div className="text--center">*/}
            {/*    {Svg ? (*/}
            {/*        <Svg className={styles.featureSvg} role="img"/>*/}
            {/*    ) : (*/}
            {/*        <img src={ImgSrc} className={styles.featureImg} alt={title} role="img"/>*/}
            {/*    )}*/}
            {/*</div>*/}
            <div className="container card text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
            <div className={styles.buttons}>
                <Link

        <div className={clsx('col col--4', styles.featureCard)}>
            <Link to={linkToPage} className={clsx(styles.cardWrapper)}>
                <div className={clsx('card text--center padding-horiz--md', styles.card)}>
                    <div className={styles.svgWrapper}>
                        {Svg && <Svg className={styles.featureSvg} />}
                    </div>
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.cardSection}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                    <div className="col col--12">
                        <EventCard />
                    </div>
                </div>
            </div>
        </section>
    );
}