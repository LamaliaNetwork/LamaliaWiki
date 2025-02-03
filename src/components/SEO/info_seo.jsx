import React from 'react';
// import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export const WE_Tool = () => {
    return generateMeta({
        description: "It is a tool that facilitates faster building construction.",
        keywords: "Tool, Build, Builder, Upgrades, World edit upgrades, World edit tool"
    })
};

export const HighSpeedRail = () => {
    return generateMeta({
        description: "Speed improvements have been implemented in the tram transport system.",
        keywords: "High, High speed, Rail, minecart, gold, Gold block, speed, Obsidian block, Super powered rail, Super stopper rail"
    });
};

export const LamaliaNetwork = () => {
    return  generateMeta({
        description: "The official website of Lamalia Network.",
        keywords: "Lamalia, Wiki, Lamalia Network, Minecraft, Server, Wiki, Lamalia Wiki"
    });
}

const generateMeta = ({description, keywords}) => {
    const defaultKeywords = "Lamalia, Wiki, Lamalia Network, Minecraft, Server, Wiki, Lamalia Wiki, ";

    return (
        <Head>
            <meta name="description" content={description} />
            <meta name="keywords" content={defaultKeywords + keywords} />
            <meta name="author" content="Lamalia Team." />
        </Head>
    );
}
