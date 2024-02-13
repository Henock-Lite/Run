const black = document.querySelector(".black");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
window.addEventListener("mousemove", (e) => {
  black.style.top = e.pageY + "px";
  black.style.left = e.pageX + "px";
});
window.addEventListener("mousemove", (e) => {
  green.style.top = e.pageY + "px";
  green.style.left = e.pageX + "px";
});
window.addEventListener("mousemove", (e) => {
  orange.style.top = e.pageY + "px";
  orange.style.left = e.pageX + "px";
});
