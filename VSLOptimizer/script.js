document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("modal").style.width = "100%";
  document.getElementById("modal").style.color = "#ffffff";
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("modal").style.width = "0";
  document.getElementById("modal").style.overflow = "hidden";
  document.getElementById("modal").style.color = "transparent";
});


