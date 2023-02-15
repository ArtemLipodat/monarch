import './styles/styles.scss';
import $ from "jquery";

let toggle = document.querySelector('.menu input')
$('#mobile_menu').on('click', () => {
  console.log('aaa')
})
document.querySelector('body').addEventListener('click', () => {
  toggle.checked = !toggle.checked
})