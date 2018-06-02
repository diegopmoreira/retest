"use strict";

var menu_ham = document.getElementsByClassName("menu_ham");
var menu_close = document.getElementsByClassName("menu_close");
var menu = document.getElementsByClassName("menu");
menu_ham[0].addEventListener("click", click_ham);
menu_close[0].addEventListener("click", click_close);

function click_ham() {
  menu[0].style.display = "block";
}

function click_close() {
  menu[0].style.display = "none";
}