var copyMail = document.getElementById("copyMail");
var copyTelegram = document.getElementById("copyTelegram");
var copyDiscord = document.getElementById("copyDiscord");

copyMail.onclick = function() {
  var copy = navigator.clipboard.writeText("j@lerenner.dev");
  copyMail.innerHTML = "Copied!";
  setTimeout(function(){copyMail.innerHTML = "j@lerenner.dev";}, 320);
}

copyTelegram.onclick = function() {
  var copy = navigator.clipboard.writeText("LeRenner");
  copyTelegram.innerHTML = "Copied!";
  setTimeout(function(){copyTelegram.innerHTML = "@lerenner"}, 320);
}

copyDiscord.onclick = function() {
  var copy = navigator.clipboard.writeText("LojasRenner#3419");
  copyDiscord.innerHTML = "Copied!";
  setTimeout(function(){copyDiscord.innerHTML = "LojasRenner#3419"}, 320);
}

//for mobile only:

mobileCopyMail = function() {
	var copy = navigator.clipboard.writeText("j@lerenner.dev");
	copyMail.innerHTML = "Copied!";
	setTimeout(function(){copyMail.innerHTML = "j@lerenner.dev";}, 320);
}

mobileCopyTelegram = function() {
	var copy = navigator.clipboard.writeText("LeRenner");
  copyTelegram.innerHTML = "Copied!";
  setTimeout(function(){copyTelegram.innerHTML = "@lerenner"}, 320);
}

mobileCopyDiscord = function() {
	var copy = navigator.clipboard.writeText("LojasRenner#3419");
  copyDiscord.innerHTML = "Copied!";
  setTimeout(function(){copyDiscord.innerHTML = "LojasRenner#3419"}, 320);
}
