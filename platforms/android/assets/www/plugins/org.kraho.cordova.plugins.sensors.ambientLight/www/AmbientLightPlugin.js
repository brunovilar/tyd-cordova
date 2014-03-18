cordova.define("org.kraho.cordova.plugins.sensors.ambientLight.AmbientLightPlugin", function(require, exports, module) { 

var AmbientLightPlugin = {

     getValue : function(successCallback, errorCallback){
        AmbientLightPlugin.start();
        cordova.exec(
            successCallback,
            errorCallback, 
            'AmbientLightPlugin', 
            'SENSOR_VALUE',
            []
        );
       // AmbientLightPlugin.stop();
    },  
    
    start : function(){
        cordova.exec(
            null,
            null, 
            'AmbientLightPlugin', 
            'START',
            []
        );
    },

    stop : function(){
        cordova.exec(
            null,
            null, 
            'AmbientLightPlugin', 
            'STOP',
            []
        );        

    }
};

module.exports = AmbientLightPlugin;

});
