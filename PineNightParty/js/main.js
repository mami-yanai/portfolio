// hamburger menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu_inner');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu_inner a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

// scroll_jump
(() => {
  const images = document.querySelectorAll('.scroll_jump');
  const DURATION = 600; // CSSアニメーションと合わせる(ms)
  let ticking = false;

  const triggerJump = () => {
    images.forEach((img, index) => {
      const rect = img.getBoundingClientRect();
      // 画面内にある画像だけ処理
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // アニメ中でなければ実行
        if (!img.classList.contains('scroll_jump--jump')) {
          setTimeout(() => {
            img.classList.add('scroll_jump--jump');
            setTimeout(() => {
              img.classList.remove('scroll_jump--jump');
            }, DURATION);
          }, index * 100); // indexごとに少し遅らせて順番に跳ねる
        }
      }
    });
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        triggerJump();
        ticking = false;
      });
    }
  });

  // 初回ロード時に画面内の画像も一度アニメ
  triggerJump();
})();



// splide
const options = {
  type: "loop",
  arrows: false,
  pagination: false,
  drag: "free",
  gap: 20,
  perPage: 1,
  padding: "20%",
  autoScroll: {
    speed: 0.5,
    pauseOnHover: false,
  },
};
const splide = new Splide(".splide", options);
splide.mount(window.splide.Extensions);