const myDate =  'Friday May 2, 9am';

function shortenToDate(longDate){
    const splitedDate = longDate.split(' ');  
    let result = "";      
    for (let i = 0; i < 3; i++) {
        result += splitedDate[i] + ' ';
    }
    return result.slice(0, -2);
}

console.log(shortenToDate(myDate));