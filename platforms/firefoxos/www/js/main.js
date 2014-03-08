"use strict";

var Screen = {

  Color : {

    applyColor: function () {
      $('#pgColors').css("background-color", $('#inBackgroundColor').val());       
    }, 
    
    resetColor: function () {
      $('#pgColors').css("background-color", "#FFFFFF");   
    }
  },
    
  Touch : { // Based on: http://openlayers.org/dev/examples/multitouch.html
    dvBox : null,
    spTouches : null,
    spMaxNumberOfTouches : null,
    init : function () {     
      dvBox = $("#dvBox")[0];
      spTouches = $("#spTouches");
      spTouches.html("0");
      spMaxNumberOfTouches = $("#spMaxNumberOfTouches");
      spMaxNumberOfTouches.html("0");
      dvBox.addEventListener("touchstart", Screen.Touch.countTouch);
      dvBox.addEventListener("touchmove", Screen.Touch.countTouch);
      if (!(typeof dvBox.ontouchstart != 'undefined')) { 
          dvBox.style.backgroundColor = "#A2C3D9";
      }
    },
    countTouch : function (evt) {
      spTouches.html(evt.touches.length);
      evt.preventDefault();
      if(parseInt(spTouches.html()) > parseInt(spMaxNumberOfTouches.html()))
        spMaxNumberOfTouches.html(spTouches.html());    
    }
  }
};

var System = {
  UserAgent : {   
    init : function () {     
      $("#spUserAgent").html(navigator.userAgent);
    }
  }
};


var Sensors = {

  Accelerometer : { // Based on: http://openlayers.org/dev/examples/game-accel-ball.html
    init : function () {
      var pAxis = $("#pAxis").hide();
      var uAxis = $("#ulAxis").hide();
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function (evt) {        
          if (typeof(evt.accelerationIncludingGravity) != 'undefined') {
            $("#spXAxis").html(evt.accelerationIncludingGravity.x);
            $("#spYAxis").html(evt.accelerationIncludingGravity.y);
            $("#spZAxis").html(evt.accelerationIncludingGravity.z);
            pAxis.show();
            ulAxis.show();
          } else {
            $("#pMessage").html("Não foi possível obter os valores do acelerômetro.");  
          }           
        }, true);     
      } else {
        $("#pMessage").html("Seu navegador não permite o recebimento dos valores do acelerômetro.");
      }
    }
  },
  
  AmbientLight : { // Based on: https://developer.mozilla.org/en-US/docs/WebAPI/Using_Light_Events
    init : function () {     
      var spCurrentLevel = $("#spCurrentLevel");
      window.addEventListener('devicelight', function(event) {
        spCurrentLevel.html(event.value);
      });      
    }
  },
  
  Proximity : { // Based on: https://developer.mozilla.org/en-US/docs/Web/API/DeviceProximityEvent 
    init : function () {     
      var spCurrentLevel = $("#spCurrentLevel");
      var spReferenceLevels = $("#spReferenceLevels");
      window.addEventListener('deviceproximity', function(event) {
        spCurrentLevel.html(event.value); 
        spReferenceLevels.html(event.value + "Mínimo: " + event.min + " | Máximo: " + event.max);
      });
    }
  }
};