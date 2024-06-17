async function fetchAndProcessData() {
  try {
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);
    return response;
  } catch(error) {
    return error.name;
  }
}

fetchAndProcessData().then(console.log)