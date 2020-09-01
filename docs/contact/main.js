var copyMail = document.getElementById("copyMail");
var copyTelegram = document.getElementById("copyTelegram");
var copyDiscord = document.getElementById("copyDiscord");
let currentSize = "b"

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

resize = function() {
  if (window.innerWidth <= 699 && currentSize != "s") {
    currentSize = "s"
    document.getElementById("desktopHeader").style.display = "none";
    document.getElementById("mobileHeader").style.display = "block";
    document.getElementById("smallerLogo").style.fontSize = "8px";
    document.getElementById("deskBreaker").style.margin = "0";
    document.getElementById("contactFlexbox").style.width = "100%";
    copyDiscord.style.display = "none";
    copyMail.style.display = "none";
    copyTelegram.style.display = "none";
  }
  if (window.innerWidth > 699 && currentSize != "b") {
    currentSize = "b"
    document.getElementById("desktopHeader").style.display = "inline-block";
    document.getElementById("mobileHeader").style.display = "none";
    document.getElementById("smallerLogo").style.fontSize = "78%";
    document.getElementById("deskBreaker").style.margin = "16px 0";
    document.getElementById("contactFlexbox").style.width = "880px";
    copyDiscord.style.display = "inline-block";
    copyMail.style.display = "inline-block";
    copyTelegram.style.display = "inline-block";
  }
}

resize()

document.getElementsByTagName("BODY")[0].onresize = function() {
  resize()
};