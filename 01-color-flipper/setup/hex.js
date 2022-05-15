const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    hexColor += hex[random];
  }
  //   const randomColor = `#${hex[Math.floor(Math.random() * hex.length)]}${
  //     hex[Math.floor(Math.random() * hex.length)]
  //   }${hex[Math.floor(Math.random() * hex.length)]}${
  //     hex[Math.floor(Math.random() * hex.length)]
  //   }${hex[Math.floor(Math.random() * hex.length)]}${
  //     hex[Math.floor(Math.random() * hex.length)]
  //   }`;
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
