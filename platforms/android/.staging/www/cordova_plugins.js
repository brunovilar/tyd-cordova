cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.kraho.cordova.plugins.sensors.ambientLight/www/AmbientLightPlugin.js",
        "id": "org.kraho.cordova.plugins.sensors.ambientLight.AmbientLightPlugin",
        "clobbers": [
            "window.AmbientLightPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device-motion": "0.2.6",
    "org.kraho.cordova.plugins.sensors.ambientLight": "0.1"
}
// BOTTOM OF METADATA
});