var modal = document.getElementById("contactBox");
var modal2 = document.getElementById("whoamiBox");
var contact = document.getElementById("contact");
var whoami = document.getElementById("whoami");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var copyMail = document.getElementById("copyMail");
var copyTelegram = document.getElementById("copyTelegram");
var copyDiscord = document.getElementById("copyDiscord");
console.log("batatas");

copyMail.onclick = function() {
  var copy = navigator.clipboard.writeText("j@lerenner.dev")
  copyMail.innerHTML = "Copied!";
  setTimeout(function(){
    copyMail.innerHTML = "Copy";
  }, 320);
}

copyTelegram.onclick = function() {
  var copy = navigator.clipboard.writeText("LeRenner")
  copyTelegram.innerHTML = "Copied!";
  setTimeout(function(){
    copyTelegram.innerHTML = "Copy"
  }, 320);
}

copyDiscord.onclick = function() {
  var copy = navigator.clipboard.writeText("LojasRenner#3419")
  copyDiscord.innerHTML = "Copied!";
  setTimeout(function(){
    copyDiscord.innerHTML = "Copy"
  }, 320);
}

contact.onclick = function() {
  modal.style.display = "block";
}

whoami.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

if (screen.width <= 699) { //resize a buncha stuff
  document.getElementById("deskBreaker1").style.display = "none";
  document.getElementById("deskBreaker2").style.display = "none";
  logo.style.fontSize = "8px";
  document.getElementById("img1").height = "54";
  document.getElementById("img2").height = "54";
  document.getElementById("img3").height = "54";
  document.getElementById("icon1").style.padding = "10px";
  document.getElementById("icon2").style.padding = "10px";
  document.getElementById("icon3").style.padding = "10px";
  document.getElementById("modalContent1").style.width = "80%";
  document.getElementById("modalContent2").style.width = "80%";
  copyTelegram.style.display = "none";
  copyDiscord.style.display = "none";
  copyMail.style.display = "none";
}

