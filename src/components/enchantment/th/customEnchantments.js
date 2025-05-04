const customEnchantments = {
  custom: {
    Tool: [
      {
        name: "Power Mine",
        maxLevel: 3,
        description: "เพิ่มระยะการขุด 3x%placeholder%x3 (กxลxส)",
        placeholder: "%level% * 1",
        conflict: ["Vein Miner"],
      },
      {
        name: "Vein Miner, Replanish",
        maxLevel: 3,
        description: "ขุดได้ถึง %placeholder% บล็อกของสายแร่ในครั้งเดียว",
        placeholder: "%level% + 4",
        conflict: ["Power Mine"],
      },
      {
        name: "Replanish",
        maxLevel: 1,
        description: "ปลูกพืชคืนบล็อคที่คุณเก็บเกี่ยวผลผลิต",
        placeholder: "%level% * 1",
        conflict: ["Power Mine, Vein Miner"],
      },
    ],
    Special: [
      {
        name: "Repairing",
        maxLevel: 3,
        description: "ซ่อมแซมไอเทมด้วยความทนทาน %placeholder% เมื่อไม่ได้ใช้งาน ต่อ 5 วินาที",
        placeholder: "%level% + 1 ",
        conflict: ["Mending"],
      }
    ]
  },
};

export default customEnchantments;