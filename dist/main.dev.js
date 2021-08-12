"use strict";

AOS.init();
dateInFooter();

function dateInFooter() {
  var footerInfo = document.getElementById("footer-info");
  footerInfo.innerHTML = "Developed and maintained by Angaar Uriakhil, ".concat(new Date().getFullYear(), ".");
}

;

function Placeholder() {
  var welcome = document.getElementById("span1").innerText;
  welcome_array = [];

  for (var i = 0; i < welcome.length; i++) {
    welcome_array.push(welcome[i]);
  }

  ;
  console.log(welcome_array);
  window.onload = IDontKnowYet;
}

function scrollBar() {
  document.getElementById();
}