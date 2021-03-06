# Recorded Some Regular Used Docs

## Controller

> * [Control | Screeps Documentation](https://docs.screeps.com/control.html)

| RCL | Energy to upgrade | Structures                                                                                                                                                                    |
| --- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | —                 | Roads, 5 Containers                                                                                                                                                           |
| 1   | 200               | Roads, 5 Containers, 1 Spawn                                                                                                                                                  |
| 2   | 45,000            | Roads, 5 Containers, 1 Spawn, 5 Extensions (50 capacity), Ramparts (300K max hits), Walls                                                                                     |
| 3   | 135,000           | Roads, 5 Containers, 1 Spawn, 10 Extensions (50 capacity), Ramparts (1M max hits), Walls, 1 Tower                                                                             |
| 4   | 405,000           | Roads, 5 Containers, 1 Spawn, 20 Extensions (50 capacity), Ramparts (3M max hits), Walls, 1 Tower, Storage                                                                    |
| 5   | 1,215,000         | Roads, 5 Containers, 1 Spawn, 30 Extensions (50 capacity), Ramparts (10M max hits), Walls, 2 Towers, Storage, 2 Links                                                         |
| 6   | 3,645,000         | Roads, 5 Containers, 1 Spawn, 40 Extensions (50 capacity), Ramparts (30M max hits), Walls, 2 Towers, Storage, 3 Links, Extractor, 3 Labs, Terminal                            |
| 7   | 10,935,000        | Roads, 5 Containers, 2 Spawns, 50 Extensions (100 capacity), Ramparts (100M max hits), Walls, 3 Towers, Storage, 4 Links, Extractor, 6 Labs, Terminal                         |
| 8   | —                 | Roads, 5 Containers, 3 Spawns, 60 Extensions (200 capacity), Ramparts (300M max hits), Walls, 6 Towers, Storage, 6 Links, Extractor, 10 Labs, Terminal, Observer, Power Spawn |

## Creep

> * [doc](https://docs.screeps.com/api/#Creep)
> * [Creep | Screeps Wiki | FANDOM powered by Wikia](https://screeps.fandom.com/wiki/Creep)

Body part cost

* `MOVE`: 50
* `WORK`: 100
* `CARRY`: 50

([**screeps body calculator**!!](https://codepen.io/findoff/details/RPmqOd))

> * [Is there a way to check to body parts of a creep? | Screeps Forum](https://screeps.com/forum/topic/1819/is-there-a-way-to-check-to-body-parts-of-a-creep)

## Structure

* Extension
  * [StructureExtension](https://docs.screeps.com/api/#StructureExtension)
* Road
  * [Road | Screeps Wiki | FANDOM powered by Wikia](https://screeps.fandom.com/wiki/Road)
* Rampart
  * [Rampart | Screeps Wiki | FANDOM powered by Wikia](https://screeps.fandom.com/wiki/Rampart)
* Tower
  * [StructureTower](https://docs.screeps.com/api/#StructureTower)

## Resources

### Sources

* `FIND_SOURCES`
* creep.harvest

### Dropped Resources

* `FIND_DROPPED_RESOURCES`
* creep.pickup

> * [Only pick up energy?](https://screeps.com/forum/topic/846/only-pick-up-energy)

## Global Objects

* [Global Objects | Screeps Documentation](https://docs.screeps.com/global-objects.html)

### Game

> * [doc](https://docs.screeps.com/api/#Game)

### Memory

## Utilities

* `_.filter`
* `_.sortBy`
  * [Is there anyway to sort a find() by the closest Objects? : screeps](https://www.reddit.com/r/screeps/comments/52fguz/is_there_anyway_to_sort_a_find_by_the_closest/)

## Path Related

### PathFinder

> * [doc](https://docs.screeps.com/api/#PathFinder)
