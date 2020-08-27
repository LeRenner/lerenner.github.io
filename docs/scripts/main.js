var modal = document.getElementById("contactBox");
var modal2 = document.getElementById("whoamiBox");
var contact = document.getElementById("contact");
var whoami = document.getElementById("whoami");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var copyMail = document.getElementById("copyMail");
var copyTelegram = document.getElementById("copyTelegram");
var copyDiscord = document.getElementById("copyDiscord");
var db1 = document.getElementById("deskBreaker1");
var db2 = document.getElementById("deskBreaker2");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
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

if (screen.width <= 699) {
  db1.style.display = "none";
  db2.style.display = "none";
  logo.style.fontSize = "8px";
  img1.style.height = "42";
  img2.style.height = "42";
  img3.style.height = "42";
}

