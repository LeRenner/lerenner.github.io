let currentSize = ""

resize = function() {
  if (window.innerWidth <= 699 && currentSize != "s") {
    console.log("small!")
    currentSize = "s"
    document.getElementById("mobileBreaker1").style.display = "inline-block";
    document.getElementById("mobileBreaker2").style.display = "inline-block";
    document.getElementById("mobileBreaker3").style.display = "inline-block";
    document.getElementById("deskBreaker").style.display = "none";
    document.getElementById("mainLogo").style.fontSize = "8px";
    document.getElementById("img1").height = "54";
    document.getElementById("img2").height = "54";
    document.getElementById("img3").height = "54";
    document.getElementById("icon1").style.padding = "10px";
    document.getElementById("icon2").style.padding = "10px";
    document.getElementById("icon3").style.padding = "10px";
  }
  if (window.innerWidth > 699 && currentSize != "b") {
    console.log("big!")
    currentSize = "b"
    document.getElementById("mobileBreaker1").style.display = "none";
    document.getElementById("mobileBreaker2").style.display = "none";
    document.getElementById("mobileBreaker3").style.display = "none";
    document.getElementById("deskBreaker").style.display = "inline-block";
    document.getElementById("mainLogo").style.fontSize = "92%";
    document.getElementById("img1").height = "64";
    document.getElementById("img2").height = "64";
    document.getElementById("img3").height = "64";
    document.getElementById("icon1").style.padding = "20px";
    document.getElementById("icon2").style.padding = "20px";
    document.getElementById("icon3").style.padding = "20px";
  }
}

resize()

document.getElementsByTagName("BODY")[0].onresize = function() {
  resize()
};