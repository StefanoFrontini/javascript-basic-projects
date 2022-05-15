let counter = 0;
const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    value.textContent = counter;
    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    // if (btn.innerText === "DECREASE") {
    //   counter--;
    //   value.textContent = counter;
    //   colorNumber();
    // } else if (btn.innerText === "INCREASE") {
    //   counter++;
    //   value.textContent = counter;
    //   colorNumber();
    // } else {
    //   counter = 0;
    //   value.textContent = counter;
    //   colorNumber();
    // }
  });
});

// function colorNumber() {
//   if (counter > 0) {
//     value.style.color = "green";
//   } else if (counter < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// }
