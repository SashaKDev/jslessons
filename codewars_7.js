const array = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];

function removeEveryOther(arr){

    const newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(removeEveryOther(array));