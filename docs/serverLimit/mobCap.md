# Mob Cap Limit

This configuration is designed to manage the density of NPCs (villagers, animals, and monsters) in specific areas. It aims to enhance performance by imposing limits on the number of entities within close proximity.

:::danger Please Note:
#### This is subject to change, please monitor regularly!
:::

---

## Animal and Monster Farm Limits

### Animal Farm Limits
- **Maximum Entities**: 50 animals within a chunk.
- **Condition**: 
  - **Entity Type**: All animal types
  - **count**: 50 
  - **radius**: 1 Chunk
- **Action**: Remove excess animals. (Kill)
  
### Monster Farm Limits
- **Maximum Entities**: 50 monsters within a chunk
- **Condition**: 
  - **Entity Type**: All monster types
  - **count**: 50 
  - **radius**: 1 Chunk
- **Action**: Remove excess monsters. (Kill)
---

## Villager Density Limit

### Disable Breeding in Large Villager Farms

Disables breeding if there are 20 or more villagers within a 10-block radius from itself .
- **Condition**: 
  - **Entity Type**: Villager
  - **count**: 20 
  - **radius**: 10 block
- **Action**: Disable breeding without removing existing villagers.

### Villager Limits
- **Maximum Entities**: 20 villagers within a 5-block radius.
- **Condition**: 
  - **Entity Type**: Villager
  - **count**: 20 
  - **radius**: 5 block
- **Action**: Remove excess villagers. (Kill)

---