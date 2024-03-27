function isWeekend(date) {
  //6 is Sat, 0 is Sun
  return date.getDay() === 6 || date.getDay() === 0;
}

export { isWeekend };
