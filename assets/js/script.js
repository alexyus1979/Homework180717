"use strict";
jQuery.noConflict();
jQuery(document).ready(function ($) {
  //скрипт уменьшения шапки и появления стрелки "вверх"
  $( document ).on( "scroll", function( event ) {
    if ($( document ).scrollTop()){
      $( ".fa-chevron-circle-up" ).css({display: 'block'});
      $( "header, .internal_header, header .container").css({height: '70px'});
      $( "header .container" ).css({paddingTop: '21px'});
    }
    else{
      $( ".fa-chevron-circle-up" ).css({display: 'none'});
      $( "header, .internal_header, header .container").css({height: '138px'});
      $( "header .container" ).css({paddingTop: '56px'});
    }
  });

  //вызов плагина "слайдер"
  $('.big_slider').slider({
    bgImages: ['url(assets/img/bg_big_slider.png)', 'url(assets/img/bg_big_slider2.png)', 'url(assets/img/bg_big_slider3.png)'],
    sources: ['assets/img/big_slider_man.png', 'assets/img/big_slider_girl.png', 'assets/img/big_slider_woman.png'],
    positionLeft: [-150, 0, -50]
  });

  //скрипт для карусели
  $('.managers .fa-angle-right').on('click', goNext);
  $('.managers .fa-angle-left').on('click', goPreview);

  function goNext(){
    var block_width = $('.karusel').find('.col_karusel').outerWidth();
    $('.karusel').find('.col_karusel').animate({left: "-="+ block_width +"px"}, 1, function(){
        $('.karusel').find('.col_karusel').css({"left":"0px"}); 
      });
   $('.karusel').find('.col_karusel:first').detach().insertAfter('.col_karusel:last');
  }

  function goPreview(){
    var block_width = $('.karusel').find('.col_karusel').outerWidth();
    $('.karusel').find('.col_karusel').animate({left: "+="+ block_width +"px"}, 1, function(){
        $('.karusel').find('.col_karusel').css({"left":"0px"}); 
      });
   $('.karusel').find('.col_karusel:last').detach().insertBefore('.col_karusel:first');
  }
  //скрипт для карусели завершен

  //скрипт для слайдера Твиттера
  $('.blog .fa-chevron-circle-right').on('click', goTweetsNext);
  $('.blog .fa-chevron-circle-left').on('click', goTweetsPreview);

  function goTweetsNext(event){
    event.preventDefault();
    var block_width = $('.blog').find('.col4').outerWidth();
    $('.blog .col4:nth-child(2)').find('.wrap').animate({left: "-"+ block_width +"px"}, 1000, function(){
          $(this).css({"right": "-"+block_width+"px", "left": "auto"})
              .animate({right: "0px"}, 1000);
        });
  }

  function goTweetsPreview(){
    event.preventDefault();
    var block_width = $('.blog').find('.col4').outerWidth();
    $('.blog .col4:nth-child(2)').find('.wrap').animate({right: "-"+ block_width +"px"}, 1000, function(){
          $(this).css({"left": "-"+block_width+"px", "right": "auto"})
              .animate({left: "0px"}, 1000);
        });
  }
  // скрипт для Твиттера завершен

});

//скрипт для валидации формы на странице HOME
(function(){
  window.onload=function(){

  var userName = document.querySelector('.contact_name');
  var email = document.querySelector('.contact_email');
  var btn = document.querySelector('.submit_form');
  var regV = /^[a-z]{6,20}$/;
  var regEmail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/;
  
  if (btn){
    btn.addEventListener('click', function(){
    /*проверка имени пользователя, что в нем не менее 6 символов и не более 20 символов*/
    var result = userName.value.search(regV);
    if ( result === -1 ){
      document.querySelector('.info').classList.remove('not_visible');
    }
    else{
      document.querySelector('.info').classList.add('not_visible');
    }

    /*проверка e-mail, что в нем есть @ и точка*/
    result = email.value.search(regEmail);
    if ( result === -1 ){
      document.querySelector('.e_mail').classList.remove('not_visible');
    }
    else{
      document.querySelector('.e_mail').classList.add('not_visible');
    }


    })
  }
  
  /*окончание скрипта для валидации формы на странице HOME*/

  //скрипт на странице CONTACT US
  var c_userName = document.querySelector('.your_name');
  var c_email = document.querySelector('.your_email');
  var c_btn = document.querySelector('.send');
  var c_phone = document.querySelector('.phone_number');
  var c_regV = /^[a-z]{6,20}$/;
  var c_regEmail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/;
  var c_regPhone = /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/;

//для валидации формы
  var result;
  if (c_btn){
    c_btn.addEventListener('click', function(){
    /*проверка имени пользователя, что в нем не менее 6 символов и не более 20 символов*/
    result = c_userName.value.search(c_regV);
    if ( result === -1 ){
      document.querySelector('.info').classList.remove('not_visible');
    }
    else{
      document.querySelector('.info').classList.add('not_visible');
    }

    /*проверка e-mail, что в нем есть @ и точка*/
    result = c_email.value.search(c_regEmail);
    if ( result === -1 ){
      document.querySelector('.e_mail').classList.remove('not_visible');
    }
    else{
      document.querySelector('.e_mail').classList.add('not_visible');
    }

    /*проверка телефонного намера*/
    result = c_phone.value.search(c_regPhone);
    if ( result === -1 ){
      document.querySelector('.phone_info').classList.remove('not_visible');
    }
    else{
      document.querySelector('.phone_info').classList.add('not_visible');
    }

    });
//окончание скрипта для валидации формы

  //обработчик нажатия на блок, накрывающий карту
  document.querySelector('.patch').addEventListener('click', function(){
    this.style.display = 'none';
  });

  document.querySelector('footer, .contact_data, contact_us').addEventListener('click', function(){
    document.querySelector('.patch').style.display = 'block';
  });

  //окончание скрипта на странице CONTACT US
  }

}
 
})();


