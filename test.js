const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
const reversed = names.reverse()

console.log('names', names) // reverse мутировал исходный массив и мы
// получили: [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
console.log('reversedArr', reversed) //[ 'Sasha', 'Ivan', 'Bob', 'Alex' ]

console.log(names === reversed);