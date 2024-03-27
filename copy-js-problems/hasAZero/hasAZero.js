
function hasAZero(num) {
  num = num.toString().split("");

  return num.some(v => v === "0");
}

export { hasAZero };
