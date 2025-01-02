# Chunk Loader

:::info Overview
Chunk Loader เป็นบล็อคพิเศษที่ทำให้พื้นที่โดยรอบทำงาน เสมือนมีผู้เล่นอยู่ในพื้นที่นั้น เมื่อวาง Chunk Loader บล็อคนี้จะทำงานในระยะ 7x7 ชังก์ (โดยมี Chunk Loader เป็นจุดศูนย์กลาง และมีรัศมี 3 ชังก์ในทุกทิศทาง) ทำให้กิจกรรมต่าง ๆ เช่น การทำฟาร์ม การใช้วงจร Redstone และการเกิดของม็อบ ยังคงทำงานแม้ไม่มีผู้เล่นอยู่ในบริเวณนั้น
:::


![Chunk Loader Radius](/img/doc/store/chunkLoader/chunkLoader_1.png)

:::warning
โปรดระวัง! หากอยู่นอกพื้นที่คุ้มครอง ผู้เล่นอื่นสามารถทำลาย Chunk Loader ได้ โปรดวางอยู่ในพื้นที่คุ้มครองเพื่อความปลอดภัยของ Chunk Loader!
:::

### การทำงาน:

**Effect:** ทำงานเหมือนมีผู้เล่นยืนอยู่ในบริเวณนั้น

**รัศมี:** 7x7 ชังก์ (รวม 49 บล็อค โดยมี Chunk Loader เป็นจุดศูนย์กลาง)
![Chunk Loader Radius](/img/doc/store/chunkLoader/chunkLoaderRadius.png)
- <green>**Green**</green>: ชังก์ที่ทำการวาง Chunk Loader
- <silver>**Silver**</silver>: บริเวณทั้งหมดที่ Chunk Loader จะทำงาน

This loader maximizes productivity in your Minecraft world!
Chunk Loader ช่วยเพิ่มผลผลิต เมื่อคุณไม่มีเวลาว่าง

## History

| วันที่ | [Lamalia Release](/patchNotes) | คำอธิบาย |
|-------------|-----------|-------------|
| ก่อน 29/10/2024 | N/A | - เปลี่ยน Chunk Loader เป็น 7x7 |
| 06/07/2024 | [1.9.1](/patchNotes#patch-191) | - แก้ไขโฮโลแกรมสำหรับ chunk loader |
| 01/07/2024 | [1.9.0](/patchNotes#patch-190) | - เพิ่มChunk Loader 5x5 [7d-250THB, 15d-250THB, 30d-350THB] |