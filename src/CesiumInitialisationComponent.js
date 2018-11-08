define(["CesiumAssistant"], function (CesiumAssistant) {
    return {
        id: "GisInitialisationComponent",
        onComponentWire: function () { // jscs:ignore

        },
        onComponentStart: function (options) { // jscs:ignore
            CesiumAssistant.init(options.gis.url);
        },
        onComponentsReady: function () { // jscs:ignore

        }
    };
});