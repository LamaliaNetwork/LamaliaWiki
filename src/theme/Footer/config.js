// footerconfig.js
export const footerConfig = {
  copyrightText: `Copyright © ${new Date().getFullYear()} Lamalia Network.`,
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61556568863338",
    discord: "https://discord.gg/pH7P23uVSu",
    store: "https://lamalia.net/",
  },
  footerSections: [
    {
      title: "Official Store",
      links: [{ text: "Store", url: "https://lamalia.net/" }],
    },
    {
      title: "Resources",
      links: [
        { text: "Docs", url: "/docs/intro" },
        { text: "Patch Notes", url: "/patchNotes" },
        { text: "Maps", url: "/more/Map" },
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
        { text: "Rules", url: "https://lamalia.net/rules" },
        { text: "Terms of Service", url: "https://lamalia.net/terms" },
        { text: "Privacy Policy", url: "https://lamalia.net/privacy" },
      ],
    },
  ],
};
