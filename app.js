// Variables
const down = document.querySelector('.down-svg'),
  up = document.querySelector('.up-svg'),
  contactMe = document.querySelector('.contact-me'),
  home = document.querySelector('#home'),
  about = document.querySelector('#about'),
  skills = document.querySelector('#skills'),
  projects = document.querySelector('#projects'),
  contact = document.querySelector('#contact'),

  navHome = document.querySelector('#nav-home'),
  navAbout = document.querySelector('#nav-about'),
  navSkills = document.querySelector('#nav-skills'),
  navProjects = document.querySelector('#nav-projects'),
  navContact = document.querySelector('#nav-contact'),
  myLogo = document.querySelector('.navbar-brand'),
  nav = document.querySelector('.navbar'),
  navHeight = nav.getBoundingClientRect().height,
  links = document.querySelectorAll('.nav-link'),
  year = document.querySelector('.year'),
  dataAos = document.querySelectorAll('[data-aos]'),
  navbarToggler = document.querySelector('.navbar-toggler'),
  navbarCollapse = document.querySelector('.navbar-collapse'),
  lookAtProjects = document.querySelector('.look'),
  headerImg = document.querySelector('.h-image'),
  desktop = document.querySelector('.desktop'),
  seeAnyway = document.querySelector('.see-anyway'),
  root = document.getElementsByTagName('html')[0];

// Due to AOS-bugs, write some changes for Mobile
const responsiveAnimation = function () {
  dataAos.forEach((i) => {

    i.setAttribute('data-aos-offset', '100');

    if (window.innerWidth < 1200) {
      i.setAttribute('data-aos-offset', '40');

      if (window.innerWidth > window.innerHeight) {
        headerImg.style.display = 'none';
      }

      if (window.innerWidth < window.innerHeight) {
        if (window.innerWidth < 992) {
          i.setAttribute('data-aos', 'zoom-in');

          if (window.innerWidth < 576) {
            i.removeAttribute('data-aos-delay');
          }
        }

        // Show Preloader
        setTimeout(() => {
          root.classList.add('remove-scrolling');
          document.body.classList.add('remove-scrolling');
          desktop.style.display = 'block';
        }, 0);

        // Hide Preloader
        setTimeout(() => {
          root.classList.remove('remove-scrolling');
          document.body.classList.remove('remove-scrolling');
          desktop.style.display = 'none';
        }, 1000);
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', function () {
  responsiveAnimation();
});

// Show the current year in footer
let today = new Date();
let thisYear = today.getFullYear();
year.innerHTML = thisYear;

// Catch and Show Section 
const showSection = (sectionName) => {
  window.scrollTo({
    top: sectionName.offsetTop - navHeight
  });
}

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let id = e.target.getAttribute('href');
    id = id.slice(1, id.length);
    let section = document.getElementById(id);
    showSection(section);

    // Close Hamburger Menu
    let trueFalse = navbarToggler.getAttribute('aria-expanded');
    if (trueFalse === "true") {
      if (e.target.getAttribute('class').includes('nav-link')) {
        navbarToggler.click();
      }
    }
  })
})

// Click Contact Button to Show Contact Section
contactMe.addEventListener('click', (e) => {
  showSection(contact);
});

// Click Down Button to Show About Section
down.addEventListener('click', () => {
  showSection(about);
});

// Click Up Button to Show Home Section
up.addEventListener('click', () => {
  showSection(home);
});

// Click MyLogo to Reload the Page
myLogo.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Let's take a look at Projects
lookAtProjects.addEventListener('click', () => {
  window.scrollTo({
    top: projects.offsetTop - navHeight
  });
})

// Smart ScrollDetection
const scrollDetect = function () {
  if (document.body.scrollTop <= about.offsetTop - (navHeight + 50) || document.documentElement.scrollTop <= about.offsetTop - (navHeight + 50)) {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    navHome.classList.add('active');
  }
  if (document.body.scrollTop > about.offsetTop - (navHeight + 50) || document.documentElement.scrollTop > about.offsetTop - (navHeight + 50)) {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    navAbout.classList.add('active');
  }
  if (document.body.scrollTop > skills.offsetTop - (navHeight + 50) || document.documentElement.scrollTop > skills.offsetTop - (navHeight + 50)) {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    navSkills.classList.add('active');
  }
  if (document.body.scrollTop > projects.offsetTop - (navHeight + 50) || document.documentElement.scrollTop > projects.offsetTop - (navHeight + 50)) {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    navProjects.classList.add('active');
  }
  if (document.body.scrollTop > contact.offsetTop - (navHeight + 100) || document.documentElement.scrollTop > contact.offsetTop - (navHeight + 100)) {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    navContact.classList.add('active');
  }
}

// Scrolling changes nav-link's appears
window.onscroll = function () {
  scrollDetect();
};

if (window.location.reload) {
  scrollDetect();
}