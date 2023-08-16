function sumOfArraySlow(arr){
    if(arr.length === 0) return 0
    let rest = arr.slice(1)

    return arr[0] + sumOfArraySlow(rest)
}



// time = Big O(n*n) = n^2
// space = Big O(n)

// Another
function sumOfArrayFast(arr){
    return helperSum(arr, 0)
}

function helperSum(arr, index){
    if(arr.length === index) return 0

    return arr[index] + helperSum(arr, index + 1)

}               

// time = bigO(n)
// space = bigO(n)

let input = new Array(9000).fill(1)


let now = Date.now()
console.log(sumOfArraySlow(input))
let finish = Date.now()
console.log(`time elapsed for slowFunctionSlow ${finish - now} ms`)


let start = Date.now()
console.log(sumOfArrayFast(input))
let end = Date.now()
console.log(`time elapsed for slowFunctionFast ${end - start} ms`)