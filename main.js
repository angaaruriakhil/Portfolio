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
  document.getElementById("contact__card__form__button").className = "contact__card__form__button animate__animated animate__flipInY animate__faster";
}

function logoHoverFeedback() {  
  document.getElementById("fixed_elements__logo-img").className = "fixed_elements__logo-img animate__animated animate__pulse animate__faster";
}

document.getElementById("fixed_elements__logo-img").addEventListener("click", spinLogoToTop);

document.getElementById("fixed_elements__logo-img").addEventListener("mouseover", logoHoverFeedback);

document.getElementById("contact__card__form__button").addEventListener("click", flipInButton);

/* This section uses intersection observer to produce the scroll bar. I adapted this solution on stackoverflow for my needs: https://stackoverflow.com/questions/66336096/single-intersection-observer-for-multiple-entries */

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      modify(entry.target);
    } else {
      revert(entry.target);
    }
  })
}, {
  threshold: 0.1
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

observer.observe(document.querySelector('#landing'));
observer.observe(document.querySelector('#about'));
observer.observe(document.querySelector('#projects'));
observer.observe(document.querySelector('#contact'));

// This section deals with particles.js effect on every page. 

function mainContentParticles() {
  particlesJS.load('particles-js-about', 'particles.js-master/particles.json', function() {
 });
  particlesJS.load('particles-js-projects', 'particles.js-master/particles.json', function() {
});
  particlesJS.load('particles-js-contact', 'particles.js-master/particles.json', function() {
});
}

mainContentParticles();  

// Delay landingParticles deployment on the welcome page until other intro animations are performed.

function landingParticles() {
  particlesJS.load('particles-js-landing', 'particles.js-master/particles.json', function() {
  });
}

setTimeout(landingParticles, 8000);

// This section deals with the hamburger menu on the mobile layout. 

function toggleHamburgerMenu() {
  let navBar = document.getElementById("nav__list-master");
  navBar.classList.toggle("display_navbar");
  hamburgerMenu = document.getElementById("fixed_elements__hamburger-menu");
  hamburgerMenu.classList.toggle("is-active");
}

document.getElementById("fixed_elements__hamburger-menu").addEventListener("click", toggleHamburgerMenu)

// Google drive link obfuscation and encryption (just in case)

function locked_glink() {
  const gfrac_object = {
    gfrac_0_array: ["h", "!", "t", "%", "t", "*", "p", "s", ":", "/", "/"], 
    gfrac_1_array: ["$", "/", "$", "%", "d", "^", "r", "*", "i", "v", "e"],
    gfrac_2_array: [".", "!", "g", "%", "o", "o", "9", "g", "l", "6", "e"],
    gfrac_3_array: ["%", ".", "c", "$", "@", "o", "£", "m", "*", "^", "#"],
    gfrac_4_array: ["/", "f", "$", "o", "l", "%", "d", "e", "*", "r", "s"],
    gfrac_5_array: ['/', '1', '6', 'b', '9', 'e', 'z', '6', '7', 'a', '7', 
    'x', 'E', 'h', '^', '4', 'r', 's', 'm', 'v', 'u', 'x', 'N', 'F', 'n', 
    'L', 'p', 'n', 'C', '3', 'v', 'M', 'e', 'i', 'p', '?', 'u', 's', 'p', 
    '=', 's', 'h', 'a', 'r', 'i', 'n', 'g', "%"]
  }
  
  let regex_g0 = /[a-z:/]/; 
  let regex_g1 = /[/a-z]/;
  let regex_g2 = /[.a-z]/;
  let regex_g3 = /[%^]/; 

  
  filtered_g0 = gfrac_object.gfrac_0_array.filter(i => {return regex_g0.test(i)});
  filtered_g1 = gfrac_object.gfrac_1_array.filter(i => {return regex_g1.test(i)});
  filtered_g2 = gfrac_object.gfrac_2_array.filter(i => {return regex_g2.test(i)});
  filtered_g3 = gfrac_object.gfrac_3_array.filter(i => {return regex_g2.test(i)});
  filtered_g4 = gfrac_object.gfrac_4_array.filter(i => {return regex_g1.test(i)});
  filtered_g5 = gfrac_object.gfrac_5_array.filter(i => {return !regex_g3.test(i)});

  const secretKey2 = "secretKey2"; // Key doesn't matter since I'm using this for hiding my details until user clicks. 
  const g_unlocked_array = [filtered_g0.join(""), filtered_g1.join(""), filtered_g2.join(""), filtered_g3.join(""), filtered_g1.join(""), filtered_g4.join(""), filtered_g5.join("")]; 
  const g_bare_message = g_unlocked_array[0] + g_unlocked_array[1] + g_unlocked_array[2] + g_unlocked_array[3] + g_unlocked_array[4] + g_unlocked_array[5] + g_unlocked_array[6]; 
  console.log(g_bare_message);
  const g_encryptedBytes = CryptoJS.AES.encrypt(g_bare_message, secretKey2);
  return g_encryptedBytes.toString();
}

function g_unlockedLink() {
  const secretKey2 = "secretKey2"; 
  const g_decryptedBytes = CryptoJS.AES.decrypt(locked_glink(), secretKey2);
  var g_decryptedMessage = g_decryptedBytes.toString(CryptoJS.enc.Utf8);
  return g_decryptedMessage;
}

function g_displaceLink() {
  let cvButton = document.getElementById('cv');
  cvButton.href = g_unlockedLink();
}

// TypeIt animations for landing page 

const instance = new TypeIt(".landing__message__line-1__span-1", {
  strings: 'node welcome.js',
  speed: 40,
  afterString: function(step, instance) {
    instance.destroy();
  },
}).go(); 

const instance2 = new TypeIt(".landing__message__bulk", {
  strings: [
    '<p style="color:#29b6f6; display: inline-block">{ Name: "Angaar Uriakhil",</p>',
    '<p style="color:#9CCC65; display: inline-block">&nbsp;&nbsp;Occupation: "Full Stack Developer",</p>',
    '<p style="color:#EF5350; display: inline-block">&nbsp;&nbsp;Datatype: "Portfolio"</p>','}',
    'angaar@desktop:~$ (Play with the terminal!)'],
  speed: 40,
  startDelay: 2000,
  html: true,
}).go(); 

// Terminal draggable functionality with interact.js

const position = { x: 0, y: 0 }

interact('.landing__terminal').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

let landingTerminal = document.querySelector(".landing__terminal");
let minimisedTerminal = document.querySelector(".landing__minimised-terminal"); 

const hideTerminal = () => {
  landingTerminal.classList.toggle("hide_element"); 
}

const maximiseTerminal = () => {
  landingTerminal.classList.toggle("maximise_terminal");
  let landingMessage = document.querySelector(".landing__message"); 
  landingMessage.classList.toggle("stretch_landing");
}

const minimiseTerminal = () => {
  landingTerminal.classList.add('animate__animated', 'animate__backOutDown');
  // Use setTimeout to allow backout animation to happen then do display: none and succeeding actions.  
  setTimeout(() => {
    landingTerminal.classList.toggle("hide_element");minimisedTerminal.classList.toggle("show_element"); landingTerminal.classList.remove('animate__backOutDown');}, 900);
}

const bringBackTerminal = () => {
  landingTerminal.classList.toggle("hide_element"); 
  minimisedTerminal.classList.toggle("show_element");
  landingTerminal.classList.add('animate__backInUp'); 
}

let closeButton = document.querySelector("#bar__button--exit"); 
closeButton.addEventListener("click", hideTerminal); 
let maximiseButton = document.querySelector("#bar__button--maximise");
let minimiseButton = document.querySelector("#bar__button--minimise");

maximiseButton.addEventListener("click", maximiseTerminal); 
minimisedTerminal.addEventListener("click", bringBackTerminal); 
minimiseButton.addEventListener("click", minimiseTerminal); 