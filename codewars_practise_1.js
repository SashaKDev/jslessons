const classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
const myPoints = 75;

function betterThanAverage(classPoints, yourPoints) {

    let sum = yourPoints;
    let average = 0;

    for(let i = 0; i < classPoints.length; i++){
        sum += classPoints[i];
    }

    average = sum / (classPoints.length + 1);
    
    return yourPoints > average;
}

console.log(betterThanAverage(classPoints, myPoints));