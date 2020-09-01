var contactBox = document.getElementById("contactBox");
var whoamiBox = document.getElementById("whoamiBox");
var miscBox = document.getElementById("miscBox");
var contactButton = document.getElementById("contactButton");
var whoamiButton = document.getElementById("whoamiButton");
var miscButton = document.getElementById("miscButton");
var closeModal1 = document.getElementsByClassName("close")[0];
var closeModal2 = document.getElementsByClassName("close")[1];
var closeModal3 = document.getElementsByClassName("close")[2];
var copyMail = document.getElementById("copyMail");
var copyTelegram = document.getElementById("copyTelegram");
var copyDiscord = document.getElementById("copyDiscord");

copyMail.onclick = function() {
  var copy = navigator.clipboard.writeText("j@lerenner.dev");
  copyMail.innerHTML = "Copied!";
  setTimeout(function(){copyMail.innerHTML = "Copy";}, 320);
}

copyTelegram.onclick = function() {
  var copy = navigator.clipboard.writeText("LeRenner");
  copyTelegram.innerHTML = "Copied!";
  setTimeout(function(){copyTelegram.innerHTML = "Copy"}, 320);
}

copyDiscord.onclick = function() {
  var copy = navigator.clipboard.writeText("LojasRenner#3419");
  copyDiscord.innerHTML = "Copied!";
  setTimeout(function(){copyDiscord.innerHTML = "Copy"}, 320);
}

contactButton.onclick = function() {
  contactBox.style.display = "block";
}

whoamiButton.onclick = function() {
  whoamiBox.style.display = "block";
}

miscButton.onclick = function() {
  miscBox.style.display = "block";
}

closeModal = function() {
  contactBox.style.display = "none";
  whoamiBox.style.display = "none";
  miscBox.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == contactBox) {
    contactBox.style.display = "none";
  }
  else if (event.target == whoamiBox) {
    whoamiBox.style.display = "none";
  }
  else if (event.target == miscBox) {
    miscBox.style.display = "none";
  }
}

var elems = document.getElementsByClassName("close");
for (var i=0, len=elems.length; i < len; i++) elems[i].onclick = closeModal;

if (screen.width <= 699) { //resize a buncha stuff
  document.getElementById("deskBreaker").style.display = "none";
  logo.style.fontSize = "8px";
  document.getElementById("img1").height = "54";
  document.getElementById("img2").height = "54";
  document.getElementById("img3").height = "54";
  document.getElementById("icon1").style.padding = "10px";
  document.getElementById("icon2").style.padding = "10px";
  document.getElementById("icon3").style.padding = "10px";
  document.getElementById("whoamiContent").style.width = "80%";
  document.getElementById("contactContent").style.width = "80%";
  copyTelegram.style.display = "none";
  copyDiscord.style.display = "none";
  copyMail.style.display = "none";
}

let number = Math.random();

if (Math.random() >= 0.5) {
  console.log("lalala") 
  document.getElementById("pp").src = "icons/pp.jpg";
}

console.log("batatas");
