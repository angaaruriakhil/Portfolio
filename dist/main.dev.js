"use strict";

AOS.init();
dateInFooter();

function dateInFooter() {
  var footerInfo = document.getElementById("footer-info");
  footerInfo.innerHTML = "Developed and maintained by Angaar Uriakhil, ".concat(new Date().getFullYear(), ".");
}

;

function spinLogoToTop() {
  document.getElementById("fixed_elements__logo-img").className = "fixed_elements__logo-img animate__animated animate__rotateIn";
}

document.getElementById("fixed_elements__logo-img").addEventListener("click", spinLogoToTop);
/* This section uses intersection observer to produce the scroll bar. I adapted this solution on stackoverflow for my needs: https://stackoverflow.com/questions/66336096/single-intersection-observer-for-multiple-entries */

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      modify(entry.target);
      pageAnimation(entry.target);
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

function pageAnimation(el) {
  if (el.id == "projects") {
    document.getElementById("projects__card-1").className += " animate__animated animate__lightSpeedInRight";
    document.getElementById("projects__card-2").className += " animate__animated animate__lightSpeedInLeft";
  }

  if (el.id == "about") {
    document.getElementById("about__article").className += " animate__animated animate__bounceInRight";
    document.getElementById("about__tech-stack").className += " animate__animated animate__bounceInLeft";
    document.getElementById("hi-icon").className += " animate__animated animate__slower animate__swing animate__delay-1s";
    document.getElementById("fa-handshake").className += " animate__animated animate__headShake animate__slower animate__delay-3s";
    document.getElementById("fa-layer-group-1").className += " animate__animated animate__heartBeat animate__delay-4s";
    document.getElementById("fa-layer-group-2").className += " animate__animated animate__heartBeat animate__delay-4s";
  }

  if (el.id == "contact") {
    document.getElementById("contact__card__message").className += " animate__animated animate__zoomInDown";
    document.getElementById("button").className += " animate__animated animate__delay-2s animate__flipInX";
  }
}

observer.observe(document.querySelector('#landing'));
observer.observe(document.querySelector('#about'));
observer.observe(document.querySelector('#projects'));
observer.observe(document.querySelector('#contact'));