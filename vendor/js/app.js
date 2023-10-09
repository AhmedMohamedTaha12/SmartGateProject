let navbar = document.querySelector(".navbar");
let herosection = document.querySelector(".herosection");
let newssection = document.querySelector(".newssection");
let servicessection = document.querySelector(".servicessection");
let dividersection = document.querySelector(".dividersection");
let sectors = document.querySelector(".sectors");
let meetings = document.querySelector(".meetings");
let parteners = document.querySelector(".parteners");
let conection = document.querySelector(".conection");
let footer = document.querySelector(".footer");

window.addEventListener("scroll", function () {
  var x = window.scrollY;
  console.log(x);

  if (x >= 700) {
    servicessection.classList.add(
      "animationn",
      "animate__animated",
      "animate__backInLeft"
    );
  }
  if (x >= 880) {
    dividersection.classList.add(
      "animationn",
      "animate__animated",
      "animate__backInRight"
    );
  }
  if (x >= 1280) {
    sectors.classList.add(
      "animationn",
      "animate__animated",
      "animate__backInLeft"
    );
  }
  if (x >= 1850) {
    meetings.classList.add(
      "animationn",
      "animate__animated",
      "animate__backInRight"
    );
  }
  if (x >= 2555) {
    parteners.classList.add(
      "animationn",
      "animate__animated",
      "animate__backInUp"
    );
  }
});
