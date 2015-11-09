      var basketItem = document.querySelectorAll(".item");                
      var basketPopup = document.querySelector(".modal-basket");
      var basketClose = basketPopup.querySelector(".close");
      var basketCont = basketPopup.querySelector(".btn_white");
      
      // пока не получается сделать выбор сразу нескольких кнопок      
      
      
      basketClose.addEventListener("click", function(event) {
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