const map = new Map()
map.set('hobby', 'cycling')

const foods = {
  dinner: 'Curry',
  lunch: 'Sandwich',
  breakfast: 'Eggs'
};

const normalfoods = {}

map.set('foods', foods)

for (const[key, val] of map) {
  console.log(`${key} => ${val}`)
}

console.log(map.size)
console.log(map.get(normalfoods))