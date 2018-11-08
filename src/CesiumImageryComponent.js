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
         * @param {ImageryAssistant.imageryType} options.type - type of the imagery
         * @param {String} options.url - url of the pro
         * @param {String} options.layers - name of the layers
         */
        function onAddImagery(options) {
            CesiumAssistant.Imagery.add(options);
        }
        /** @param {String} name - name of the imagery which shall be removed */
        function onRemoveImagery(name) {
            CesiumAssistant.Imagery.remove(name);
        }
        /** */
        function onRemoveAllImagery() {
            CesiumAssistant.Imagery.removeAll();
        }
        return {
            id: "GisImageryComponent",
            onComponentWire: function () { // jscs:ignore
                EventDispatcher.subscribeEvent(EventType.ADD_IMAGERY, onAddImagery);
                EventDispatcher.subscribeEvent(EventType.REMOVE_IMAGERY, onRemoveImagery);
                EventDispatcher.subscribeEvent(EventType.REMOVE_ALL_IMAGERY, onRemoveAllImagery);
            },
            onComponentStart: function () { // jscs:ignore

            },
            onComponentsReady: function () { // jscs:ignore

            }
        };
    });