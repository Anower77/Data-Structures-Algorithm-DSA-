// space complexity o(1), o(n)

function sumOfArray(arr){
    total = 0
    for(let i = 0; i < arr.length; i++){
        total = arr[i]
    }
    return total
}

// console.log(sumOfArray([25, 25, 50]))



// another example
function sumOfArray(arr){
    newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] *2)
    }
    return newArr
}

console.log(sumOfArray([25, 25, 50]))





