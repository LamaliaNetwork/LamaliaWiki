import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
    {
        title: 'Patch Notes',
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
        description: (
            <>
                We have tons of quality of life changes. Make sure to read it all to not miss out .
            </>
        ),
        linkToPage: '/docs/intro',
        buttonDescription: 'Explore Quality of Life'
    },
];

function Feature({title, description, linkToPage, buttonDescription}) {
    return (
        <div className={clsx('col col--4')}>
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

export default function FeaturePage() {
    return (
        <div className={styles.container}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </div>
    );
}