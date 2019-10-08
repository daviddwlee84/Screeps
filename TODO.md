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

* Make specialized repair unit?!

### Harvester

* Have a priority to transfer its energy

## Just TODO

* Look for how to get greater resource than just energy
* Build road
* Maintain rampert and maybe road since its durability will decay by time
* Overall status report
  * [X] Room energy
  * [ ] Tower energy
  * [ ] RCL progress
* Creeps management
  * renewCreep & [recycleCreep](https://docs.screeps.com/api/#StructureSpawn.recycleCreep) of StructureSpawn
