$(function () {
  alert("현재 페이지는 최소 1024px까지 지원합니다.\n추후 업데이트할 예정입니다.")
  
  /* up버튼 */
  $('.up').click(function () {
      $('html,body').animate({
          scrollTop: 0
      }, 700)
  });
  $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
          $('.up').css({
              'display': 'block'
          })
      } else {
          $('.up').css({
              'display': 'none'
          })
      }
  });

  /* 스크롤 시 콘텐츠 나타내기 */
  window.addEventListener('scroll', function() {
      let visual01Item = document.querySelectorAll('.visual01 .item');
      let scrollBar = window.scrollY;

      if($(window).width() >= 1024) {
          if(1300 < scrollY) {
              visual01Item.forEach((item, index) => {
                  item.classList.add('on' + index, 'active');
              })
              // visual01.classList.add('scroll_on');
          } else {
              visual01Item.forEach((item) => {
                  item.classList.remove('on', 'active');
              })
              // visual01.classList.remove('scroll_on');
          }
      }
      // console.log(scrollBar)
  })
  /* section01 new slide */
  var swiper = new Swiper(".first", {
      rewind: true,
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          1780: {
              slidesPerView: 4
          },
          1655: {
              slidesPerView: 3.5
          }
      },
  });

  /* section01 new slide */
  var swiper = new Swiper(".second", {
      rewind: true,
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
          nextEl: ".second-next",
          prevEl: ".second-prev",
      },
      breakpoints: {
          1780: {
              slidesPerView: 4
          },
          1655: {
              slidesPerView: 3.5
          }
      },
  });
}); //script end