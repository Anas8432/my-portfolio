/* menu icon navbar */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {

    menuIcon.classList.toggle('bx-x');
    
    navbar.classList.toggle('active');
  });
}




const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.id;

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`header nav a[href*=${id}]`)?.classList.add('active');
    }
  });

  header.classList.toggle('sticky', top > 0);

  menuIcon?.classList.remove('bx-x');
  navbar?.classList.remove('active');
});






/* swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* scroll reveal */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .projects-box, .contact form, .interships-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });



// Send the contact message through the visitor's own email app.
// No third-party SMTP token or external email service is used.
function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const body = [
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        '',
        message
    ].join('\n');

    const mailto = 'mailto:mkanaskhan9921@gmail.com'
        + '?subject=' + encodeURIComponent(subject || 'Portfolio Contact')
        + '&body=' + encodeURIComponent(body);

    window.location.href = mailto;
    return false;
}
