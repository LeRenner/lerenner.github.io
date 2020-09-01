let currentSize = "b"
let number = Math.random();

if (Math.random() >= 0.5) {
  document.getElementById("pp").src = "pp.jpg";
  document.getElementById("pp2").src = "pp.jpg";
}

resize = function() {
  if (window.innerWidth <= 699 && currentSize != "s") {
    currentSize = "s"
    document.getElementById("desktopView").style.display = "none";
    document.getElementById("mobileView").style.display = "block";
    document.getElementById("smallerLogo").style.fontSize = "8px";
    document.getElementById("deskBreaker").style.display = "none";
  }
  if (window.innerWidth > 699 && currentSize != "b") {
    currentSize = "b"
    document.getElementById("mobileView").style.display = "none";
    document.getElementById("smallerLogo").style.fontSize = "78%";
    document.getElementById("desktopView").style.display = "block";
    document.getElementById("deskBreaker").style.display = "block";
  }
}

resize()

document.getElementsByTagName("BODY")[0].onresize = function() {
  resize()
};