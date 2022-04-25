const value = document.querySelector("#number");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const classes = button.classList;
    if (classes.contains("increase")) {
      value.textContent = parseInt(value.textContent) + 1;
      if (parseInt(value.textContent) > 0) {
        value.style.color = "green";
      }
    } else if (classes.contains("decrease")) {
      value.textContent = parseInt(value.textContent) - 1;
      if (parseInt(value.textContent) < 0) {
        value.style.color = "red";
      }
    } else if (classes.contains("reset")) {
      console.log(value.textContent);
      value.textContent = "0";
      value.style.color = "black";
    }
  });
});
