const btn = document.querySelector("#btn");
const colorText = document.querySelector(".color");

btn.addEventListener("click", function () {
  let color = "#";
  for (i = 0; i < 6; i++) {
    color =
      color +
      Math.floor(Math.random() * 16)
        .toString(16)
        .toUpperCase();
  }
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});
