function checkValue() {
  try {
    value;
  } catch(referenceError) {
    console.log(referenceError.name)
  }
}

checkValue()