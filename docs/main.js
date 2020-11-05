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

//animation

var i = 0;
var txt = '#include renner.h';
var tempText = "";
speed=50
title = document.getElementById("title")
var end = false

function typeWriter() {
  if (i < txt.length+1) {
		if (title.innerHTML.length == 9) {
			tempText += " &lt;";
			title.innerHTML = tempText + "█"
		}
		else if (title.innerHTML.length == 22) {
			tempText += "&gt;";
			end = true
		}
		else {
			tempText += txt.charAt(i);
			title.innerHTML = tempText + "█"
		}
		console.log(title.innerHTML.length)
    i++;
		var speed = 180*Math.random()
		if (end) {
			title.innerHTML = tempText += "<span class=\"blinking\">⠀</span> "
			return
		}
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter,2000);
