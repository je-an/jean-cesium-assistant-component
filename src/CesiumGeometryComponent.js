define([
    "EventType",
    "EventDispatcher",
    "CesiumAssistant"
], function (
    EventType,
    EventDispatcher,
    CesiumAssistant
) {
    /** 
     * @param {Object} options - options object
     * @param {Waypoint[]} options.waypoints - the waypoints 
     * @param {String} options.id - the id
     */
    function onDrawPolyline(options) {
        CesiumAssistant.Geometry.drawPolylineGeometry(options.waypoints, options.id);
    }
    return {
        id: "CesiumGeometryComponent",
        onComponentWire: function () { // jscs:ignore
            EventDispatcher.subscribeEvent(EventType.DRAW_POLYLINE, onDrawPolyline);
        },
        onComponentStart: function () { // jscs:ignore

        },
        onComponentsReady: function () { // jscs:ignore

        }
    };
});