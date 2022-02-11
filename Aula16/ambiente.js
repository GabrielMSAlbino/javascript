let num = [8, 9, 2, 3]

num[4] = 4
num.push(7)

console.log(num)
console.log(num[3])
console.log(num.length)
console.log(num.sort())

let pos = num.indexOf(10)

if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log (`O valor está na posição ${pos}`)
}