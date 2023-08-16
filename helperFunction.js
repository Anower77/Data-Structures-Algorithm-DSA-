// statement 
// find the odd number and push empty array

function findOddNumber(arr){

    let result = []
    function helper(input){
        if(input.length === 0) return

        if(input[0] % 2 !== 0){
            result.push(input[0])
        }

        helper(input.slice(1))
    }

    helper(arr)

    return result //if someone say find length just add (result.length)
}

console.log(findOddNumber([2,3,56,8, 3, 6, 8, 5]))