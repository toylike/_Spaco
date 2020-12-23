

let getButt = document.querySelector('.of_banner_title');

if(getButt.innerText == "Оффлайн приложение Spaco"){
  let nav_but = document.querySelector(".nav_button");
  let burger_but = document.querySelector(".burger_menu--button");
  nav_but.classList.add("hidden_button");
  burger_but.classList.add("hidden_button");
}