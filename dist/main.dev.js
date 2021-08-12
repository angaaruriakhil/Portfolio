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
// function scrollBarLanding () {
//   document.getElementById("landing-link").style.textDecoration = "none";
//   document.getElementById("about-link").style.textDecoration = "none";
//   document.getElementById("projects-link").style.textDecoration = "none";
//   document.getElementById("contact-link").style.textDecoration = "none";
//   var observer = new IntersectionObserver(function(entries) {
//     if(entries[0].isIntersecting === true)
//     document.getElementById("landing-link").style.textDecoration = "underline";
//     document.getElementById("landing-link").style.textDecorationColor = "#64FFDA";
//     document.getElementById("landing-link").style.textUnderlineOffset = "10px"; 
//   }, { threshold: [0] });
//   observer.observe(document.querySelector("#landing"));
//   observer.unobserve(document.querySelector("#about"));
//   observer.unobserve(document.querySelector("#projects"));
//   observer.unobserve(document.querySelector("#contact"));
// }
// function scrollBarAbout () {
//   document.getElementById("landing-link").style.textDecoration = "none";
//   document.getElementById("about-link").style.textDecoration = "none";
//   document.getElementById("projects-link").style.textDecoration = "none";
//   document.getElementById("contact-link").style.textDecoration = "none";
//   var observer = new IntersectionObserver(function(entries) {
//     if(entries[0].isIntersecting === true)
//     document.getElementById("about-link").style.textDecoration = "underline";
//     document.getElementById("about-link").style.textDecorationColor = "#64FFDA";
//     document.getElementById("about-link").style.textUnderlineOffset = "10px"; 
//   }, { threshold: [0] });
//   observer.unobserve(document.querySelector("#landing"));
//   observer.observe(document.querySelector("#about"));
//   observer.unobserve(document.querySelector("#projects"));
//   observer.unobserve(document.querySelector("#contact"));
// }
// function scrollBarProjects () {
//   document.getElementById("landing-link").style.textDecoration = "none";
//   document.getElementById("about-link").style.textDecoration = "none";
//   document.getElementById("projects-link").style.textDecoration = "none";
//   document.getElementById("contact-link").style.textDecoration = "none";
//   var observer = new IntersectionObserver(function(entries) {
//     if(entries[0].isIntersecting === true)
//     document.getElementById("projects-link").style.textDecoration = "underline";
//     document.getElementById("projects-link").style.textDecorationColor = "#64FFDA";
//     document.getElementById("projects-link").style.textUnderlineOffset = "10px"; 
//   }, { threshold: [0] });
//   observer.unobserve(document.querySelector("#landing"));
//   observer.unobserve(document.querySelector("#about"));
//   observer.observe(document.querySelector("#projects"));
//   observer.unobserve(document.querySelector("#contact"));
// }
// function scrollBarContact () {
//   document.getElementById("landing-link").style.textDecoration = "none";
//   document.getElementById("about-link").style.textDecoration = "none";
//   document.getElementById("projects-link").style.textDecoration = "none";
//   document.getElementById("contact-link").style.textDecoration = "none";
//   var observer = new IntersectionObserver(function(entries) {
//     if(entries[0].isIntersecting === true)
//     document.getElementById("contact-link").style.textDecoration = "underline";
//     document.getElementById("contact-link").style.textDecorationColor = "#64FFDA";
//     document.getElementById("contact-link").style.textUnderlineOffset = "10px"; 
//   }, { threshold: [0] });
//   observer.unobserve(document.querySelector("#landing"));
//   observer.unobserve(document.querySelector("#about"));
//   observer.unobserve(document.querySelector("#projects"));
//   observer.observe(document.querySelector("#contact"));
// }
// scrollBarLanding();
// scrollBarAbout();
// scrollBarProjects(); 
// scrollBarContact();