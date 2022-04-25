let a = 2437;
let b = 875;

function repeat(x, y) {
  if (x > y) {
    x = x - y;
  } else if (y > x) {
    y = y - x;
  } else if (x === y) {
    return x;
  }
  repeat(x, y);
}

console.log(repeat(a, b));
