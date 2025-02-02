/* ................ Show Menu ................ */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/* ........................................... */


/* ................ Show Menu ................ */
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/* ............................................... */


/* ................ Shadow Header ................ */
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);
/* .......................................... */


/* ................ Email JS ................ */
const form = document.getElementById('contact-form');
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contant-message');
const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_2wflc7o', 'template_ga4wepl', form, 'ZMs03pDmb_azX7Bl5').then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully :)'
            // Remove message after five second
        setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            // Clear input field
        contactForm.reset()

    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent :('

    })
}
contactForm.addEventListener('submit', sendEmail);
/* ............................................................ */


/* ................ Scroll Section Active Link ................ */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);
/* ................................................ */


/* ................ Show Scroll Up ................ */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
/* ................................................ */


/* ................ Dark Light Theme ................ */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})