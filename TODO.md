# TODO and Plans

## Overall

### Automatic Overall Strategy

* For each Room Controller Level
  * RCL 1: Harvest & Upgrade
  * RCL 2: Build 5 Extensions (maybe roads). Fix the wall (in case of invader). Upgrade creeps ability (faster, stronger)
  * RCL 2-pre: More builder
  * RCL 2-post: Larger unit, More upgrader
  * RCL 3: Build Tower

### Quick Command Function Set

* Switch multiple creeps to do a job

### In Conclusion

* Need a global table (memory) to manage how many workers and what shoud they do

## Distribution

* Make creeps harvest the energy source equally
  * Maybe assign the harvest target with a central control
  * And maybe manage the harvest target in memory

## Role

* Make specialized repair unit?! => Maintainer
  * [Repair (STRUCTURE_)ROAD | Screeps Forum](https://screeps.com/forum/topic/1550/repair-structure_-road)

### Harvester

* Have a priority to transfer its energy

## Just TODO

* Look for how to get greater resource than just energy
* [ ] Collect [**thombstone**](https://docs.screeps.com/api/#Tombstone)
  * [Finally support picking up stuff from tombstones. · 1464015767 - git.estate](https://git.estate/screeps.space/hivemind/commit/1464015767fca8503c067a3e552101a04fb91eb3)
  * [Creep death: more than just a delete | Screeps Forum](https://screeps.com/forum/topic/2075/creep-death-more-than-just-a-delete)
  * [The first major game update in 2018! : screeps](https://www.reddit.com/r/screeps/comments/82692t/the_first_major_game_update_in_2018/)
* [ ] Collect dropped energy
* [X] Build road
* Maintain rampert and maybe road since its durability will decay by time
* Overall status report
  * [X] Room energy
  * [ ] Tower energy
  * [ ] RCL progress
* Creeps management
  * renewCreep & [recycleCreep](https://docs.screeps.com/api/#StructureSpawn.recycleCreep) of StructureSpawn
* Scout the nearby rooms and report
  * room id + position + game object id?!
* Harvest and collect the resources across rooms
* Setup an attack in a certain room
* Claim a room
* Auto build defence nearby a controller and spawn
* Add & Update comments
