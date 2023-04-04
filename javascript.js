var firevalue = 0;
var watervalue = 0;
var earthvalue = 0;
var core = 0;

function randomize() {
firevalue = parseInt(Math.random()* 20)+ 1;
 document.getElementById("fire").innerHTML = firevalue;

watervalue = parseInt(Math.random()* 20)+ 1;
document.getElementById("water").innerHTML = watervalue;

earthvalue = parseInt(Math.random()* 20)+ 1;
 document.getElementById("earth").innerHTML = earthvalue;
 
if (firevalue >= watervalue && firevalue >= earthvalue) {
     core = firevalue;
     document.getElementById("strongestcore").innerHTML = "Fire, value: " + core;
     }
      else if (watervalue >= firevalue && watervalue >= earthvalue) {
      core = watervalue;
    document.getElementById("strongestcore").innerHTML = "Water, value: " + core;
     }
      else {
      core = earthvalue;
    document.getElementById("strongestcore").innerHTML = "Earth, value: " + core;
     }

     var demonletter = String.fromCharCode(96 + firevalue);
   document.getElementById("demon").innerHTML = demonletter;  

     var time = watervalue * earthvalue;
      var hr = Math.floor(time / 60);
      var min = time % 60;
    document.getElementById("casttime").innerHTML =
    time + " minutes / " + hr + " hours and " + min + " minutes";
 }