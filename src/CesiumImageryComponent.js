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
         * @param {String} options.layerName - name of the layers
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
        /** @param {String} name - name of the imagery */
        function onShowImagery(name) {
            CesiumAssistant.Imagery.show(name);
        }
        /** @param {String} name - name of the imagery  */
        function onHideImagery(name) {
            CesiumAssistant.Imagery.hide(name);
        }
        return {
            id: "CesiumImageryComponent",
            onComponentWire: function () { // jscs:ignore
                EventDispatcher.subscribeEvent(EventType.ADD_IMAGERY, onAddImagery);
                EventDispatcher.subscribeEvent(EventType.REMOVE_IMAGERY, onRemoveImagery);
                EventDispatcher.subscribeEvent(EventType.REMOVE_ALL_IMAGERY, onRemoveAllImagery);
                EventDispatcher.subscribeEvent(EventType.SHOW_IMAGERY, onShowImagery);
                EventDispatcher.subscribeEvent(EventType.HIDE_IMAGERY, onHideImagery);
            },
            onComponentStart: function () { // jscs:ignore

            },
            onComponentsReady: function () { // jscs:ignore

            }
        };
    });