// корзина

var basketItem = document.querySelectorAll(".item");
var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".close");
var basketCont = basketPopup.querySelector(".btn_white");

function openBasket(event) {
    event.preventDefault();
    basketPopup.classList.add("modal-content-show");    
}

for (var i = 0; i < basketItem.length; i++) {  
  basketItem[i].querySelector(".buy").addEventListener("click", openBasket);
}

basketClose.addEventListener("click", function (event) {
  event.preventDefault();
  basketPopup.classList.remove("modal-content-show");
});
      
basketCont.addEventListener("click", function(event) {
  event.preventDefault();
  basketPopup.classList.remove("modal-content-show");
});
      
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) { 
    if (basketPopup.classList.contains("modal-content-show")) {
       basketPopup.classList.remove("modal-content-show");
    }
  } 
});




// форма обратной связи

var writeusLink = document.querySelector(".btn-writeus");
var writeusPopup = document.querySelector(".modal-writeus");
var writeusClose = writeusPopup.querySelector(".close");
var writeusLogin = writeusPopup.querySelector("[name='name']");
var writeusCancel = writeusPopup.querySelector("[type='reset']");
      
writeusLink.addEventListener("click", function(event) {
  event.preventDefault();
  writeusPopup.classList.add("modal-content-show");
  writeusLogin.focus();
 });
      
writeusClose.addEventListener("click", function(event) {
  event.preventDefault();
  writeusPopup.classList.remove("modal-content-show");                
});

writeusCancel.addEventListener("click", function(event) {
  event.preventDefault();
  writeusPopup.classList.remove("modal-content-show");  
});    
      
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (writeusPopup.classList.contains("modal-content-show")) {
      writeusPopup.classList.remove("modal-content-show");                          
    }
  }
});





// карта 

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