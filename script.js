// menu icon navbar

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  const header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove menu icon navbar when click navbar link scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// dark & light mode toggler

const darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});

// opening up user's email client in contact form

function sendEmail(event) {
  event.preventDefault();

  const fullName = document.querySelector(".full-name").value;
  const emailAddress = document.querySelector(".email-address").value;
  const mobileNumber = document.querySelector(".mobile-number").value;
  const emailSubject = document.querySelector(".email-subject").value;
  const emailBody = document.querySelector(".email-body").value;

  // the variables customize the mailto link
  const mailtoLink = `mailto:acnewell09@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  window.open(mailtoLink);

  // reset the form & clear its contents after submission
  event.target.reset();
}
