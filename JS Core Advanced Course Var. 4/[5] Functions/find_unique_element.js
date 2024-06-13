function findUnique(array) {
  let unique = array.filter((element, index, array) => array.indexOf(element) == array.lastIndexOf(element))[0]
  if ((unique === undefined) || (unique === null)) {
    return 'There is no unique elements'
  } else {
    return unique
  }
}