// FV  fade in
window.addEventListener('load', () => {
  const fvElements = document.querySelectorAll('.soft-fade');
  fvElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('active');
    }, i * 1000);
  });
});

// scroll  fade in
const scrollElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2,
     rootMargin: '0px 0px -100px 0px'
 });

scrollElements.forEach(el => observer.observe(el));

// hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");
  const menuNav = document.querySelector(".menu_nav");
  const isTopPage = document.body.classList.contains("top");
  const isPC = window.innerWidth >= 1024;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuNav.classList.toggle("active");
  });

  if (!isTopPage && isPC) {
    // 下層ページPC版は最初から表示
    hamburger.classList.add("show");
  } else if (isTopPage && isPC) {
    // トップページPC版はスクロール後に出現
    window.addEventListener("scroll", () => {
      const delay = 1100;
      if (window.scrollY > delay) {
        hamburger.classList.add("show");
      } else {
        hamburger.classList.remove("show");
      }
    });
  }

  const menuLinks = document.querySelectorAll(".menu_item a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menuNav.classList.remove("active");
    });
  });
});

// preview switch
const pcFrame = document.getElementById('frame_pc');
const spFrame = document.getElementById('frame_mobile');

// 初期状態（PCを表示）
pcFrame.style.display = 'block';

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {

    // active切り替え → ▼の表示が変わる
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // iframe切り替え
    if (tab.dataset.mode === 'pc') {
      pcFrame.style.display = 'block';
      spFrame.style.display = 'none';
    } else {
      pcFrame.style.display = 'none';
      spFrame.style.display = 'block';
    }
  });
});
