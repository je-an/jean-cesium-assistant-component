define([
    "EventType",
    "EventDispatcher",
    "CesiumAssistant"
], function (
    EventType,
    EventDispatcher,
    CesiumAssistant
    ) {
    var url = "", layer = "";
    /** */
    function onAddTerrain() {
        CesiumAssistant.Terrain.add({
            url: url,
            layer: layer
        });
    }
    /** */
    function onRemoveTerrain() {
        CesiumAssistant.Terrain.remove();
    }
    return {
        id: "CesiumTerrainComponent",
        onComponentWire: function () { // jscs:ignore
            EventDispatcher.subscribeEvent(EventType.ADD_TERRAIN, onAddTerrain);
            EventDispatcher.subscribeEvent(EventType.REMOVE_TERRAIN, onRemoveTerrain);
        },
        onComponentStart: function (options) { // jscs:ignore
            url = options.gis.terrain.url;
            layer = options.gis.terrain.layer;
        },
        onComponentsReady: function () { // jscs:ignore

        }
    };
});