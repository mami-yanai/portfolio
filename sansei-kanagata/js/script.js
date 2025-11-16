// boxshadow
const header = document.querySelector('#header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// hamburger
const menu = document.querySelector('#gnav')
const btn = document.querySelector('#hamburger')
const menuLinks = document.querySelectorAll('#gnav a');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
  });
});

// slidein
window.addEventListener('load', () => {
  const slideElements = document.querySelectorAll('.slidein-left, .slidein-right');

  slideElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('active');
    }, index * 500); // 0.5秒ごとに順番にスライドイン
  });
});



// fadein
const fadeElements = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 120) {
      el.classList.add('active');
    }
  });
});

// mailform
// EmailJSの初期化
(function() {
  emailjs.init("uXoG4yb7PhgLYm6fE"); // EmailJSダッシュボードのPublic Key
})();

// フォーム送信イベント
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service-sansei", "template-sansei", this)
    .then(() => {
       // ✅ メール送信が成功したらthanksページへ遷移
      window.location.href = "thanks.html";
    }, (error) => {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
      console.error(error);
    });
});
