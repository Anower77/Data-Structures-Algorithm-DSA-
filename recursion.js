function countDown(n){
    // normal method
    // for(let i = n; i > 0; i--){
    //     console.log(i)
    // }
    // Recursin methods
    console.log(n)
    n-- 
    if(n > 0) {
        countDown(n)
    }
}
// countDown(10)


//Another example
function sumOfNumber(n){
    let sum = 0
    for(let i = n; i >= 0; i--){
        sum += i
    }
    return sum
}

// console.log(sumOfNumber(10))

//Recursion 
function sumOfNumberRe(n){
    if(n < 0)return 0
    

    return n + sumOfNumberRe(n - 1)
}

console.log(sumOfNumberRe(10))

/*
Operation
============
10 + 9
19 + 8
27 + 7
34 + 6
40 + 5
45 + 4
49 + 3
52 + 2
54 + 1
55 + 0

finel result = 55
*/





