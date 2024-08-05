import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'Patch Notes',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Learn about the latest changes on the server. We are constantly updating the server to make it better.
            </>
        ),
        linkToPage: '/docs/intro',
        buttonDescription: 'Explore Patch Notes'
    },
    {
        title: 'Features',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Lamalia have some of its own core features extended from a traditional minecraft.
            </>
        ),
        linkToPage: '/docs/category/features',
        buttonDescription: 'Explore Features'
    },
    {
        title: 'Quality of Life',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                We have tons of quality of life changes. Make sure to read it all to not miss out .
            </>
        ),
        linkToPage: '/docs/intro',
        buttonDescription: 'Explore Quality of Life'
    },
];

function Feature({Svg, ImgSrc, title, description, linkToPage, buttonDescription}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {Svg ? (
                    <Svg className={styles.featureSvg} role="img"/>
                ) : (
                    <img src={ImgSrc} className={styles.featureImg} alt={title} role="img"/>
                )}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
            <div className={styles.buttons}>
                <Link

                    className="button button--secondary button--lg"
                    to={linkToPage}>
                    {buttonDescription}
                </Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}