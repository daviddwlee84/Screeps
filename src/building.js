function buildRoadFromAToB(ObjA, ObjB) {
    var route = ObjA.pos.findPathTo(ObjB.pos);
    for (var i = 0; i < route.length - 1; i++) { // length-1 so we don't build on the target
        // Assume ObjA and ObjB is in same room
        ObjA.room.createConstructionSite(route[i].x, route[i].y, STRUCTURE_ROAD);
    }
}

function buildRoadFromAToPos(ObjA, x, y) {
    var route = ObjA.pos.findPathTo(x, y);
    for (var i = 0; i < route.length; i++) {
        ObjA.room.createConstructionSite(route[i].x, route[i].y, STRUCTURE_ROAD);
    }
}

module.exports = {
    // Currently, just use it as a script
    // You can execute it in several ticks that there may be other paths,
    // since maybe sometimes a creeps will block on the way anyway
    buildRoadFromSpawnToSources: function (spawn) {
        var sources = Game.spawns[spawn].room.find(FIND_SOURCES);
        for (var j = 0; j < sources.length; j++) {
            buildRoadFromAToB(Game.spawns[spawn], sources[j])
        }
    },
    buildRoadFromSourceToController: function (sourceObjId) {
        var source = Game.getObjectById(sourceObjId)
        buildRoadFromAToB(source, source.room.controller)
    },
    buildRoadFromPosToPosInRoom(x1, y1, x2, y2, roomName) {
        var pos1 = new RoomPosition(x1, y1, roomName)
        var route = pos1.findPathTo(x2, y2);
        for (var i = 0; i < route.length; i++) {
            Game.rooms[roomName].createConstructionSite(route[i].x, route[i].y, STRUCTURE_ROAD);
        }
    }
}