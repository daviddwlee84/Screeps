# Screeps Notes

> Notes of more specific popular topic or what I thought

## Automatic Build

* [Automatically placing construction sites | Screeps Forum](https://screeps.com/forum/topic/2349/automatically-placing-construction-sites/12)
  * Use "template"

Road

* [Road building and findPathTo | Screeps Forum](https://screeps.com/forum/topic/2248/road-building-and-findpathto)
* [Creeps + road creation :: Screeps Help](https://steamcommunity.com/app/464350/discussions/5/351660338715439471/)

Upkeep structures e.g. wall, rampart

* [How do you handle structures that require "upkeep"?](https://www.reddit.com/r/screeps/comments/6kzbqm/how_do_you_handle_structures_that_require_upkeep/)

## Spawn

* [Spawned size max of creeps dependent on room level?](https://www.reddit.com/r/screeps/comments/4xbzo0/spawned_size_max_of_creeps_dependent_on_room_level/)

Management

* [Is there a guide out there for the ideal ratios of your creeps?](https://www.reddit.com/r/screeps/comments/864qy3/is_there_a_guide_out_there_for_the_ideal_ratios/)
* [[DISCUSSION] So how do you guys all determine what sort of creeps to build, and how many/which body parts it should have?](https://www.reddit.com/r/screeps/comments/3kx1ry/discussion_so_how_do_you_guys_all_determine_what/)

## Visualization

* [RoomVisual](https://docs.screeps.com/api/#RoomVisual)

## Memory Management

* [How to get how many creeps can mine a source?](https://www.reddit.com/r/screeps/comments/7xhy71/how_to_get_how_many_creeps_can_mine_a_source/)

## Spanding

* [How do you expand to another room?](https://steamcommunity.com/app/464350/discussions/5/351660338715439455/)

---

## Other Stuff

* [My Replay?!](screeps.com/s/eF8bc3)

### Useful Tips

* To output an object content into the console, use `JSON.stringify`.
* There is a keyword `debugger` in the simulator that stops your script in the browser.

### QA

* [How do I create a new structure in Screeps?](https://stackoverflow.com/questions/27051872/how-do-i-create-a-new-structure-in-screeps)
  * Get room:
    * By room name: `Game.rooms['W25S17']`
    * ~~By spawn: `Game.spawns['Spawn1'].room`~~
    * By any game object: `gameObj.room`
      * e.g. creeps, spawns, ...
* [Basic repair script? :: Screeps Help](https://steamcommunity.com/app/464350/discussions/5/3223871682612654420/)
* [Harvesting from multiple sources within a room | Screeps Forum](https://screeps.com/forum/topic/2364/harvesting-from-multiple-sources-within-a-room)
* [How can harvest energy from any container ? :: Screeps Help](https://steamcommunity.com/app/464350/discussions/5/133255810028097872/)
* [Range of towers attack?](https://steamcommunity.com/app/464350/discussions/0/3182216552778656960/)
  * The towers can attack everything in the room when the towers are. Their efficiency decrease with range to a target.

### Discussion

* [Ramparts should be made more economical | Screeps Forum](https://screeps.com/forum/topic/1830/ramparts-should-be-made-more-economical)

SoundTrack

* [Server suggestion: Custom Soundtrack :: Screeps Feature Requests](https://steamcommunity.com/app/464350/discussions/6/351660338715429101/)
* [Sound | Screeps Forum](https://screeps.com/forum/topic/2500/sound)
* [Is there any way to get audio? : screeps](https://www.reddit.com/r/screeps/comments/5of5x8/is_there_any_way_to_get_audio/)
  * Well all html work in `console.log` so you can log your own sound effects.

    ```js
    console.log('<audio controls autoplay hidden><source src="http://soundbible.com/mp3/Yahoo-SoundBible.com-1888534056.mp3" type="audio/mpeg"></audio>');
    ```

### Trouble Shooting

* `ReplyError: OOM command not allowed when used memory > 'maxmemory'`
  * Maybe just refresh page and login again

JavaScript

* [oop - Access parent's parent from javascript object - Stack Overflow](https://stackoverflow.com/questions/183702/access-parents-parent-from-javascript-object)
