const customEnchantments = {
  custom: {
    Tool: [
      {
        name: "Power Mine",
        maxLevel: 3,
        description: "Increased digging distance 3x%placeholder%x3 (wxdxh)",
        placeholder: "%level% * 1",
        conflict: ["Vein Miner"],
      },
      {
        name: "Vein Miner, Replanish",
        maxLevel: 3,
        description: "mines up to %placeholder% blocks of the ore vein at once",
        placeholder: "%level% + 4",
        conflict: ["Power Mine"],
      },
      {
        name: "Replanish",
        maxLevel: 1,
        description: "Replenish the blocks where you harvested the produce.",
        placeholder: "%level% * 1",
        conflict: ["Power Mine, Vein Miner"],
      },
    ],
    Special: [
      {
        name: "Repairing",
        maxLevel: 3,
        description: "Repair items by %placeholder% durability when not in use. per 5 seconds",
        placeholder: "%level% + 1 ",
        conflict: ["Mending"],
      }
    ]
  },
};

export default customEnchantments;