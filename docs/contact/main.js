var copyMail = document.getElementById("copyMail");
var copyTelegram = document.getElementById("copyTelegram");
var copyDiscord = document.getElementById("copyDiscord");
let currentSize = ""

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
  if (window.innerWidth <= 850 && currentSize != "s") {
    currentSize = "s"
    console.log("batatasaaaaaaa")
    document.getElementById("desktopHeader").style.display = "none";
    document.getElementById("mobileHeader").style.display = "block";
    document.getElementById("smallerLogo").style.fontSize = "8px";
    document.getElementById("deskBreaker").style.display = "none";
    document.getElementById("contactFlexbox").style.width = "100%";
    document.body.style.fontSize = "1.12rem";
    copyDiscord.style.display = "none";
    copyMail.style.display = "none";
    copyTelegram.style.display = "none";
  }
  if (window.innerWidth > 850 && currentSize != "b") {
    currentSize = "b"
    document.getElementById("desktopHeader").style.display = "inline-block";
    document.getElementById("mobileHeader").style.display = "none";
    document.getElementById("smallerLogo").style.fontSize = "0.78rem";
    document.getElementById("deskBreaker").style.margin = "inline-block";
    document.getElementById("contactFlexbox").style.width = "880px";
    document.body.style.fontSize = "1.42rem";
    copyDiscord.style.display = "inline-block";
    copyMail.style.display = "inline-block";
    copyTelegram.style.display = "inline-block";
  }
}

resize()

document.getElementsByTagName("BODY")[0].onresize = function() {
  resize()
};