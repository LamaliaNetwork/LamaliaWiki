---
sidebar_position: 8
---
# World Edit Tool 🪓

![WE Tools](\img\doc\features\we_tools\WE_Tool.gif)

:::warning
Currently for early access.
:::

## Set Position Region

### Region Postion 1

```
Left Click Set Position 1 (Pos1)
```

### Region Position 2

```
Right Click Set Position 2 (Pos2)
```

## Commands

:::tip
All material must be from you inventory
:::

### /set

```
/set <material> to set selected area to that material
```

Description : Sets all the blocks in the region

|    Usage     | Description                   |
| :----------: | ----------------------------- |
| `<material>` | The material of blocks to set |

### /replace

```
/replace <target> <material> replace something with the material you wanted
```

Description : Replace all blocks in the selection with another

|    Usage     | Description                             |
| :----------: | --------------------------------------- |
| `<material>` | The material of blocks to set           |
|  `<target>`  | The mask representing blocks to replace |

:::tip
Tools have different speeds and uses.

- `You don't have enough uses left! Need: <recharge>`
  - Uses: This refers to the total number of blocks that will be set and replaced. If this number is insufficient, a message will appear indicating the required number of recharges.
- `Operation complete! Used <material> blocks`
  - Used: This represents the total quantity of materials consumed during the operation.
- Recharging: Tool uses can be recharge by:

  - Shift + Left Click: This is a quick method to recharge the tool.
  - /upgrade: This is another option for recharging and upgrading the tool.
    :::

:::danger
Tool speed upgrades are currently unavailable.
:::

## World Edit Upgrades

<!-- ### Speed Upgrade

![Speed_Upgrade](/img/doc/features/we_tools/Speed_Upgrade.png)
Speed Upgrade: This upgrade enhances the speed capabilities of the tool. This will allow players to construct things at an increased speed, as follows:

| Level | `<material>`/s |     Cost |
| :---- | -------------: | -------: |
| I     |            `5` |  default | -->

### Uses Upgrade

![Uses_Upgrade](/img/doc/features/we_tools/Uses_Upgrade.png)
Uses Upgrade: This recharge is used to place blocks. It costs 1 recharge per block placed. The costs are shown as follows.

| Press               | Recharge |  Cost |
| ------------------- | -------: | ----: |
| Left Click          |       +1 |    5$ |
| Shift + Left Click  |      +10 |   50$ |
| Right Click         |     +100 |  500$ |
| Shift + Right Click |    +1000 | 5000$ |

## History

| Date | [Lamalia Release](/patchNotes) | Description |
|-------------|-----------|-------------|
| 24/01/2025 | [2.2.0](/patchNotes#patch-220) | - Added: Worldedit tools to Beta Testers. |