import './styles/styles.scss';
import $ from "jquery";

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