window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelector('.scrollBar').addEventListener('click', () => {
  document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
});

const sections = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < triggerPoint) {
      section.classList.add('active');
    }
  });
});