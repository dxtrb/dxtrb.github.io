/* Dexter B 11/23/26 */
//global variables

var video = document.getElementById("example");
var videosource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

function burpees(){
  videosource.src = "media/burpees.mp4";
  descriptionSource = "media/burpees-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

function plank(){
  videoSource.src = "media/plank.mp4";
  descriptionSource ="media/plank-descriptions.vtt"
  video.style.display = "block";
  video.load();
}

function mountain(){
  videoSource.src = "media/mc.mp4";
  descriptionSource ="media/mountain-descriptions.vtt"
  video.style.display = "block";
  video.load();
}

function discount(){
  var promo = document.getElementById("special")
  promo.firstChild.nodeValue = "promo Code: D25START"
  promo.style.color = "#f00";
  promo.style.fontsize = "2em"
}

function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");

  if (menu.style.display === "block" && logo.style.display === "none") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}
