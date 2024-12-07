function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // this will work correctly
console.log(foo(10, 0)); // this will cause an error