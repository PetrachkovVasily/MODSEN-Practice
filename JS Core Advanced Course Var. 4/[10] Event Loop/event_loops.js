async function returnData(data) {
  if (typeof data === 'string') {
    await Promise.reject(new Error("Error"));
  } else {
    if (!(data % 2)) {
      return await new Promise((resolve, reject) => {
        setTimeout(() => resolve("Even"), 2000)
      });
    } else {
      return await new Promise((resolve, reject) => {
        setTimeout(() => resolve("Odd"), 1000)
      });
    }
  }
  
}

returnData('6').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err.name)
})

returnData(3).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err.name)
})

returnData(4).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err.name)
})