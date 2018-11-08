define([
    "EventType",
    "EventDispatcher",
    "CesiumAssistant"
], function (
    EventType,
    EventDispatcher,
    CesiumAssistant
) {
        var url = "", tileset;
        /** */
        function onAddBuilding() {
            tileset = CesiumAssistant.getViewer().scene.primitives.add(new Cesium.Cesium3DTileset({
                url: url
            }));

            var viewer = CesiumAssistant.getViewer(), scene = viewer.scene;

            scene.globe.depthTestAgainstTerrain = true;


            tileset.readyPromise
                .then(function () {
                    // Define a cartographic position
                   var lon = 8.565031;
                    var lat = 50.048911;
                    var height = 10;
                    var offset = Cesium.Cartesian3.fromDegrees(lon, lat, height);
                    // Set the root tile transform
                    tileset.root.transform = Cesium.Transforms.eastNorthUpToFixedFrame(offset);
                    // Zoom in
                   
                /*     var cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
                    console.log(cartographic.height);
                    var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
                    var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, -40);
                    var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
                    tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation); */

                }).otherwise(function (error) {
                    console.log(eror);
                });

            tileset.tileVisible.addEventListener(function (tile) {
               
            });
        }
        /** */
        function onRemoveBuilding() {
            CesiumAssistant.getViewer().scene.primitives.remove(tileset);
        }
        return {
            id: "Cesium3dTilesComponent",
            onComponentWire: function () { // jscs:ignore
                EventDispatcher.subscribeEvent(EventType.ADD_BUILDING, onAddBuilding);
                EventDispatcher.subscribeEvent(EventType.REMOVE_BUILDING, onRemoveBuilding);
            },
            onComponentStart: function (options) { // jscs:ignore
                url = options.gis.building.url;
            },
            onComponentsReady: function () { // jscs:ignore

            }
        };
    });