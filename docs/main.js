/* =-=-=-=-=-= Copy contacts =-=-=-=-=-= */

var copyMailDev = document.getElementById("copyMailDev");
var copyTelegram = document.getElementById("copyTelegram");

copyMailDev.onclick = function() {
  var copy = navigator.clipboard.writeText("j@lerenner.dev");
	copyMailDev.style.textDecoration = "none";
  copyMailDev.innerHTML = "<pre style='margin:0;color: #aaa;'>       Copied!</pre>";
  setTimeout( function(){
		copyMailDev.innerHTML = "j@lerenner.dev";
	}, 320);
}

copyTelegram.onclick = function() {
	var copy = navigator.clipboard.writeText("LeRenner");
	  copyTelegram.style.textDecoration = "none";
	copyTelegram.innerHTML = "<pre style='margin:0;color: #aaa;'>       Copied!</pre>";
	setTimeout( function(){
		  copyTelegram.innerHTML = "@LeRrenner";
	  }, 320);
  }

/* =-=-=-=-=-= Cool animation =-=-=-=-=-= */

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

/* =-=-=-=-=-= Misc =-=-=-=-=-= */

