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
  lookAtProjects = document.querySelector('.look'),
  headerImg = document.querySelector('.h-image');

const responsiveAnimation = function () {
  dataAos.forEach((i) => {
    i.removeAttribute('data-aos');
    i.setAttribute('data-aos', 'zoom-in');
  });
}

window.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 992) {
    responsiveAnimation();
  }
  if (window.innerWidth < 1200) {
    if (window.innerWidth > window.innerHeight) {
      headerImg.style.display = 'none';
    }
  }
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
  if (document.body.scrollTop > contact.offsetTop - (navHeight + 50) || document.documentElement.scrollTop > contact.offsetTop - (navHeight + 50)) {
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