//Initial array of numbers
const numList = [0, 1, 4, 5]

function apSumList() {
    let sum = numList[0];
    for (let value = 0; value < numList.length; value++) {
        console.log(sum);
        sum = sum + numList[value];
    }
    console.log(
        '\nWhen the first item in the array is ',
        numList[0],
        '\n\nAP Code Sum: ',
        numList[0], '+',
        numList[0], '+',
        numList[1], '+',
        numList[2], '+',
        numList[3], '=',
        sum)  
};

apSumList()


function realSumList() {
    let sum = 0
    for (let value = 0; value < numList.length; value++) {
        sum = sum + numList[value];
    } 
    console.log(
        '\nWhen the first item in the array is ',
        numList[0],
        '\n\nAP Code Sum: ',
        numList[0], '+',
        numList[1], '+',
        numList[2], '+',
        numList[3], '=',
        sum)
};

realSumList()
