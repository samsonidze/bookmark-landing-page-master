const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const closeMenu = document.querySelector(".close-menu")
const body = document.body

// Open mobile menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active")
  body.style.overflow = "hidden" // Prevent scrolling when menu is open
})

// Close mobile menu
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
  body.style.overflow = "" // Re-enable scrolling
})

// Close menu when clicking on a link
const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    body.style.overflow = ""
  })
})

// Slider functionality
const simpleB = document.getElementById("simpleB")
const speedyS = document.getElementById("speedyS")
const easyS = document.getElementById("easyS")
const line = document.querySelector(".line")
const oneClick = document.querySelector(".oneClick")
const intelligent = document.querySelector(".intelligent")
const share = document.querySelector(".share")

simpleB.addEventListener("click", () => {
  line.style.width = "30%"
  line.style.left = "0"
  oneClick.style.display = "flex"
  oneClick.style.opacity = "1"
  intelligent.style.display = "none"
  share.style.display = "none"
})

speedyS.addEventListener("click", () => {
  line.style.width = "35%"
  line.style.left = "33.33%"
  intelligent.style.display = "flex"
  intelligent.style.opacity = "1"
  oneClick.style.display = "none"
  share.style.display = "none"
})

easyS.addEventListener("click", () => {
  line.style.width = "30%"
  line.style.left = "66.66%"
  share.style.display = "flex"
  share.style.opacity = "1"
  oneClick.style.display = "none"
  intelligent.style.display = "none"
})

// FAQ functionality
const firstDiv = document.getElementById("firstDiv")
const secondDiv = document.getElementById("secondDiv")
const thirdDiv = document.getElementById("thirdDiv")
const forthDiv = document.getElementById("forthDiv")

const firstP = document.getElementById("firstP")
const secondP = document.getElementById("secondP")
const thirdP = document.getElementById("thirdP")
const forthP = document.getElementById("forthP")

firstDiv.addEventListener("click", () => {
  if (firstP.style.maxHeight === "500px") {
    firstP.style.maxHeight = "0"
    firstP.style.opacity = "0"
  } else {
    firstP.style.maxHeight = "500px"
    firstP.style.opacity = "1"
  }
})

secondDiv.addEventListener("click", () => {
  if (secondP.style.maxHeight === "500px") {
    secondP.style.maxHeight = "0"
    secondP.style.opacity = "0"
  } else {
    secondP.style.maxHeight = "500px"
    secondP.style.opacity = "1"
  }
})

thirdDiv.addEventListener("click", () => {
  if (thirdP.style.maxHeight === "500px") {
    thirdP.style.maxHeight = "0"
    thirdP.style.opacity = "0"
  } else {
    thirdP.style.maxHeight = "500px"
    thirdP.style.opacity = "1"
  }
})

forthDiv.addEventListener("click", () => {
  if (forthP.style.maxHeight === "500px") {
    forthP.style.maxHeight = "0"
    forthP.style.opacity = "0"
  } else {
    forthP.style.maxHeight = "500px"
    forthP.style.opacity = "1"
  }
})
