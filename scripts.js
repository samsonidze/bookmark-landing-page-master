const simpleB = document.getElementById("simpleB");
const speedyS = document.getElementById("speedyS");
const easyS = document.getElementById("easyS");

const optionsF = document.getElementById("optionsF");
const line = document.querySelector(".line");

const oneClick = document.querySelector(".oneClick");
const intelligent = document.querySelector(".intelligent");
const share = document.querySelector(".share");

simpleB.addEventListener("click", () => {
  line.style.left = "0";
  oneClick.style.opacity = "1";
  oneClick.style.display = "flex";

  intelligent.style.opacity = "0";
  intelligent.style.display = "none";
  share.style.opacity = "0";
  share.style.display = "none";
});
speedyS.addEventListener("click", () => {
  line.style.left = "35%";
  oneClick.style.opacity = "0";
  oneClick.style.display = "none";

  intelligent.style.opacity = "1";
  intelligent.style.display = "flex";

  share.style.opacity = "0";
  share.style.display = "none";
});
easyS.addEventListener("click", () => {
  line.style.left = "70%";
  oneClick.style.opacity = "0";
  oneClick.style.display = "none";

  intelligent.style.opacity = "0";
  intelligent.style.display = "none";

  share.style.opacity = "1";
  share.style.display = "flex";
});
