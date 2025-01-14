// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lamalia Wiki',
  tagline: 'Center of Knowledge in Lamalia',
  favicon: 'img/lamalialogooriginal.svg',

  // Set the production url of your site here
  url: 'https://play.lamalia.net:25590',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LamaliaNetwork', // Usually your GitHub org/user name.
  projectName: 'LamaliaWiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th'],
    localeConfigs: {
      th: {
        label: 'ไทย',
        direction: 'ltr',
        htmlLang: 'th-TH',
        calendar: 'buddhist',
        path: 'th',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
        sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/LamaliaNetwork/LamaliaWiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/LamaliaNetwork/LamaliaWiki/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Lamalia Network',
        logo: {
          alt: 'Lamalia Logo',
          src: 'img/lamalialogoblack.svg',
          srcDark: 'img/lamalialogowhite.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {to: '/patchNotes', label: 'Patch Notes', position: 'left'},
          {to: '/rules', label: 'Rules', position: 'left'},
          {to: '/privacy', label: 'Privacy Policy', position: 'left'},
          {
            type: 'dropdown',
            label: 'More',
            position: 'left',
            items: [
              {
                label: 'Roadmap',
                to: '/More',
              },
              {
                label: 'Map',
                to: '/More',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/LamaliaNetwork/LamaliaWiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pH7P23uVSu',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=61556568863338',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Rules',
                to: '/rules',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Patch Notes', 
                to: '/patchNotes',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LamaliaNetwork/LamaliaWiki',
              },
            ],
          },
          
        ],
        logo: {
          alt: 'Lamalia Network Logo',
          src: 'img/lamalialogowhite.svg',
          href: '/',
          width: 50,
          height: 50,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Lamalia Network.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
      },
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
          },
        },
      ],
    }),
};

export default config;
