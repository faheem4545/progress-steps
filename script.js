// Description: This is the script file for the progress bar
const progress = document.getElementById("progress");
// console.log(progress);
const prev = document.getElementById("prev");
// console.log(prev);
const next = document.getElementById("next");
// console.log(next);
const circles = document.querySelectorAll(".circle");
// console.log(circles);

// console.log(circles.length);
let currentActive = 1;
// console.log(currentActive);
next.addEventListener("click", () => {
  // console.log("next clicked");
  currentActive++;

  // console.log(currentActive);
  if (currentActive > circles.length) {
    // console.log("currentActive is greater than circles.length");
    currentActive = circles.length;
  }
  // console.log(currentActive, circles.length);
  update();
  // console.log("next clicked");
});
// console.log(currentActive);
prev.addEventListener("click", () => {
  // console.log("prev clicked");
  currentActive--;
  // console.log(currentActive);
  if (currentActive < 1) {
    // console.log("currentActive is less than 1");
    currentActive = 1;
    // console.log(currentActive);
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  // setting the width of the progress bar
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  // seeting the button active or disabled
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
