const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

let randomItem;

btn.addEventListener("click", function () {
  // get random number between 0 - 3 colors
  let random = Math.floor(Math.random() * colors.length);

  while (randomItem === random) {
    random = Math.floor(Math.random() * colors.length);
  }
  randomItem = random;

  color.textContent = colors[randomItem];
  document.body.style.backgroundColor = colors[randomItem];
});
