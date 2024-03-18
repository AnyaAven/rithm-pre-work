
function extractFullName(people) {
  return people.map(person => person.first + " " + person.last);
}

export { extractFullName };
