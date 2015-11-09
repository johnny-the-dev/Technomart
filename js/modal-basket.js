var basketItem = document.querySelectorAll(".item");                
var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".close");
var basketCont = basketPopup.querySelector(".btn_white");

function openBasket(event) {
    event.preventDefault();
    basketPopup.classList.add("modal-content-show");    
}

for(var i = 0; i < basketItem.length; i++) {
  var basketLink = basketItem[i].querySelector(".buy");
  basketLink.addEventListener("click", openBasket);
}

// окно стало всплывать, но не уверен, что верно сделал

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

