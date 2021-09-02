"use strict";

/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/
var pointer = document.createElement("div");
pointer.id = "pointer-dot";
var ring = document.createElement("div");
ring.id = "pointer-ring";
document.body.insertBefore(pointer, document.body.children[0]);
document.body.insertBefore(ring, document.body.children[0]);
var mouseX = -100;
var mouseY = -100;
var ringX = -100;
var ringY = -100;
var isHover = false;
var mouseDown = false;

var init_pointer = function init_pointer(options) {
  window.onmousemove = function (mouse) {
    mouseX = mouse.clientX;
    mouseY = mouse.clientY;
  };

  window.onmousedown = function (mouse) {
    mouseDown = true;
  };

  window.onmouseup = function (mouse) {
    mouseDown = false;
  };

  var trace = function trace(a, b, n) {
    return (1 - n) * a + n * b;
  };

  window["trace"] = trace;

  var getOption = function getOption(option) {
    var defaultObj = {
      pointerColor: "#750c7e",
      ringSize: 15,
      ringClickSize: (options["ringSize"] || 15) - 5
    };

    if (options[option] == undefined) {
      return defaultObj[option];
    } else {
      return options[option];
    }
  };

  var render = function render() {
    ringX = trace(ringX, mouseX, 0.2);
    ringY = trace(ringY, mouseY, 0.2);

    if (document.querySelector(".p-action-click:hover")) {
      pointer.style.borderColor = getOption("pointerColor");
      isHover = true;
    } else {
      pointer.style.borderColor = "white";
      isHover = false;
    }

    ring.style.borderColor = getOption("pointerColor");

    if (mouseDown) {
      ring.style.padding = getOption("ringClickSize") + "px";
    } else {
      ring.style.padding = getOption("ringSize") + "px";
    }

    pointer.style.transform = "translate(".concat(mouseX, "px, ").concat(mouseY, "px)");
    ring.style.transform = "translate(".concat(ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize")), "px, ").concat(ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize")), "px)");
    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};