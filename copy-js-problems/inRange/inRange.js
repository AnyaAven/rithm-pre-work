
function inRange(num, start, end = 0) {

  if (start > end) {
    [start, end] = [end, start];
  }

  return num > start && num < end;
}

export { inRange };
