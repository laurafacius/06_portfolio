/*******************************burger menu ******************* */
// Få elementet med ID'et "burger-menu" og gem det i variablen burgerMenu
var burgerMenu = document.getElementById("burger-menu");

// Få elementet med ID'et "menu" og gem det i variablen overlay
var overlay = document.getElementById("menu");

// Tilføj en klik-hændelseslytter til burgerMenu-elementet
burgerMenu.addEventListener("click", function () {
  // Skift tilstanden for klassen "close" på det klikkede element (burgerMenu)
  this.classList.toggle("close");

  // Skift tilstanden for klassen "overlay" på overlay-elementet
  overlay.classList.toggle("overlay");
});
