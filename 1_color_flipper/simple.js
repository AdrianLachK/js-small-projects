const colorArray = [
  "red",
  "green",
  "blue",
  "brown",
  "beige",
  "antiquewhite",
  "bisque",
  "darkkhaki",
];

const btn = document.querySelector("#btn");
const colorText = document.querySelector(".color");

btn.addEventListener("click", function () {
  let color = colorArray[Math.floor(Math.random() * colorArray.length)];
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});
