for (let i = 0; i < 5; i++) {
  let a = 1;
  const b = 2;
  var c = 3;
}

console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
console.log(c); // 3