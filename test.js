// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const reversed = [...names];
//
// console.log('names', names) // reverse мутировал исходный массив и мы
// // получили: [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
// console.log('reversedArr', reversed) //[ 'Sasha', 'Ivan', 'Bob', 'Alex' ]

// console.log(names === reversed);
//----------------------------------------------------------------------
//reverse phone number

// const number = '1145286';
//
// const numberArr = number.split('');
//
// const reversedNumberArr = numberArr.reverse();
//
// const reversedNumber = reversedNumberArr.join('');
//
// console.log(reversedNumber);
//----------------------------------------------------------------------
//concat method

const arr = [1, 2, 3];
const arr2 = [[4,5], [6,7]];
const arr3 = [[[8,9]]]

const result = arr.concat(arr2, arr3).flat(Infinity);

console.log(result);