﻿# Enchantments Guide

:::tip How to get overloaded enchantments
To get overloaded enchantments, simply combine 2 enchantments of the same level to get the next level.
<br/><black>[ 4+4 = 5, 5+5 = 6, ... ]</black>
<br/>The cost will not get too expensive ever!
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="vanilla" label="Vanilla Enchantments" default>

## Armor Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| Protection | 4 | Reduces incoming damage by **%placeholder%** | `%level% * 4` |
| Fire Protection | 4 | Reduces incoming fire damage by **%damage%** and burn time by **%time%** | damage: `%level% * 8`<br/>time: `%level% * 15` |
| Feather Falling | 4 | Reduces fall damage by **%placeholder%** | `%level% * 12` |
| Blast Protection | 4 | Reduces incoming explosion damage by **%damage%** and incoming blast knockback by **%knockback%** | damage: `%level% * 8`<br/>knockback: `%level% * 15` |
| Projectile Protection | 4 | Reduces incoming projectile damage by **%placeholder%** | `%level% * 8` |
| Respiration | 3 | Extends underwater breathing time by **%seconds%** seconds and gives a **%chance%** chance to ignore drowning damage | seconds: `15 * %level%`<br/>chance: `%level% / (%level% + 1)` |
| Aqua Affinity | 1 | Removes underwater mining speed penalty | - |
| Thorns | 3 | Gives a **%placeholder%** chance to reflect some incoming damage to the attacker | `%level% * 15` |
| Depth Strider | 3 | Reduces underwater movement slowdown by **%placeholder%** | `%level% * 33.333333` |
| Frost Walker | 2 | Turns water within a **%placeholder%** block radius of the player into ice | `%level% + 2` |
| Soul Speed | 3 | Increases walking speed on soul sand and soul soil by **%placeholder%** | `(%level% * 0.105) + 1.3` |
| <green> Swift Sneak </green> | <green> 4 </green> | Reduces sneaking movement slowdown by **%placeholder%** | `min(%level% * 15, 100)` |

## Weapon Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| <green> Sharpness </green> | <green> 20 </green>| Deals **%placeholder%** bonus melee damage | `0.5 * %level% + 1` |
| <green> Smite </green> | <green> 6 </green> | Gives a **%placeholder%** bonus to melee damage against undead mobs | `2.5 * %level%` |
| <green> Bane of Arthropods </green> | <green> 6 </green> | Gives a **%damage%** bonus to melee damage against arthropods and gives up to **%seconds%** seconds of Slowness IV | damage: `2.5 * %level%`<br/>seconds: `0.5 * %level%` |
| <green> Knockback </green> | <green> 5 </green> | Gives a **%placeholder%** bonus to attack knockback | `%level% * 85 + 20` |
| <green> Fire Aspect </green> | <green> 4 </green> | Sets opponents on fire, dealing damage each fire tick | - |
| Looting | 3 | Increases maximum common drops by **%common%**, and the chance to get rare drops by **%rare%** | common: `%level%`<br/>rare: `%level%` |
| Sweeping Edge | 3 | Increases sweeping attack damage by **%placeholder%** | `%level% / (%level% + 1)` |

## Tool Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| <green> Efficiency </green> | <green> 10 </green> | Increases mining speed by **%placeholder%** | `20 + 5 * %level%` |
| Silk Touch | 1 | Mined blocks drop themselves exactly | - |
| <green> Unbreaking </green> | <green> 7 </green> | Increases item durability **%placeholder%** | `%level% + 1` |
| <green> Fortune </green> | <green> 4 </green> | Gives a **%placeholder%** boost to certain block drops | `ceil(((1 / (%level% + 2)) + ((%level% + 1) / 2)) * 100 - 100)` |

## Bow Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| <green> Power </green> | <green> 8 </green> | Gives a **%placeholder%** bonus to arrow damage | `25 * (%level% + 1)` |
| <green> Punch </green> | <green> 5 </green> | Increases arrow knockback by **%placeholder%** blocks | `3 * %level%` |
| Flame | 1 | Arrows set target on fire, dealing **5** fire damage | - |
| <green> Infinity </green> | 1 | Stops regular arrows from being consumed when shot <br/> <green> New! Do not conflict with mending </green> | - |

## Fishing Rod Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| Luck of the Sea | 3 | Increases chance of getting treasure loot by **%placeholder%** | `2 * %level%` |
| <green> Lure </green> | <green> 4 </green> | Decreases fishing wait time by **%placeholder%** seconds | `%level% * 5` |

## Trident Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| Loyalty | 3 | Trident returns after being thrown | - |
| Impaling | 5 | Deals **%placeholder%** additional damage to ocean mobs | `%level% * 2.5` |
| Riptide | 3 | Trident launches player when thrown in water or while raining | - |
| Channeling | 1 | Strikes lightning where trident lands during thunderstorms | - |

## Crossbow Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------| 
| Multishot | 1 | Shoots 3 arrows instead of 1 | - |
| <green> Quick Charge </green> | <green> 5 </green> | Decreases crossbow charging time by **%placeholder%** seconds | `%level% * 0.25` |
| Piercing | 4 | Arrows pass through **%placeholder%** entities | `%level% + 1` |

## Special Enchantments

| Enchantment | Max Level | Description | Notes |
|-------------|-----------|-------------|-------|
| <green> Mending </green> | 1 | Repair the item while gaining XP orbs | <green> Does not conflict with Infinity </green> |
| Curse of Binding | 1 | Items cannot be removed from armor slots | Curse |
| Curse of Vanishing | 1 | Item destroyed on death | Curse |

  </TabItem>
  <TabItem value="custom" label="Custom Enchantments">

## Weapon Enchantments

| Enchantment | Max Level | Description | Placeholder | Rarity | Applies To | Conflicts |
|-------------|-----------|-------------|-------------|--------|------------|-----------|
| Flaming Edge | 10 | Gives a **%placeholder%** chance to cause your opponent to burn, Burn damage depends on hit damage | `2.5 * %level%` | Rare | Sword | Fire Aspect |
| LifeSteal | 10 | Heals **%placeholder%** of damage dealt | `%level% * 1` | Rare | Sword | - |

## Tool Enchantments

| Enchantment | Max Level | Description | Placeholder | Rarity | Applies To |
|-------------|-----------|-------------|-------------|--------|------------|
| Excavation | 5 | Digs **%placeholder%** extra blocks | `%level%` | Rare | Shovel |
| Veinminer | 4 | Mine up to **%placeholder%** blocks in veins at once | `2 + 3 * %level%` | Rare | Pickaxe |
| Replenish | 1 | Crops are replanted automatically | - | Legendary | Hoe |

## Armor Enchantments

| Enchantment | Max Level | Description | Rarity | Applies To |
|-------------|-----------|-------------|--------|------------|
| Feather Step | 1 | Prevents trampling crops by jumping on them | Legendary | Boots |
| Health | 5 | Gives **%level%** bonus health | Legendary | Armor |

## Bow Enchantments

| Enchantment | Max Level | Description | Placeholder | Rarity | Applies To |
|-------------|-----------|-------------|-------------|--------|------------|
| Snipe | 6 | Arrows deal **%damage%** more damage for each **%blocks%** blocks travelled | damage: `1 * %level%`<br/>blocks: `15 - ceil(%level% / 2)` | Epic | Bow |
| Tripleshot | 1 | Shoot 3 arrows instead of 1 | - | Legendary | Bow |

## Special Enchantments

| Enchantment | Max Level | Description | Rarity | Applies To | Conflicts |
|-------------|-----------|-------------|--------|------------|-----------|
| Repairing | 3 | Automatically gain ( **%level%** x2 ) durability every 5 seconds | Very Special | All | Mending |

:::note Removed Enchantment
The "Bleed" enchantment (Max Level 10) has been removed from the game.
:::

  </TabItem>
</Tabs>