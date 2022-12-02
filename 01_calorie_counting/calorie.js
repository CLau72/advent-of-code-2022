const fs = require('fs')

const input = fs.readFileSync("./input.txt", 'utf-8').toString()

// Split by empty line
let array = input.split('\n\n')

// Split by line break
for ( let i = 0; i < array.length; i++) {
    array[i] = array[i].split('\n');
}

// convert the stings to integers for each array
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        array[i][j] = parseInt(array[i][j])
    }
}

for (let i = 0; i < array.length; i++){
    array[i] = array[i].reduce((acc,cur) => acc + cur,0)
}

console.log(Math.max(...array))