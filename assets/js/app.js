// jQuery function

$(document).ready(function() {

  (function menuClose() {
    if ($(window).width() <= 1240) {
      $('.header-menu__item:nth-child(1) .header-menu__link, .header-menu__item:nth-child(2) .header-menu__link').removeAttr("href");
    }
  }());
  (function menuFixed() {
    if ($(window).width() <= 992) {
      if ($(window).scrollTop() > 0) {
        $('.header').addClass('fixed-header');
        $('.header-mask').addClass('fixed-header');
      } else {
        $('.header').removeClass('fixed-header');
        $('.header-mask').removeClass('fixed-header');
      }
    }
    $(window).scroll(function() {
      if ($(window).width() <= 992) {
        if ($(window).scrollTop() > 0) {
          $('.header').addClass('fixed-header');
          $('.header-mask').addClass('fixed-header');
        } else {
          $('.header').removeClass('fixed-header');
          $('.header-mask').removeClass('fixed-header');
        }
      }
      $(window).on('load resize', function() {
        if ($(window).width() <= 992) {
          if ($(window).scrollTop() > 0) {
            $('.header').addClass('fixed-header');
            $('.header-mask').addClass('fixed-header');
          }
          else {
            $('.header').removeClass('fixed-header');
            $('.header-mask').removeClass('fixed-header');
          }
        }
      })
    })
  }());


  (function menuClose() {
    if ($(window).width() <= 1240) {
      $('.drop-container').removeClass('hover');
      $('.header-menu__link').removeClass('hover-i');
      $(window).on('load resize', function() {
        $('.drop-container').removeClass('hover');
        $('.header-menu__link').removeClass('hover-i');
        $('.header-menu__item').click(function () {
          $('.header-menu__item').removeClass('scr-close');
          $(this).addClass('scr-close');
        });
      });
      $('.header-menu__item').click(function () {
        $('.header-menu__item').removeClass('scr-close');
        $(this).addClass('scr-close');
      });
      let headerMenuItem = document.querySelectorAll('.header-menu__item')
      document.addEventListener('scroll', () => {
        headerMenuItem.forEach(e => {
          e.classList.remove('scr-close');
        });
      });
    }
  }());

  (function navPosition() {
    $(window).on('load resize', function() {
      if ($(window).width() >= 1440) {
        $('.win-slider__item, .recommendations-slider__item').addClass('width-win')
      } else {
        $('.win-slider__item, .recommendations-slider__item').removeClass('width-win')
      }
    })
    if ($(window).width() >= 1440) {
      $('.win-slider__item, .recommendations-slider__item').addClass('width-win')
    } else {
      $('.win-slider__item, .recommendations-slider__item').removeClass('width-win')
    }
  }());
  // Скролл 
  (function scrollHeader () {
    $(window).on('load resize', function() {
      if ($(window).width() >= 992) {
        $(window).on('load resize', function() {
          scrollHeaderDeskt();
        });
        function scrollHeaderDeskt () {
          $(window).scroll(function() {
            if ($(window).scrollTop() > 153) {
              //$('.header-offset').addClass('top');
              $('.header-nav').addClass('scroll');
              $('.height').addClass('active');
              $('.header-offset').addClass('active');
              
            } else {
              $('.header-nav').removeClass('scroll');
              $('.header-offset').removeClass('active');
              $('.height').removeClass('active');
              //$('.header-offset').removeClass('top');
            }
          });
        }
        scrollHeaderDeskt();
      } else {
        $(window).on('load resize', function() {
          scrollHeaderDesktAd();
        });
        function scrollHeaderDesktAd () {
          $('.header-nav').removeClass('scroll');
          $('.header-offset').removeClass('active');
          $('.height').removeClass('active');
          $('.header-offset').removeClass('top');
        }
        scrollHeaderDesktAd();
      }
    })
  })

  ///////////////////////////
    // navPosition
    (function navPosition() {
      $(window).on('load resize', function() {
        if ($(window).width() <= 1240) {
          if ($('.command__row').length) {
            $(window).on('load resize', function() {
                navAbsolute();
                navAbsoluteReviews();
            });

            function navAbsolute() {
                let sectionWidth = $('.page__command').width();
                let contWidth = $('.page__command .container').width();

                let totalRight = (sectionWidth - contWidth) / 2;

                $('.command__row').css("padding-left", totalRight);
                $('.command__row').css("padding-right", totalRight);
            };
            function navAbsoluteReviews() {
              let sectionWidth = $('.reviews').width();
              let contWidth = $('.reviews .container').width();

              let totalRight = (sectionWidth - contWidth) / 2;

              $('.reviews__row').css("padding-left", totalRight);
              $('.reviews__row').css("padding-right", totalRight);
            };
            navAbsolute();
            navAbsoluteReviews();
          }
        } else {
          $(window).on('load resize', function() {
            navAbsolute();
            navAbsoluteReviews();
          });

          function navAbsolute() {
              $('.command__row').css("padding-left", "unset");
              $('.command__row').css("padding-right", "unset");
          };

          function navAbsoluteReviews() {
            $('.reviews__row').css("padding-left", "unset");
            $('.reviews__row').css("padding-right", "unset");
          };
          navAbsolute();
          navAbsoluteReviews();
        }



        if ($(window).width() <= 1080) {
          $(window).on('load resize', function() {
            navAbsoluteMain();
          });
          function navAbsoluteMain() {
            let sectionWidth = $('.main-wrap').width();
            let contWidth = $('.main-wrap .container').width();

            let totalRight = (sectionWidth - contWidth) / 2;

            $('.main-advantages').css("padding-left", totalRight);
          };
          navAbsoluteMain()
        }




        if ($(window).width() <= 992) {
          function navAbsoluteTop() {
            let sectionWidth = $('.categories').width();
            let contWidth = $('.categories .container').width();

            let totalRight = (sectionWidth - contWidth) / 2;

            $('.top-categories__row').css("padding-left", totalRight);
            $('.top-categories__row').css("padding-right", totalRight);
          };
          navAbsoluteTop();
          $(window).on('load resize', function() {
            navAbsolutePluses();
            navAbsoluteTop();
          });
          function navAbsolutePluses() {
            let sectionWidth = $('.pluses').width();
            let contWidth = $('.pluses .container').width();

            let totalRight = (sectionWidth - contWidth) / 2;

            $('.pluses__row').css("padding-left", totalRight);
            $('.pluses__row').css("padding-right", totalRight);
          };
          navAbsolutePluses();
          ////
          function navAbsoluteTop() {
            let sectionWidth = $('.categories').width();
            let contWidth = $('.categories .container').width();

            let totalRight = (sectionWidth - contWidth) / 2;

            $('.top-categories__row').css("padding-left", totalRight);
            $('.top-categories__row').css("padding-right", totalRight);
          };
          navAbsoluteTop();
        } else {

          $(window).on('load resize', function() {
            navAbsolutePlusesq();
            navAbsoluteTopq();
          });
          function navAbsolutePlusesq() {
            $('.pluses__row').css("padding-left", "unset");
            $('.pluses__row').css("padding-right", "unset");
          };
          navAbsolutePlusesq();
          function navAbsoluteTopq() {
            $('.top-categories__row').css("padding-left", "unset");
            $('.top-categories__row').css("padding-right", "unset");
          };
          navAbsoluteTopq();
        }

        if ($(window).width() <= 768) {
          navAbsoluteTop();
        function navAbsoluteTop() {
          let sectionWidth = $('.categories').width();
          let contWidth = $('.categories .container').width();

          let totalRight = (sectionWidth - contWidth) / 2;

          $('.categories-tabs').css("padding-left", totalRight);
          $('.categories-tabs').css("padding-right", totalRight);
        };
        navAbsoluteTop();
      } else {
        function navAbsoluteTops() {
          $('.categories-tabs').css("padding-left", "unset");
          $('.categories-tabs').css("padding-right", "unset");
        };
        navAbsoluteTops();
      }
        $(window).on('load resize', function() {
          if ($(window).width() <= 768) {
              navAbsoluteTop();
            function navAbsoluteTop() {
              let sectionWidth = $('.categories').width();
              let contWidth = $('.categories .container').width();
  
              let totalRight = (sectionWidth - contWidth) / 2;
  
              $('.categories-tabs').css("padding-left", totalRight);
              $('.categories-tabs').css("padding-right", totalRight);
            };
            navAbsoluteTop();
          } else {
            function navAbsoluteTops() {
              $('.categories-tabs').css("padding-left", "unset");
              $('.categories-tabs').css("padding-right", "unset");
            };
            navAbsoluteTops();
          }
        })
        

      })
    }());
//////////////////////////////////////////////////////////////////////
    //Удаление атрибута
    (function removeAttrFooter () {
      if(document.documentElement.clientWidth < 576) {
        $('.footer__title').removeAttr('href');
      }
    })
    //Бургер меню
    (function headerBurger (){
      $('.header-burger').click(function () {
        $('.header-burger').toggleClass('active');
        $('.header-mobile').toggleClass('active');
        $('.header').toggleClass('open');
        $('html').toggleClass('hidden');
        $('.main').toggleClass('margin-none');
        
      });
    }());
    (function accordion() {
      if(document.documentElement.clientWidth < 576){
        $(".footer__title").click(function(){
          $(this).toggleClass("open").next().slideToggle();
          $(".footer__title").not(this).removeClass("open").next().slideUp();
        });
      }
      $(".header-mobile-item__title").click(function(){
        $(this).toggleClass("open").next().slideToggle();
        $(".header-mobile-item__title").not(this).removeClass("open").next().slideUp();
      });
    }());

    (function marquee() {
      if ($('.popular-slider').length) {
          $('.popular-slider').marquee({
              direction: 'left',
              duplicated: true,
              duration: 60000,
              gap: 0,
              delayBeforeStart: 0,
              startVisible: true,
          });
      };
    }());
  
    (function checkboxFooter () {
      $('.footer__form-data').mouseup(function () {
        $('.footer__form-btn').toggleClass('opacity')
      })
      $('.form__row-shape-checkbox').mouseup(function () {
        $('.consultation .form__row-btn').toggleClass('opacity')
      })
    }());
    /////////////////////////////////////////////////
    // slick-carousel
  /*  $(".win-slider__item").on("swiperight",function(){
      alert("Вы перетаскиваете вправо!");
    });  */
    (function slickCarousel() {
      if ($('.win-slider').length) {
        if ($(window).width() >= 1240) {
          $('.win-slider:not(.slick-initialized)').slick({
            variableWidth: true,
            centerMode: true,
            slidesToShow: 3,
            //centerPadding: '0',
            infinite: false,
            initialSlide: 1,
            swipe: false, 
            draggable: false,
            prevArrow: '<span class="slider-arrow left-arrow"><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM10 3.5L1 3.5V4.5L10 4.5V3.5Z" fill="#1A89FF"/></svg></span>',
            nextArrow: '<span class="slider-arrow right-arrow"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.28284 3.28284C9.43905 3.12663 9.43905 2.87337 9.28284 2.71716L6.73726 0.171573C6.58105 0.0153632 6.32778 0.0153632 6.17157 0.171573C6.01536 0.327783 6.01536 0.581048 6.17157 0.737258L8.43431 3L6.17157 5.26274C6.01536 5.41895 6.01536 5.67222 6.17157 5.82843C6.32778 5.98464 6.58105 5.98464 6.73726 5.82843L9.28284 3.28284ZM0 3.4H9V2.6H0L0 3.4Z" fill="#1A89FF"/></svg></span>',
            /*responsive: [
              {
                  breakpoint: 1360,
                  settings: {
                    draggable: true,
                    swipe: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
              }
            ]*/
          });
          if ($('.win-slider').length) {

            let winSlider = $('.win-slider');
    
            winSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
              winArrow();
            });  
          
          function winArrow() {
            if (winSlider.find('.win-slider__item:eq(1)').hasClass('slick-center')) {
              winSlider.find('.left-arrow').addClass('hidden');

            } else {
              winSlider.find('.left-arrow').removeClass('hidden');
            }
    
            if (winSlider.find('.win-slider__item:eq(-2)').hasClass('slick-center')) {
              winSlider.find('.right-arrow').addClass('hidden');
            } else {
              winSlider.find('.right-arrow').removeClass('hidden');
            }
          };
          winArrow();
          };
          function navAbsolute() {
            let sectionWidth = $('.win').width();
            let contWidth = $('.win .container').width();

            let totalRight = (sectionWidth - contWidth) / 2;
            
            //$('.win-slider .slick-track').css("left", totalRight);
            $('.win-slider__item:first-child').css("margin-left", "unset");
            $('.win-slider__item:last-child').css("margin-right", "unset");
          };
          navAbsolute();
      } else {
          $(".win-slider.slick-initialized").slick("unslick");
          function navAbsolutes() {
            let sectionWidth = $('.win').width();
            let contWidth = $('.win .container').width();
    
            let totalRight = (sectionWidth - contWidth) / 2;
            $('.win-slider .slick-track').css("left", "unset");
            $('.win-slider__item:first-child').css("margin-left", totalRight);
            $('.win-slider__item:last-child').css("margin-right", totalRight);
          };
          navAbsolutes();
          $(window).on('load resize', function() {
            navAbsolutes();
          });
      }
      }
        if(document.documentElement.clientWidth < 1240){
          let desktop = document.querySelectorAll('.desktop');
          desktop.forEach(e => {
            e.remove()
        });
        }

        if ($('.main-slider').length) {
          $('.main-slider').slick({
              fade: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              autoplay: true,
              autoplaySpeed: 6000,
              accessibility: false,
              focusOnSelect: false,
              centerMode: false,
              prevArrow: '<span class="slider-arrow left-arrow"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.81814 9L5 8.80961L1.3636 5L5 1.19039L4.81814 1L1 5L4.81814 9Z" fill="white" stroke="white" stroke-width="1.4" stroke-linejoin="round"/></svg></span>',
              nextArrow: '<span class="slider-arrow right-arrow"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.18186 1L1 1.19039L4.6364 5L1 8.80961L1.18186 9L5 5L1.18186 1Z" fill="white" stroke="white" stroke-width="1.4" stroke-linejoin="round"/></svg></span>',
              dots: true,
              appendDots: $('.main-slider__dots'),
              customPaging: function(slick, index) {
                  return ' <svg width="26" height="26" id="svg01" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="svg01" opacity="0.2" d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z" stroke="white" stroke-width="1.4"></path></svg>'
              }
          });
      };
      if ($('.news-slider').length) {
        $(window).on('load resize', function() {
            if ($(window).width() >= 1240) {
                $('.news-slider:not(.slick-initialized)').slick({
                  centerMode: true,
                  variableWidth: true,
                  slidesToShow: 3,
                  infinite: false,
                  initialSlide: 1,
                  prevArrow: '<span class="slider-arrow left-arrow"><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM10 3.5L1 3.5V4.5L10 4.5V3.5Z" fill="#1A89FF"/></svg></span>',
                  nextArrow: '<span class="slider-arrow right-arrow"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.28284 3.28284C9.43905 3.12663 9.43905 2.87337 9.28284 2.71716L6.73726 0.171573C6.58105 0.0153632 6.32778 0.0153632 6.17157 0.171573C6.01536 0.327783 6.01536 0.581048 6.17157 0.737258L8.43431 3L6.17157 5.26274C6.01536 5.41895 6.01536 5.67222 6.17157 5.82843C6.32778 5.98464 6.58105 5.98464 6.73726 5.82843L9.28284 3.28284ZM0 3.4H9V2.6H0L0 3.4Z" fill="#1A89FF"/></svg></span>',
                  swipe: false,
                  draggable: false,
                 /* responsive: [
                    {
                        breakpoint: 1360,
                        settings: {
                          draggable: true,
                          swipe: true,
                          slidesToShow: 2,
                          slidesToScroll: 2,
                        }
                    }
                  ]*/
              });
              
              if ($('.news-slider').length) {
                function navAbsolute() {
                  let sectionWidth = $('.news').width();
                  let contWidth = $('.news .container').width();
    
                  let totalRight = (sectionWidth - contWidth) / 2;
                  
                  //$('.news-slider .slick-track').css("left", totalRight);
                  $('.news-slider__item:first-child').css("margin-left", "unset");
                  $('.news-slider__item:last-child').css("margin-right", "unset");
                };
                navAbsolute();
                let newsSlider = $('.news-slider');
    
                newsSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
                  winArrow();
                });  
              
              function winArrow() {
                if (newsSlider.find('.news-slider__item:eq(1)').hasClass('slick-center')) {
                  newsSlider.find('.left-arrow').addClass('hidden');
                } else {
                  newsSlider.find('.left-arrow').removeClass('hidden');
                }
    
                if (newsSlider.find('.news-slider__item:eq(-2)').hasClass('slick-center')) {
                  newsSlider.find('.right-arrow').addClass('hidden');
                } else {
                  newsSlider.find('.right-arrow').removeClass('hidden');
                }
              };
              winArrow();
            };
            } else {
                $(".news-slider.slick-initialized").slick("unslick");
         
                function navAbsolute() {
                  let sectionWidth = $('.news').width();
                  let contWidth = $('.news .container').width();
          
                  let totalRight = (sectionWidth - contWidth) / 2;
                        
                  $('.news-slider__item:first-child').css("margin-left", totalRight);
                  $('.news-slider__item:last-child').css("margin-right", totalRight);
                };
                navAbsolute();
            }
        });
      }
        if ($('.recommendations-slider').length) {
          $(window).on('load resize', function() {
              if ($(window).width() >= 1240) {
                  $('.recommendations-slider:not(.slick-initialized)').slick({
                    variableWidth: true,
                    centerMode: true,
                    slidesToShow: 3,
                    infinite: false,
                    initialSlide: 1,
                    swipe: false,
                    draggable: false,
                    prevArrow: '<span class="slider-arrow left-arrow"><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM10 3.5L1 3.5V4.5L10 4.5V3.5Z" fill="#1A89FF"/></svg></span>',
                    nextArrow: '<span class="slider-arrow right-arrow"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.28284 3.28284C9.43905 3.12663 9.43905 2.87337 9.28284 2.71716L6.73726 0.171573C6.58105 0.0153632 6.32778 0.0153632 6.17157 0.171573C6.01536 0.327783 6.01536 0.581048 6.17157 0.737258L8.43431 3L6.17157 5.26274C6.01536 5.41895 6.01536 5.67222 6.17157 5.82843C6.32778 5.98464 6.58105 5.98464 6.73726 5.82843L9.28284 3.28284ZM0 3.4H9V2.6H0L0 3.4Z" fill="#1A89FF"/></svg></span>',
                    responsive: [
                      {
                        breakpoint: 1360,
                        settings: {
                          swipe: true,
                          draggable: true,
                          slidesToScroll: 2,
                        }
                    }
                  ]
                });
                if ($('.recommendations-slider').length) {

                  let recSlider = $('.recommendations-slider');
      
                  recSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
                    winArrow();
                  });  
                
                function winArrow() {
                  if (recSlider.find('.recommendations-slider__item:eq(1)').hasClass('slick-center')) {
                    recSlider.find('.left-arrow').addClass('hidden');
                  } else {
                    recSlider.find('.left-arrow').removeClass('hidden');
                  }
      
                  if (recSlider.find('.recommendations-slider__item:eq(-2)').hasClass('slick-center')) {
                    recSlider.find('.right-arrow').addClass('hidden');
                  } else {
                    recSlider.find('.right-arrow').removeClass('hidden');
                  }
                };
                winArrow();
              };
                function navAbsolute() {
                  let sectionWidth = $('.recommendations').width();
                  let contWidth = $('.recommendations .container').width();
    
                  let totalRight = (sectionWidth - contWidth) / 2;
                  
                  $('.recommendations-slider .slick-track').css("left", "unset");
                  $('.recommendations-slider__item:first-child').css("margin-left", "unset");
                  $('.recommendations-slider__item:last-child').css("margin-right", "unset");
                };
                navAbsolute();
              } else {
                  $(".recommendations-slider.slick-initialized").slick("unslick");
                  function navAbsoluteS() {
                    let sectionWidth = $('.recommendations').width();
                    let contWidth = $('.recommendations .container').width();
      
                    let totalRight = (sectionWidth - contWidth) / 2;
                    $('.recommendations-slider .slick-track').css("left", totalRight);
                    $('.recommendations-slider__item:first-child').css("margin-left", totalRight);
                    $('.recommendations-slider__item:last-child').css("margin-right", totalRight);
                  };
                  navAbsoluteS();
              }
          });
        }
            ///////////////////////////////
            if ($('.blog-slider').length) {
              $(window).on('load resize', function() {
                  if ($(window).width() >= 1240) {
                    $('.blog-slider:not(.slick-initialized)').slick({
                        centerMode: true,
                        slidesToShow: 2,
                       /* centerPadding: '170px',*/
                        infinite: false,
                        initialSlide: 1,
                        swipe: false, 
                        draggable: false,
                        prevArrow: '<span class="slider-arrow left-arrow"><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM10 3.5L1 3.5V4.5L10 4.5V3.5Z" fill="#1A89FF"/></svg></span>',
                        nextArrow: '<span class="slider-arrow right-arrow"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.28284 3.28284C9.43905 3.12663 9.43905 2.87337 9.28284 2.71716L6.73726 0.171573C6.58105 0.0153632 6.32778 0.0153632 6.17157 0.171573C6.01536 0.327783 6.01536 0.581048 6.17157 0.737258L8.43431 3L6.17157 5.26274C6.01536 5.41895 6.01536 5.67222 6.17157 5.82843C6.32778 5.98464 6.58105 5.98464 6.73726 5.82843L9.28284 3.28284ZM0 3.4H9V2.6H0L0 3.4Z" fill="#1A89FF"/></svg></span>',
                        /*responsive: [
                            {
                              breakpoint: 1360,
                              settings: {
                                swipe: true, 
                                draggable: true,
                                slidesToScroll: 2,
                              }
                            }
                        ]*/
                    });
                    if ($('.blog-slider').length) {

                      let winSlider = $('.blog-slider');
                
                      winSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
                        winArrow();
                      });  
                    
                      function winArrow() {
                        if (winSlider.find('.blog-slider__item:eq(1)').hasClass('slick-center')) {
                          winSlider.find('.left-arrow').addClass('hidden');
                        } else {
                          winSlider.find('.left-arrow').removeClass('hidden');
                        }
                  
                        if (winSlider.find('.win-slider__item:eq(-2)').hasClass('slick-center')) {
                          winSlider.find('.right-arrow').addClass('hidden');
                        } else {
                          winSlider.find('.right-arrow').removeClass('hidden');
                        }
                      };
                      winArrow();
                    };
                    function navAbsolute() {
                      let sectionWidth = $('.blog').width();
                      let contWidth = $('.blog .container').width();
          
                      let totalRight = (sectionWidth - contWidth) / 2;
                        
                      $('.blog-slider .slick-track').css("left", totalRight);
                      $('.blog-slider .slick-track').css("left", totalRight);
                      $('.blog-slider__item:first-child').css("margin-left", "unset");
                      $('.blog-slider__item:last-child').css("margin-right", "unset");
                    };
                    navAbsolute();
                  } else {
                      $(".blog-slider.slick-initialized").slick("unslick");
                      
                      function navAbsoluteS() {
                        let sectionWidth = $('.blog').width();
                        let contWidth = $('.blog .container').width();
          
                        let totalRight = (sectionWidth - contWidth) / 2;
                        
                        $('.blog-slider__item:first-child').css("margin-left", totalRight);
                        $('.blog-slider__item:last-child').css("margin-right", totalRight);
                      };
                      navAbsoluteS();
                  }
              });
          }

    ///////////////////////////////
    }());

    // tabs
    (function tabs() {
        var tabContent = $('.tabs-block .tabs-content'); 
        tabContent.filter(':first').addClass('active'); 

        $('.tabs-link a').click(function(){
            tabContent.removeClass('active'); 
            tabContent.filter(this.hash).addClass('active'); 
            $('.tabs-link a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();

        $('.tabs-link a').click(function(){
            $('.tabs-link a[href=' + $(this).data('id')+ ']').click();
        });
    }());

    // search
    (function search() {
      $('.header-search').click(function() {
        $('.header-request').toggleClass('show');
      });

      $('.header-request__close').click(function() {
        $('.header-request').removeClass('show');
      });
      $(document).mouseup(function (e) {
        let container = $(".header-request");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          $('.header-request').removeClass('show');
        }
      });
    }()); 
    // city
    (function cityPopup() {
      $('.header-city').click(function() {
        $('.popup_city').toggleClass('_active');
      });

      $('.popup__close').click(function() {
        $('.popup_city').removeClass('_active');
      });
      $(document).mouseup(function (e) {
        let container = $(".popup__body");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          $('.popup_city').removeClass('_active');
        }
      });
    }()); 
    // phone mask
    (function phoneMask() {
      if ($('input[type=tel]').length) {
          $('input[type=tel]').mask("+7(999) 999-9999");
      }
    }());
});

// openTabs
function openTabs(evt, cityName) {
    let i, 
        tabcontent, 
        tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};

    Math.Vector = function (x, y) {
        this.x = x;
        this.y = y;
      }
      Math.Vector.prototype = {
        clone: function () {
          return new Math.Vector(this.x, this.y);
        },
        negate: function () {
          this.x = -this.x;
          this.y = -this.y;
          return this;
        },
        neg: function () {
          return this.clone().negate();
        },
        addeq: function (v) {
          this.x += v.x;
          this.y += v.y;
          return this;
        },
        subeq: function (v) {
          return this.addeq(v.neg());
        },
        add: function (v) {
          return this.clone().addeq(v);
        },
        sub: function (v) {
          return this.clone().subeq(v);
        },
        multeq: function (c) {
          this.x *= c;
          this.y *= c;
          return this;
        },
        diveq: function (c) {
          this.x /= c;
          this.y /= c;
          return this;
        },
        mult: function (c) {
          return this.clone().multeq(c);
        },
        div: function (c) {
          return this.clone().diveq(c);
        },
      
        dot: function (v) {
          return this.x * v.x + this.y * v.y;
        },
        length: function () {
          return Math.sqrt(this.dot(this));
        },
        normal: function () {
          return this.clone().diveq(this.length());
        }
      };
      
      function evade(evt) {
        var $this = $(this),
          corner = $this.offset(),
          center = {x: corner.left + $this.outerWidth() / 2, y: corner.top + $this.outerHeight() / 2},
          dist = new Math.Vector(center.x - evt.pageX, center.y - evt.pageY),
          closest = $this.outerWidth() / 2;
      
        // proximity test
        if (dist.length() >= closest) {
          return;
        }
      
        // calculate new position
        var delta = dist.normal().multeq(closest).sub(dist),
          newCorner = {left: corner.left + delta.x, top: corner.top + delta.y};
      
        // bounds check
        var padding = parseInt($this.css('padding-left'));
        if (newCorner.left < -padding) {
          newCorner.left = 0;
        } else if (newCorner.left + $this.outerWidth() - padding > $(document).width()) {
          newCorner.left = newCorner.left + $(document).width() - $this.outerWidth() + padding + 10;
        }
        if (newCorner.top < -padding) {
          newCorner.top = 0;
        } else if (newCorner.top + $this.outerHeight() - padding > $(document).height()) {
          newCorner.top = newCorner.top + $(document).height() - $this.outerHeight() + padding + 10;
        }
      
        // move bumper
        $this.offset(newCorner);
      }
      
      function beginEvade() {
        $(this).bind('mousemove', evade);
      }
      
      function endEvade() {
        $(this).unbind('mousemove', evade);
        this.style.left = 0;
        this.style.top = 0;
      }

      
// $(function () {
//     $('.circle').wrap('<span class="bumper" />')
  
//     $('.buble-anim').bind('mouseover', beginEvade);
//     $('.buble-anim').bind('mouseout', endEvade);
//   });