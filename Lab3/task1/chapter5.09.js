// Sum the properties
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

// Count properties
function count(obj) {
  return Object.keys(obj).length;
}
