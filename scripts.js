const simpleB = document.getElementById("simpleB");
const speedyS = document.getElementById("speedyS");
const easyS = document.getElementById("easyS");

const optionsF = document.getElementById("optionsF");
const line = document.querySelector(".line");

simpleB.addEventListener("click", () => {
  line.style.left = "0";
});
speedyS.addEventListener("click", () => {
  line.style.left = "35%";
});
easyS.addEventListener("click", () => {
  line.style.left = "70%";
});
