function pyramid(n){
    let result = "";
    for(let i = 1, j = Math.floor(n / 2); i <= n; i += 2, j--){
        result += ' '.repeat(j) + '*'.repeat(i) + '\n';
    }
    return result;
}

const pyr_5 = pyramid(5);
const pyr_9 = pyramid(9);
const pyr_6 = pyramid(6);

console.log(pyr_5);
console.log(pyr_9);
console.log(pyr_6);