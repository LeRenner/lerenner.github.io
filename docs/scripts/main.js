var modal = document.getElementById("contactBox");
var contact = document.getElementById("contact");
var span = document.getElementsByClassName("close")[0];
var copyMail = document.getElementById("copyMail")
var copyTelegram = document.getElementById("copyTelegram")
var copyDiscord = document.getElementById("copyDiscord")

copyMail.onclick = function() {
  var lalala = navigator.clipboard.writeText("j@lerenner.dev")
  copyMail.innerHTML = "Copied!";
  setTimeout(function(){
    copyMail.innerHTML = "Copy"
  }, 320);
}

copyTelegram.onclick = function() {
  var lalala = navigator.clipboard.writeText("LeRenner")
  copyTelegram.innerHTML = "Copied!";
  setTimeout(function(){
    copyTelegram.innerHTML = "Copy"
  }, 320);
}

copyDiscord.onclick = function() {
  var lalala = navigator.clipboard.writeText("LojasRenner#3419")
  copyDiscord.innerHTML = "Copied!";
  setTimeout(function(){
    copyDiscord.innerHTML = "Copy"
  }, 320);
}

contact.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
