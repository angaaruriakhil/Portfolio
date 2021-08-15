AOS.init();

dateInFooter();

function dateInFooter() {
  let footerInfo = document.getElementById("footer-info");
  footerInfo.innerHTML = `Developed and maintained by Angaar Uriakhil, ${new Date().getFullYear()}. `;
};

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
  let hamburgerMenu = document.getElementById("fixed_elements__hamburger-menu");
  let navBar = document.getElementById("nav__list-master");
  if (navBar.style.display == "none") {
    navBar.style.display = "flex";
  } else {
    navBar.style.display = "none";
  } 
  }
  function hamburgerMenuAnimation() {
    hamburgerMenu = document.getElementById("fixed_elements__hamburger-menu");
    navBar = document.getElementById("nav__list-master");
    if (hamburgerMenu.style.transform == "rotate(0deg)") {
      hamburgerMenu.style.color = "#64FFDA";
      hamburgerMenu.style.transform = "rotate(-90deg)"

    } else {
      hamburgerMenu.style.transform = "rotate(0deg)"
      hamburgerMenu.style.color = "white";
    } 
    }


document.getElementById("fixed_elements__hamburger-menu").addEventListener("click", toggleHamburgerMenu, false)
document.getElementById("fixed_elements__hamburger-menu").addEventListener("click", hamburgerMenuAnimation, false)







