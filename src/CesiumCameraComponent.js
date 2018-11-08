define([
    "EventType",
    "EventDispatcher",
    "CesiumAssistant"
], function (
    EventType,
    EventDispatcher,
    CesiumAssistant
) {
        /** @param {Bounding} bounding - the bounding */
        function onFlyToBounding(bounding) {
            CesiumAssistant.Camera.flyToBounding(3, bounding);
        }
        return {
            id: "GisCameraComponent",
            onComponentWire: function () { // jscs:ignore
                EventDispatcher.subscribeEvent(EventType.FLY_TO_BOUNDING, onFlyToBounding);
            },
            onComponentStart: function () { // jscs:ignore

            },
            onComponentsReady: function () { // jscs:ignore

            }
        };
    });