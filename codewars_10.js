const array = null;

function countPositivesSumNegatives(input) {
    let sum = 0;
    let count = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        input.forEach(el => {
            if (el > 0) {
                count++;
            } else if (el < 0) {
                sum += el;
            }
        })
        return [count, sum];
    }
}

console.log(countPositivesSumNegatives(array));

console.log('Checking line...')