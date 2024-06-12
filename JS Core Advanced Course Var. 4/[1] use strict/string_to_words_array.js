'use strict'

generateWords("qwert 00sdfd .dfd,   r!")

function generateWords(str) {
  let wordsArray = str.split(' ');

  wordsArray = wordsArray.filter(element => element !== '');
  wordsArray = wordsArray.map(element => {
    if ((element[0].toLowerCase() == element[0].toUpperCase()) && !('0' <= element[0] && element[0] <= '9')) {
      element = element.slice(1);
    }
    if ((element[element.length - 1].toLowerCase() == element[element.length - 1].toUpperCase()) && !('0' <= element[0] && element[0] <= '9')) {
      element = element.slice(0, -1);
    }
    return element;
  })

  return wordsArray;
}