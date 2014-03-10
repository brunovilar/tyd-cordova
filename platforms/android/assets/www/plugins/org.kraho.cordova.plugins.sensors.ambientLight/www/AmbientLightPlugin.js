cordova.define("org.kraho.cordova.plugins.sensors.ambientLight.AmbientLightPlugin", function(require, exports, module) { 

var AmbientLightPlugin = {

    doFirstAction : function(successCallback, errorCallback){
        cordova.exec(
            successCallback,
            errorCallback, 
            'AmbientLightPlugin', 
            'first',
            []
        );
    },

    doSecondAction : function(x, y, successCallback, errorCallback){
        cordova.exec(
            successCallback,
            errorCallback, 
            'AmbientLightPlugin', 
            'second',
            [{ 
                "x": x,
                "y": y                
            }]
        );        

    }
};

module.exports = AmbientLightPlugin;

});
