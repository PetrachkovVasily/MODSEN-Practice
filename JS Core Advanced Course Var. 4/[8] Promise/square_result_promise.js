let num = 2;

function returnPromise(result) {
  return  new Promise((resolve, reject) => {
    console.log(result)
    setTimeout(() => resolve(result * result), 3000);
  });
}

let promise = new Promise(function(resolve, reject) {
  resolve(num)
}).then(function(result) {
  return returnPromise(result);
}).then(function(result) {
  return returnPromise(result);
}).then(function(result) {
  return returnPromise(result);
}).then(function(result) {
  console.log(result)
}
)