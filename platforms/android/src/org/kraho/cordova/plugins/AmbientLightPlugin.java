package org.kraho.cordova.plugins.sensors;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.Intent;

public class AmbientLightPlugin extends CordovaPlugin {
        
    public static final String FIRST_ACTION = "first";
    public static final String SECOND_ACTION = "second";

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            if (AmbientLightPlugin.FIRST_ACTION.equals(action)) {             
                callbackContext.success("First action executed by Ambient Light Android Plugin");
                return true;
            } else if (AmbientLightPlugin.SECOND_ACTION.equals(action)){
                JSONObject arg_object = args.getJSONObject(0);
                int x = arg_object.getInt("x");
                int y = arg_object.getInt("y");
                callbackContext.success("Second action executed by Ambient Light Android Plugin. Result: " + (x+y));
                return true;
            }

            callbackContext.error("Invalid action");
            return false;
        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.error(e.getMessage());
            return false;
        }
    }
}
