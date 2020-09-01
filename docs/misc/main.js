let currentSize = "b"

resize = function() {
  if (window.innerWidth <= 699 && currentSize != "s") {
    currentSize = "s"
    document.getElementById("desktopHeader").style.display = "none";
    document.getElementById("mobileHeader").style.display = "block";
    document.getElementById("smallerLogo").style.fontSize = "8px";
    document.getElementById("deskBreaker").style.margin = "0";
    document.getElementById("miscFlexbox").style.display = "inline-block";
    document.getElementById("miscFlexbox").style.width = "96%";
    document.getElementById("marginController").style.marginLeft = "12%";
    console.log("aqui")
  }
  if (window.innerWidth > 699 && currentSize != "b") {
    currentSize = "b"
    document.getElementById("desktopHeader").style.display = "inline-block";
    document.getElementById("mobileHeader").style.display = "none";
    document.getElementById("smallerLogo").style.fontSize = "78%";
    document.getElementById("deskBreaker").style.margin = "16px 0";
    document.getElementById("miscFlexbox").style.display = "flex";
    document.getElementById("miscFlexbox").style.width = "960px";
    document.getElementById("marginController").style.marginLeft = "7%";
  }
}

resize()

document.getElementsByTagName("BODY")[0].onresize = function() {
  resize()
};