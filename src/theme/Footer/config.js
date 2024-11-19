// footerconfig.js
export const footerConfig = {
  copyrightText: `Copyright © ${new Date().getFullYear()} Lamalia Network.`,
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61556568863338",
    discord: "https://discord.gg/pH7P23uVSu",
    store: "https://store.lamalia.net/",
  },
  footerSections: [
    {
      title: "Official Store",
      links: [{ text: "Store", url: "https://store.lamalia.net/" }],
    },
    {
      title: "Resources",
      links: [
        { text: "Docs", url: "/docs/intro" },
        { text: "Blacklist", url: "/blacklist" },
      ],
    },
    {
      title: "Follow us",
      links: [
        {
          text: "Facebook",
          url: "https://www.facebook.com/profile.php?id=61556568863338",
        },
        { text: "Discord", url: "https://discord.gg/pH7P23uVSu" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Rules", url: "/rules" },
        { text: "Privacy Policy", url: "/privacy" },
      ],
    },
  ],
};
