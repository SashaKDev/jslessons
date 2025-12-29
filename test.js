// function evenOrOdd(number) {
//     return number % 2 !== 0 ? 'even' : 'odd';
// }

// function multiply(a, b){
//     return a * b
// }

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms)
//     })
// }
//
// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// const ob = {
//     // id: 1,
//     // name: 'John',
// }
//
// console.log(ob.id + " " + ob.name);
// const date1 = new Date();
// const date2 = new Date();
// console.log(date1 + " " + date2);

// const arr = [1, 2, 3, 3, 4, 'hello'];
// const set = new Set(arr);
// console.log(set);

//globalLE {} --> null

// startEngine()
//
// let car = 'bmw' //globalLE {car: 'bmw'} --> null
//
// function startEngine () {
//     //startEngineLE {} --> globalLE
//     const car = 'kia' // startEngineLE {car: 'kia'} --> globalLE
//     console.log(`Start ${car}`)
// }
//
// startEngine() //globalLE {startEngine: function} --> null
//
// car = 'audi' //globalLE {startEngine: function, car: 'audi'} --> null
//
// startEngine()

// const OuterFunc = () => {
//     let count = 0;
//     return () => {console.log(count++)}
// }
//
// const counter1 = OuterFunc();
//
// counter1();
// counter1();
// counter1();

// function outer() {
//     let message = "Hello!";
//     return function inner() {
//         console.log(message);
//     };
// }
//
// function executor(fn) {
//     fn();
// }
//
// const closureFunc = outer();
// executor(closureFunc);

// const sqr = (num) => {
//     console.log('call');
//     return num * num;
// }
//
// const sum = (a, b) => {
//     console.log('call');
//     return a + b;
// }
//
//
//
// const memoize = (fn) => {
//     const cash = {};
//     return (...args) => {
//
//         if (cash[args.toString()]){
//             return cash[args.toString()];
//         } else {
//             return cash[args.toString()] = fn(...args);
//
//         }
//     }
// }
//
// const fastSqr = memoize(sqr)
// const fastSum = memoize(sum)
//
// console.log(fastSum(1, 2));
// console.log(fastSum(1, 2));
//
// console.log(fastSqr(5));
// console.log(fastSqr(5));
// console.log(fastSqr(6));
// console.log(fastSqr(7));
// console.log(fastSqr(6));
// ---------------------------------------------------
// function doubleLater(x, cb) {
//     setTimeout(() => {
//         cb(x * 2);
//     }, 500);
// }
//
// function doubleLaterAsync(x) {
//     return new Promise((resolve) => {
//         doubleLater(x, (result) => {
//             resolve(result);
//         });
//     })
// }
//
// const result = await doubleLaterAsync(5);
// console.log(result); // 10
// -----------------------------------------------------
//
// function addLater(a, b, cb) {
//     setTimeout(() => {
//         cb(a + b);
//     }, 500);
// }
//
// function addLaterAsync(a, b) {
//     return new Promise(resolve => {
//         addLater(a, b, (result) => {
//             resolve(result);
//         });
//     })
// }
//
// const sum = await addLaterAsync(2, 3);
// console.log(sum); // ?
// ---------------------------------------------------------

function addLater(a, b, cb) {
    setTimeout(() => cb(a + b), 300);
}

function multiplyLater(a, b, cb) {
    setTimeout(() => cb(a * b), 300);
}

function addLaterAsync(a, b) {
    return new Promise(resolve => {
        addLater(a, b, (sum) => {
            resolve(sum)
        });
    })
}

function multiplyLaterAsync(a, b) {
    return new Promise(resolve => {
        multiplyLater(a, b, (mul) => {
            resolve(mul)
        })
    })
}

const sum = await addLaterAsync(2, 3);
const result = await multiplyLaterAsync(sum, 4);
console.log(result); // ?


