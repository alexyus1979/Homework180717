"use strict";
jQuery.noConflict();
(function ($) {
  $.fn.slider = function (options){
    options = $.extend({
      widthBg: '100%',/*ширина бэкграунда*/
      heightBg: '612px',
      bgImages: ['url(assets/img/bg_big_slider.png)'],
      sources: ['assets/img/big_slider_man.png'],
      positionLeft: [-150],
      timeDisplay: 5000,
      timeToggle: 2000
    }, options);
    var $objBigSlider = $(this);//присваиваем отдельной переменной this в от  
    var count = 0;
    var countBgImg1 = 0;
    var countBgImg2 = 1;
    var num = options.sources.length - 1;
    var numBgImg = options.bgImages.length - 1;
    var windowWidth = $(window).width();

    toggleImg();/*вызов функции переключения картинок, в качестве аргумента - кол-во картинок*/

    function toggleImg(){

        $objBigSlider.find('img:first').delay(options.timeDisplay)
           .fadeOut(options.timeToggle, function(){
              count++;//увеличиваем счетчик картинки на 1
              if (count > num){
                count = 0;
              }
              $(this).attr({src: options.sources[count]});
              $(this).css({left: options.positionLeft[count]});
           })
           .fadeIn(options.timeToggle, function(){
              if($objBigSlider.find('section:nth-child(2)').css('opacity') == 0){
                countBgImg1+=2;//увеличиваем счетчик картинок фона на 2
                if (countBgImg1 > numBgImg){
                  countBgImg1-=(numBgImg+1);
                }
                $objBigSlider.find('section:nth-child(1)')
                             .animate({opacity: 0}, options.timeToggle, function(){
                              $(this).css({
                                backgroundImage: options.bgImages[countBgImg1]
                              });
                             });
                $objBigSlider.find('section:nth-child(2)')
                             .animate({opacity: 1}, options.timeToggle)
                             .css({
                              backgroundSize: 'cover'
                             });
              }

              else{
                countBgImg2+=2;//увеличиваем счетчик картинок фона на 2
                if (countBgImg2 > numBgImg){
                  countBgImg2-=(numBgImg+1);
                }
                $objBigSlider.find('section:nth-child(2)')
                             .animate({opacity: 0}, options.timeToggle, function(){
                              $(this).css({
                                backgroundImage: options.bgImages[countBgImg2]
                              });
                             });
                $objBigSlider.find('section:nth-child(1)')
                             .animate({opacity: 1}, options.timeToggle)
                             .css({
                              backgroundSize: 'cover'
                             });
              }
              toggleImg();
            });
      }

  }
})(jQuery);