var copyMailDev = document.getElementById("copyMailDev");
var copyMailPw = document.getElementById("copyMailPw");
var copyTelegram = document.getElementById("copyTelegram");
var copyDiscord = document.getElementById("copyDiscord");

copyMailDev.onclick = function() {
  var copy = navigator.clipboard.writeText("j@lerenner.dev");
	copyMailDev.style.textDecoration = "none";
  copyMailDev.innerHTML = "<pre style='margin:0;color: #aaa;'>         Copied!</pre>";
  setTimeout(function(){
		copyMailDev.innerHTML = "j@lerenner.dev";
		copyMailDev.style.textDecoration = "underline";
	}, 320);
}

copyMailPw.onclick = function() {
  var copy = navigator.clipboard.writeText("j@renner.pw");
	copyMailPw.style.textDecoration = "none";
  copyMailPw.innerHTML = "<pre style='margin:0;color: #aaa;'>         Copied!</pre>";
  setTimeout(function(){
		copyMailPw.innerHTML = "j@renner.pw";
		copyMailPw.style.textDecoration = "underline";
	}, 320);
}

copyTelegram.onclick = function() {
  var copy = navigator.clipboard.writeText("LeRenner");
	copyTelegram.style.textDecoration = "none";
  copyTelegram.innerHTML = "<pre style='margin:0;color: #aaa;'>         Copied!</pre>";
  setTimeout(function(){
		copyTelegram.innerHTML = "@lerenner";
		copyTelegram.style.textDecoration = "underline";
	}, 320);
}

copyDiscord.onclick = function() {
  var copy = navigator.clipboard.writeText("LojasRenner#3419");
	copyDiscord.style.textDecoration = "none";
  copyDiscord.innerHTML = "<pre style='margin:0;color: #aaa;'>         Copied!</pre>";
  setTimeout(function(){
		copyDiscord.innerHTML = "LojasRenner#3419";
		copyDiscord.style.textDecoration = "underline";
	}, 320);
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
    i++;
		var speed = 240*Math.random()
		if (end) {
			title.innerHTML = tempText += "<span class=\"blinking\">⠀</span> "
			return
		}
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter,2000);

function supportsPlant () {
  var ctx = document.createElement("canvas").getContext("2d");
  ctx.fillText("🪴", -2, 4);
  return ctx.getImageData(0, 0, 1, 1).data[3] > 0;
}

if ( ! supportsPlant() ) {
	document.getElementById("plant").innerHTML = "<a href=\"https://youtu.be/dQw4w9WgXcQ\" target=\"_blank\" style=\"text-decoration:none;\">🌿</a>";
}
