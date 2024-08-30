# Enchantments Guide

<!-- Enchantments Guide TH -->
<!-- Voyl_x 240821 -->

:::tip How to get overloaded enchantments
วิธีได้เอนแชนต์เมนต์ที่เกินระดับ<br/>
ให้รวมเอนแชนต์เมนต์สองอันที่มีระดับเดียวกันเพื่อให้ได้ระดับถัดไป
<black>[ 4+4 = 5, 5+5 = 6, ... ]</black>
<br/>ค่าใช้จ่ายจะไม่แพงมากเกินไป!
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="vanilla" label="Vanilla Enchantments" default>

## Armor Enchantments [หมวดเกราะ]

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| Protection | 4 | ลดความเสียหายที่ได้รับลง **%placeholder%** | `%level% * 4` |
| Fire Protection | 4 | ลดความเสียหายจากไฟที่ได้รับลง **%damage%** และเวลาที่ถูกเผา **%time%** | damage: `%level% * 8`<br/>time: `%level% * 15` |
| Feather Falling | 4 | ลดความเสียหายจากการตกลง **%placeholder%** | `%level% * 12` |
| Blast Protection | 4 | ลดความเสียหายจากการระเบิดที่ได้รับลง **%damage%** และลดการกระแทกจากการระเบิดลง **%knockback%** | damage: `%level% * 8`<br/>knockback: `%level% * 15` |
| Projectile Protection | 4 | ลดความเสียหายจากการยิงลูกธนูที่ได้รับลง **%placeholder%** | `%level% * 8` |
| Respiration | 3 | ขยายเวลาการหายใจใต้น้ำออกไป **%seconds%** วินาที และให้โอกาส **%chance%** ที่จะไม่ได้รับความเสียหายจากการจมน้ำ | seconds: `15 * %level%`<br/>chance: `%level% / (%level% + 1)` |
| Aqua Affinity | 1 | ยกเลิกการลดความเร็วในการขุดใต้น้ำ | - |
| Thorns | 3 | ให้โอกาส **%placeholder%** ที่จะสะท้อนความเสียหายที่ได้รับกลับไปที่ผู้โจมตี | `%level% * 15` |
| Depth Strider | 3 | ลดอัตราการชะลอการเคลื่อนที่ใต้น้ำลง **%placeholder%** | `%level% * 33.333333` |
| Frost Walker | 2 | เปลี่ยนน้ำในรัศมี **%placeholder%** บล็อกรอบตัวผู้เล่นให้กลายเป็นน้ำแข็ง | `%level% + 2` |
| Soul Speed | 3 | เพิ่มความเร็วในการเดินบน Soul Sand และ Soul Soil ขึ้น **%placeholder%** | `(%level% * 0.105) + 1.3` |
| <green> Swift Sneak </green> | <green> 4 </green> | ลดความเร็วในการเดินขณะหลบซ่อนลง **%placeholder%** | `min(%level% * 15, 100)` |


## Weapon Enchantments [หมวดอาวุธ]

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| <green> Sharpness </green> | <green> 20 </green>| เพิ่มความเสียหายระยะประชิด **%placeholder%** | `0.5 * %level% + 1` |
| <green> Smite </green> | <green> 6 </green> | เพิ่มความเสียหายระยะประชิด **%placeholder%** ต่อต่อมอนสเตอร์ Undead | `2.5 * %level%` |
| <green> Bane of Arthropods </green> | <green> 6 </green> | เพิ่มความเสียหายระยะประชิด **%damage%** ต่อต่อสัตว์จำพวก Arthropods และให้ Slowness IV เป็นเวลา **%seconds%** วินาที | damage: `2.5 * %level%`<br/>seconds: `0.5 * %level%` |
| <green> Knockback </green> | <green> 5 </green> | เพิ่มการกระแทกจากการโจมตี **%placeholder%** | `%level% * 85 + 20` |
| <green> Fire Aspect </green> | <green> 4 </green> | ทำให้คู่ต่อสู้ติดไฟ, ทำให้เกิดความเสียหายจากไฟในแต่ละการติดไฟ | - |
| Looting | 3 | เพิ่มจำนวนการดรอปของสิ่งของทั่วไปสูงสุด **%common%** และโอกาสในการดรอปสิ่งของที่หายาก **%rare%** | common: `%level%`<br/>rare: `%level%` |
| Sweeping Edge | 3 | เพิ่มความเสียหายจากการโจมตีแบบกว้างขึ้น **%placeholder%** | `%level% / (%level% + 1)` |

## Tool Enchantments [หมวดเครื่องมือ]

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| <green> Efficiency </green> | <green> 10 </green> | เพิ่มความเร็วในการขุดขึ้น **%placeholder%** | `20 + 5 * %level%` |
| Silk Touch | 1 | บล็อกที่ขุดได้จะหลุดออกมาตามตัวมันเอง | - |
| <green> Unbreaking </green> | <green> 7 </green> | เพิ่มความทนทานของไอเทม **%placeholder%** | `%level% + 1` |
| <green> Fortune </green> | <green> 4 </green> | ให้โบนัส **%placeholder%** ต่อการดรอปของบล็อกบางประเภท | `ceil(((1 / (%level% + 2)) + ((%level% + 1) / 2)) * 100 - 100)` |

## Bow Enchantments [หมวดธนู]

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| <green> Power </green> | <green> 8 </green> | เพิ่มความเสียหายจากลูกธนู **%placeholder%** | `25 * (%level% + 1)` |
| <green> Punch </green> | <green> 5 </green> | เพิ่มการกระแทกลูกธนูขึ้น **%placeholder%** บล็อก | `3 * %level%` |
| Flame | 1 | ลูกธนูทำให้เป้าหมายติดไฟ, ทำให้ความเสียหายจากไฟ **5** | - |
| <green> Infinity </green> | 1 | ป้องกันไม่ให้ลูกธนูธรรมดาหายไปเมื่อยิง <br/> <green> New! ไม่ขัดแย้งกับ Mending </green> | - |

## Fishing Rod Enchantments [หมวดเบ็ดตกปลา]

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| Luck of the Sea | 3 | Increases chance of getting treasure loot by **%placeholder%** | `2 * %level%` |
| <green> Lure </green> | <green> 4 </green> | Decreases fishing wait time by **%placeholder%** seconds | `%level% * 5` |
| Luck of the Sea | 3 | **เพิ่มโอกาสในการได้รับของล้ำค่าขี้น %placeholder% ** | `2 * %level%` |
| <green> Lure </green> | <green> 4 </green> | ลดเวลาในการรอจับปลาลง %placeholder% วินาที | `%level% * 5` |

## Trident Enchantments

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------|
| Loyalty | 3 | ไทรเด้นต์จะกลับมาหลังจากถูกขว้างไป | - |
| Impaling | 5 | เพิ่มความเสียหาย **%placeholder%** ต่อมอนสเตอร์ในทะเล | `%level% * 2.5` |
| Riptide | 3 | ไทรเด้นต์จะทำให้ผู้เล่นลอยขึ้นเมื่อขว้างไปในน้ำหรือขณะฝนตก | - |
| Channeling | 1 | ทำให้เกิดฟ้าผ่าในที่ที่ไทรเด้นต์ตกลงในช่วงพายุฟ้าคะนอง | - |

## Crossbow Enchantments [หมวดหน้าไม้]

| Enchantment | Max Level | Description | Placeholder |
|-------------|-----------|-------------|-------------| 
| Multishot | 1 | ยิงลูกธนู 3 ดอกในครั้งเดียว | - |
| <green> Quick Charge </green> | <green> 5 </green> | ลดระยะเวลาในการชาร์จลง **%placeholder%** วินาที | `%level% * 0.25` |
| Piercing | 4 | ลูกธนูสามารถทะลุ **%placeholder%** สิ่งมีชีวิต | `%level% + 1` |

## Special Enchantments

| Enchantment | Max Level | Description | Notes |
|-------------|-----------|-------------|-------|
| <green> Mending </green> | 1 | ซ่อมแซมไอเทมขณะรับ XP orbs | <green> ไม่ขัดแย้งกับ Infinity </green> |
| Curse of Binding | 1 | ไอเท็มไม่สามารถถอดออกจากช่องเกราะได้ | คำสาป |
| Curse of Vanishing | 1 | ไอเท็มจะหายไปเมื่อผู้เล่นตาย | คำสาป |

  </TabItem>
  <TabItem value="custom" label="Custom Enchantments">

## Weapon Enchantments [หมวดอาวุธ]

| Enchantment | Max Level | Description | Placeholder | Rarity | Applies To | Conflicts |
|-------------|-----------|-------------|-------------|--------|------------|-----------|
| Flaming Edge | 10 | มีโอกาส **%placeholder%** ที่จะทำให้คู่ต่อสู้ติดไฟ ความเสียหายจากการติดไฟจะขึ้นอยู่กับความเสียหายที่เกิดจากการโจมตี | `2.5 * %level%` | Rare | Sword | Fire Aspect |
| LifeSteal | 10 | ฟื้นฟู **%placeholder%** จากความเสียหายที่โจมตีได้ | `%level% * 1` | Rare | Sword | - |

## Tool Enchantments [หมวดเครื่องมือ]

| Enchantment | Max Level | Description | Placeholder | Rarity | Applies To |
|-------------|-----------|-------------|-------------|--------|------------|
| Excavation | 5 | ขุดบล็อกเพิ่มอีก **%placeholder%** บล็อก | `%level%` | Rare | Shovel |
| Veinminer | 4 | ขุดได้สูงสุด **%placeholder%** บล็อกในครั้งเดียว | `2 + 3 * %level%` | Rare | Pickaxe |
| Replenish | 1 | เมื่อเก็บเกี่ยวพืชผลจะถูกปลูกใหม่โดยอัตโนมัติ | - | Legendary | Hoe |

## Armor Enchantments [หมวดเกราะ]

| Enchantment | Max Level | Description | Rarity | Applies To |
|-------------|-----------|-------------|--------|------------|
| Feather Step | 1 | ป้องกันไม่ให้พืชผลถูกทำลายจากการกระโดดเหยียบ | Legendary | Boots |
| Health | 5 | เพิ่มพลังชีวิต **%level%** หน่วย | Legendary | Armor |

## Bow Enchantments [หมวดธนู]

| Enchantment | Max Level | Descriptionห | Placeholder | Rarity | Applies To |
|-------------|-----------|-------------|-------------|--------|------------|
| Snipe | 6 | ลูกธนูทำความเสียหายเพิ่มขึ้น **%damage%** ทุก ๆ **%blocks%** บล็อกที่มันเดินทาง | damage: `1 * %level%`<br/>blocks: `15 - ceil(%level% / 2)` | Epic | Bow |
| Tripleshot | 1 | ยิงลูกธนู 3 ดอกในครั้งเดียว | - | Legendary | Bow |

## Special Enchantments

| Enchantment | Max Level | Description | Rarity | Applies To | Conflicts |
|-------------|-----------|-------------|--------|------------|-----------|
| Repairing | 3 | ซ่อมแซมอัตโนมัติโดยการเพิ่มความทนทาน <br/> ( **%level%** x2 ) ทุก 5 วินาที | Very Special | All | Mending |

:::note Removed Enchantment
The "Bleed" enchantment (Max Level 10) ได้ถูกนำออกจากเกมแล้ว
:::

  </TabItem>
</Tabs>