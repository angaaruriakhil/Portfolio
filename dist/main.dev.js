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
/* This function uses intersection observer to produce the scroll bar. Read more here. https://usefulangle.com/post/118/javascript-intersection-observer */


var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      modify(entry.target);
    } else {
      revert(entry.target);
    }
  });
}, {
  threshold: 0.5
});

function modify(el) {
  document.querySelector("#".concat(el.id, "-link")).style.textDecoration = 'underline';
  document.querySelector("#".concat(el.id, "-link")).style.textDecorationColor = '#64FFDA';
  document.querySelector("#".concat(el.id, "-link")).style.textUnderlineOffset = "10px";
}

function revert(el) {
  document.querySelector("#".concat(el.id, "-link")).style.textDecoration = 'none';
  document.querySelector("#".concat(el.id, "-link")).style.textDecorationColor = 'none';
}

observer.observe(document.querySelector('#landing'));
observer.observe(document.querySelector('#about'));
observer.observe(document.querySelector('#projects'));
observer.observe(document.querySelector('#contact'));