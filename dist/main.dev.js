"use strict";

AOS.init();

function dateInFooter() {
  var footerInfo = document.getElementById("footer-info");
  footerInfo.innerHTML = "Developed and maintained by Angaar Uriakhil, ".concat(new Date().getFullYear(), ". ");
}

;
dateInFooter();

function spinLogoToTop() {
  document.getElementById("fixed_elements__logo-img").className = "fixed_elements__logo-img animate__animated animate__rotateIn";
}

function flipInButton() {
  document.getElementById("contact__card__form__button").className = "contact__card__form__button animate__animated animate__flipInY animate__faster";
}

function logoHoverFeedback() {
  document.getElementById("fixed_elements__logo-img").className = "fixed_elements__logo-img animate__animated animate__pulse animate__faster";
}

document.getElementById("fixed_elements__logo-img").addEventListener("click", spinLogoToTop);
document.getElementById("fixed_elements__logo-img").addEventListener("mouseover", logoHoverFeedback);
document.getElementById("contact__card__form__button").addEventListener("click", flipInButton);
/* This section uses intersection observer to produce the scroll bar. I adapted this solution on stackoverflow for my needs: https://stackoverflow.com/questions/66336096/single-intersection-observer-for-multiple-entries */

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      modify(entry.target);
    } else {
      revert(entry.target);
    }
  });
}, {
  threshold: 0.1
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
observer.observe(document.querySelector('#contact')); // This section deals with particles.js effect on every page. 

function mainContentParticles() {
  particlesJS.load('particles-js-about', 'particles.js-master/particles.json', function () {});
  particlesJS.load('particles-js-projects', 'particles.js-master/particles.json', function () {});
  particlesJS.load('particles-js-contact', 'particles.js-master/particles.json', function () {});
}

mainContentParticles(); // Delay landingParticles deployment on the welcome page until other intro animations are performed.

function landingParticles() {
  particlesJS.load('particles-js-landing', 'particles.js-master/particles.json', function () {});
}

setTimeout(landingParticles, 4000); // This section deals with the hamburger menu on the mobile layout. 

function toggleHamburgerMenu() {
  var navBar = document.getElementById("nav__list-master");
  navBar.classList.toggle("display_navbar");
  hamburgerMenu = document.getElementById("fixed_elements__hamburger-menu");
  hamburgerMenu.classList.toggle("rotate_hamburger");
}

document.getElementById("fixed_elements__hamburger-menu").addEventListener("click", toggleHamburgerMenu); // Google drive link obfuscation and encryption (just in case)

function locked_glink() {
  var gfrac_object = {
    gfrac_0_array: ["h", "!", "t", "%", "t", "*", "p", "s", ":", "/", "/"],
    gfrac_1_array: ["$", "/", "$", "%", "d", "^", "r", "*", "i", "v", "e"],
    gfrac_2_array: [".", "!", "g", "%", "o", "o", "9", "g", "l", "6", "e"],
    gfrac_3_array: ["%", ".", "c", "$", "@", "o", "£", "m", "*", "^", "#"],
    gfrac_4_array: ["/", "f", "$", "o", "l", "%", "d", "e", "*", "r", "s"],
    gfrac_5_array: ['/', '1', '6', 'b', '9', 'e', 'z', '6', '7', 'a', '7', 'x', 'E', 'h', '^', '4', 'r', 's', 'm', 'v', 'u', 'x', 'N', 'F', 'n', 'L', 'p', 'n', 'C', '3', 'v', 'M', 'e', 'i', 'p', '?', 'u', 's', 'p', '=', 's', 'h', 'a', 'r', 'i', 'n', 'g', "%"]
  };
  var regex_g0 = /[a-z:/]/;
  var regex_g1 = /[/a-z]/;
  var regex_g2 = /[.a-z]/;
  var regex_g3 = /[%^]/;
  filtered_g0 = gfrac_object.gfrac_0_array.filter(function (i) {
    return regex_g0.test(i);
  });
  filtered_g1 = gfrac_object.gfrac_1_array.filter(function (i) {
    return regex_g1.test(i);
  });
  filtered_g2 = gfrac_object.gfrac_2_array.filter(function (i) {
    return regex_g2.test(i);
  });
  filtered_g3 = gfrac_object.gfrac_3_array.filter(function (i) {
    return regex_g2.test(i);
  });
  filtered_g4 = gfrac_object.gfrac_4_array.filter(function (i) {
    return regex_g1.test(i);
  });
  filtered_g5 = gfrac_object.gfrac_5_array.filter(function (i) {
    return !regex_g3.test(i);
  });
  var secretKey2 = "secretKey2"; // Key doesn't matter since I'm using this for hiding my details until user clicks. 

  var g_unlocked_array = [filtered_g0.join(""), filtered_g1.join(""), filtered_g2.join(""), filtered_g3.join(""), filtered_g1.join(""), filtered_g4.join(""), filtered_g5.join("")];
  var g_bare_message = g_unlocked_array[0] + g_unlocked_array[1] + g_unlocked_array[2] + g_unlocked_array[3] + g_unlocked_array[4] + g_unlocked_array[5] + g_unlocked_array[6];
  console.log(g_bare_message);
  var g_encryptedBytes = CryptoJS.AES.encrypt(g_bare_message, secretKey2);
  return g_encryptedBytes.toString();
}

function g_unlockedLink() {
  var secretKey2 = "secretKey2";
  var g_decryptedBytes = CryptoJS.AES.decrypt(locked_glink(), secretKey2);
  var g_decryptedMessage = g_decryptedBytes.toString(CryptoJS.enc.Utf8);
  return g_decryptedMessage;
}

function g_displaceLink() {
  var cvButton = document.getElementById('cv');
  cvButton.href = g_unlockedLink();
}