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