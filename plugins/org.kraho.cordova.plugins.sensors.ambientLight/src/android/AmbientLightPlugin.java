package org.kraho.cordova.plugins.sensors;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.Intent;
import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;


public class AmbientLightPlugin extends CordovaPlugin implements SensorEventListener {
        
    public static final String START = "START";
    public static final String STOP = "STOP";
    public static final String SENSOR_VALUE = "SENSOR_VALUE";

    private CallbackContext callbackContext;

    private SensorManager sensorManager;
    private Sensor ambientLight;
    private int accuracy = SensorManager.SENSOR_STATUS_UNRELIABLE;
    private float value;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        this.sensorManager = (SensorManager) cordova.getActivity().getSystemService(Context.SENSOR_SERVICE);
        this.ambientLight = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);
        this.value = 0;
    }  

    protected void start() {
         this.sensorManager.registerListener(this, this.ambientLight, SensorManager.SENSOR_DELAY_NORMAL);
    }

    protected void stop() {
         this.sensorManager.unregisterListener(this);
    }
    
    public void onAccuracyChanged(Sensor sensor, int accuracy) {
        if (sensor.getType() != Sensor.TYPE_LIGHT) {
            return;
        }
        
        this.accuracy = accuracy;
    }
    
    public void onSensorChanged(SensorEvent event) {
        if (event.sensor.getType() != Sensor.TYPE_LIGHT) {
            return;
        }

       /* if (this.accuracy >= SensorManager.SENSOR_STATUS_ACCURACY_MEDIUM) {            
            PluginResult result = new PluginResult(PluginResult.Status.OK, event.values[0]);
            result.setKeepCallback(true);
            callbackContext.sendPluginResult(result);            
        }*/
        
        this.value = event.values[0];
        System.out.println("Sensor capturado: " + this.value);
    }       

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
        try {
            if (AmbientLightPlugin.START.equals(action)) {             
              this.start();
            } else if (AmbientLightPlugin.STOP.equals(action)){                
              this.stop();
            } else if (AmbientLightPlugin.SENSOR_VALUE.equals(action)){  
               
            } else { 
              callbackContext.error("Invalid action");
              return false;
            }
            
            callbackContext.success("" + this.value);
            //PluginResult result = new PluginResult(PluginResult.Status.NO_RESULT, "");
            //result.setKeepCallback(true);
           // callbackContext.sendPluginResult(result);            

            return true;           

        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        }
    }
}
