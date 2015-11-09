var mapLink = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".close");
      
mapLink.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});
      
mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");                
});
      
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");                          
    }
  }
});