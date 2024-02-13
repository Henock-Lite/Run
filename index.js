const black = document.querySelector(".black");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");

window.addEventListener("mousemove", (e) => {
  const top = e.pageY + "px";
  const left = e.pageX + "px";

  black.style.top = top;
  black.style.left = left;

  green.style.top = top;
  green.style.left = left;

  orange.style.top = top;
  orange.style.left = left;
});
