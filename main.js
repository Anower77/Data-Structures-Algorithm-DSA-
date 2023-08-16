// Tiem complexity
// 1st way
function sumOfAll(n){
    let total = 0
    for(let i = 1; i <= n; i++){
        total += i
    }
    return total
}


// 2nd way
function sumOfAll2(n){
    return n * (n + 1) / 2
}

let time1 = performance.now()
console.log(sumOfAll2(5))
let time2 = performance.now()


