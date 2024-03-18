
function padEnd(str, num, phrase = " ") {

  if(str.length > num) return str;

  for(let i = 0; i < num; i++){
    str += phrase;

    if(str.length > num){

      return str.slice(0, num);
    }
  }
}

export { padEnd };
