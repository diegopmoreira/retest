"use strict";

const menu_ham = document.getElementsByClassName("menu_ham");
const menu_close = document.getElementsByClassName("menu_close");
const menu = document.getElementsByClassName("menu");
menu_ham[0].addEventListener("click", click_ham);
menu_close[0].addEventListener("click", click_close);

function click_ham() {
  // menu[0].classList.add('open');
  let classes = menu[0].className;
  menu[0].className = classes + ' open';
}


function click_close() {
  let classes = menu[0].className;
  classes = classes.replace("open", "");
  menu[0].className = classes;

}