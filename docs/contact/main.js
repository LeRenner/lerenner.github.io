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