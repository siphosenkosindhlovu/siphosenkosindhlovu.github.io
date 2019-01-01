import "./src/scss/main.scss";
import "./src/css/bootstrap-grid.css";


var trigger = document.querySelector('.trigger')
var main = document.querySelector('main')
trigger.addEventListener('click', e => {
  main.classList.toggle('open')
  console.log("clicked")
})