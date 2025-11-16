const swiper = new Swiper('.swiper', {
  // オプション
  direction: 'horizontal', // 水平スライダー
  loop: true,              // ループ有効化
  autoplay: {
    delay: 3000,           // 自動再生の間隔
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,       // ページネーションのクリック有効化
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true, // 前のスライドと次のスライドをなめらかに重ねる
  },
  speed: 1500,
});