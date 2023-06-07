/********************* pop-up ************************* */
document.addEventListener("DOMContentLoaded", function () {
  var galleryImages = document.querySelectorAll(".gallery-image");
  var popup = document.getElementById("popup");
  var popupImage = document.getElementById("popup-image");
  var popupText = document.getElementById("popup-text");
  var closePopup = document.querySelector(".close-popup");

  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      var src = image.getAttribute("src");
      var text = image.getAttribute("data-popup-text");

      popupImage.setAttribute("src", src);
      popupText.innerText = text;

      popup.style.display = "block";
    });
  });

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
