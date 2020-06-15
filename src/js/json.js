const jsonstring = `
  {
    "one": 1,
    "two": "this is two",
    "three": true,
    "four": "and there's another string",
    "five": 29301.23
  } 
`

const json = JSON.parse(jsonstring)
console.log(json)
console.log(json.four)