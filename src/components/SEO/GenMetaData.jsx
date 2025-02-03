import React from 'react';
// import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export const GenMetaData = ({description, keywords}) => {
    const defaultKeywords = "Lamalia, Wiki, Lamalia Network, Minecraft, Server, Wiki, Lamalia Wiki, ";

    return (
        <Head>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="keywords" content={defaultKeywords + keywords} />
            <meta name="author" content="Lamalia Team." />
        </Head>
    );
}

export default GenMetaData;