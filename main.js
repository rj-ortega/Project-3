
// When user clicks first button, show second part
document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("joke-part1").classList.add("hide");
  document.getElementById("button1").classList.add("hide");
  document.getElementById("button2").classList.remove("hide");
  document.getElementById("joke-part2").classList.remove("hide");
});

document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("joke-part3").classList.remove("hide");
  document.getElementById("joke-part2").classList.add("hide");
  document.getElementById("button2").classList.add("hide");
});
