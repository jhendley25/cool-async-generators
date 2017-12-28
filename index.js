const fetch = require("node-fetch")
console.log("cool")
// https://api.icndb.com/jokes/random
let quoteCount = 0
// just change the chuckNorris() in the for await loop to norrisQuotes to use this array instead
const norrisQuotes = [
  fetch("https://api.icndb.com/jokes/random"),
  fetch("https://api.icndb.com/jokes/random"),
  fetch("https://api.icndb.com/jokes/random"),
  fetch("https://api.icndb.com/jokes/random"),
]

async function * chuckNorris() {
  const url = "https://api.icndb.com/jokes/random"
  while(true) {
    const response = await fetch(url);
    const json = await response.json()
    quoteCount++
    yield json.value
  }
}

const getQuotes = async () => {
  for await (const quote of chuckNorris()) {
    const {joke} = quote
    console.log(joke);

    if (quoteCount >= 3) break;
  }
}

getQuotes()
