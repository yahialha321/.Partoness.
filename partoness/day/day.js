var myInput =  document.getElementById("input"),

myResult =  document.getElementById("result"),

myButton = document.getElementById("button");
myButton.onclick = function () {

"use strict";

myResult.innerHTML = myInput.value * 365;



}