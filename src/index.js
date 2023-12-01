import './styles/styles.scss';
import $ from "jquery";
import AOS from 'aos';
import './modal';
import './magnific-popup';

let toggle = document.querySelector('.menu input')
$('#mobile_menu').on('click', () => {
  if(toggle.checked){
    $('.slide_nav').animate({
      left: 0
    })
  } else {
    $('.slide_nav').animate({
      left: '-100%'
    })
  }
})

$('#view_services').on('click', () => {
  $('#services__list').slideToggle();
})


AOS.init({
  startEvent: 'DOMContentLoaded',
});

$('.imagesWork').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
});
