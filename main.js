AOS.init(); 

function dateInFooter() {
  let footerInfo = document.getElementById("footer-info");
  footerInfo.innerHTML = `Developed and maintained by Angaar Uriakhil, ${new Date().getFullYear()}. `;
};

dateInFooter();

function spinLogoToTop() {
  document.getElementById("fixed_elements__logo-img").className = "fixed_elements__logo-img animate__animated animate__rotateIn";
}

function flipInButton() {
  document.getElementById("contact__card__button").className = "contact__card__button animate__animated animate__flipInY animate__faster";
}

function logoHoverFeedback() {
  document.getElementById("fixed_elements__logo-img").className = "fixed_elements__logo-img animate__animated animate__pulse animate__faster";
}
document.getElementById("fixed_elements__logo-img").addEventListener("click", spinLogoToTop);

document.getElementById("fixed_elements__logo-img").addEventListener("mouseover", logoHoverFeedback);

document.getElementById("contact__card__button").addEventListener("click", flipInButton);


/* This section uses intersection observer to produce the scroll bar. I adapted this solution on stackoverflow for my needs: https://stackoverflow.com/questions/66336096/single-intersection-observer-for-multiple-entries */

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      modify(entry.target);
      pageAnimation(entry.target);
    } else {
      revert(entry.target);
    }
  })
}, {
  threshold: 0.5
})

function modify(el) {
  document.querySelector(`#${el.id}-link`).style.textDecoration = 'underline';
  document.querySelector(`#${el.id}-link`).style.textDecorationColor = '#64FFDA';
  document.querySelector(`#${el.id}-link`).style.textUnderlineOffset = "10px";
}

function revert(el) {
  document.querySelector(`#${el.id}-link`).style.textDecoration = 'none';
  document.querySelector(`#${el.id}-link`).style.textDecorationColor = 'none';
}

function pageAnimation(el) {
  if (el.id == "projects") {
    document.getElementById("projects__card-1__header").className += " animate__animated animate__slideInDown animate__duration-1s";
    document.getElementById("projects__card-1").className += " animate__animated animate__lightSpeedInRight animate__delay-0.5s";
    document.getElementById("projects__card-2").className += " animate__animated animate__lightSpeedInLeft animate__delay-0.5s";
    
  }
  if (el.id == "about") {
    document.getElementById("about__article").className += " animate__animated animate__bounceInRight";
    document.getElementById("about__tech-stack").className += " animate__animated animate__bounceInLeft";
    document.getElementById("hi-icon").className += " animate__animated animate__slower animate__swing animate__delay-1s";
    document.getElementById("fa-handshake").className += " animate__animated animate__headShake animate__slower animate__delay-3s";
    document.getElementById("fa-layer-group-1").className += " animate__animated animate__heartBeat animate__delay-4s";
    document.getElementById("fa-layer-group-2").className += " animate__animated animate__heartBeat animate__delay-4s animate__duration-3s";
    document.getElementById("about__tech-stack__icons").style.animation = "rainbowBorder 2s 4s linear";
  }

  if (el.id == "contact") {
    document.getElementById("contact__card__header").className += " animate__animated animate__slideInDown animate__duration-0.5s";
    document.getElementById("contact__card__message").className += " animate__animated animate__zoomInDown animate__delay-0.5s";
    document.getElementById("button").className += " animate__animated animate__delay-1s animate__flipInX";
    
  }
}

observer.observe(document.querySelector('#landing'));
observer.observe(document.querySelector('#about'));
observer.observe(document.querySelector('#projects'));
observer.observe(document.querySelector('#contact'));

function mainContentParticles() {
  particlesJS.load('particles-js-about', 'particles.js-master/particles.json', function() {
   console.log('callback - particles.js config loaded');
 });
  particlesJS.load('particles-js-projects', 'particles.js-master/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
  particlesJS.load('particles-js-contact', 'particles.js-master/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
}

mainContentParticles();  

function landingParticles() {
  particlesJS.load('particles-js-landing', 'particles.js-master/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

// Delay landingParticles deployment until other intro animations are performed.

setTimeout(landingParticles, 4000);

function toggleHamburgerMenu() {
  let navBar = document.getElementById("nav__list-master");
  navBar.classList.toggle("hide_navbar");
}

function hamburgerMenuAnimation() {
  hamburgerMenu = document.getElementById("fixed_elements__hamburger-menu");
 hamburgerMenu.classList.toggle("rotate_hamburger");
  }


document.getElementById("fixed_elements__hamburger-menu").addEventListener("click", toggleHamburgerMenu)
document.getElementById("fixed_elements__hamburger-menu").addEventListener("click", hamburgerMenuAnimation)

// Email encryption using obfuscation and encryption (Not sure if this will work but worth a shot and its better than just having it openly available)

function locked_link() {
  const efrac_object = {
    efrac_0_array: ["m", "!", "a", "%", "i", "l", "t", "*", "o", "+", ":"], 
    efrac_1_array: ["a", "!", "n", "%", "$", "g", "(", "*", "a", "r", "]"],
    efrac_2_array: ["1", "!", "9", "%", "i", "l", "9", "*", "o", "6", "[]"],
    efrac_3_array: ["g", "!", "m", "a", "@", "%", "£", "i", "*", "^", "#"],
    efrac_4_array: ["g", "!", "m", "a", "%", "%", "£", "i", "*", "l", "#"],
    efrac_5_array: [".", "£", "c", "%", "o", "^", "&", "m", "*", "+", ">"]
  }
  
  let regex_0 = /[a-z:.]/; 
  let regex_1 = /[a-z]/; 
  let regex_2 = /[0-9]/;
  let regex_3 = /[@]/; 
  
  filtered_e0 = efrac_object.efrac_0_array.filter(i => {return regex_0.test(i)});
  filtered_e1 = efrac_object.efrac_1_array.filter(i => {return regex_1.test(i)});
  filtered_e2 = efrac_object.efrac_2_array.filter(i => {return regex_2.test(i)});
  filtered_e3 = efrac_object.efrac_3_array.filter(i => {return regex_3.test(i)});
  filtered_e4 = efrac_object.efrac_4_array.filter(i => {return regex_1.test(i)});
  filtered_e5 = efrac_object.efrac_5_array.filter(i => {return regex_0.test(i)});
  const secretKey = "secretKey"; // Key doesn't matter since I'm using this for hiding my details until user clicks. 
  const unlocked_array = [filtered_e0.join(""), filtered_e1.join(""), filtered_e2.join(""), filtered_e3.join(""), filtered_e4.join(""), filtered_e5.join("")]; 
  const bare_message = unlocked_array[0] + unlocked_array[1] + unlocked_array[2] + unlocked_array[3] + unlocked_array[4] + unlocked_array[5]; 
  const encryptedBytes = CryptoJS.AES.encrypt(bare_message, secretKey);
  return encryptedBytes.toString();
}

function unlockedLink() {
  const secretKey = "secretKey"; 
  const decryptedBytes = CryptoJS.AES.decrypt(locked_link(), secretKey);
  var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedMessage;
}

function displaceLink() {
  let contactButton = document.getElementById('button');
  contactButton.href = unlockedLink();
}
