let temperature = [-2, 4, 45, "error", -6, -8, 43]

function getHigherAndLower(arr){
    // make a higher variable
    let higher = arr[0]
    
    // make a lower variable
    let lower = arr[0]

    // iterate the whole Array
    for(let i = 0; i < arr.length; i++){
    
    // let's check is there has any error
    if(typeof arr[i] !== "number") continue 
    console.log(typeof arr[i])


    // if higher variable has smaller number than our current number than value will be our current element
    if(higher < arr[i]){
        higher = arr[i]
    }
    
    // if lower variable has bigger number than our current number than value will be our current element
    if(lower > arr[i]){
        lower = arr[i]
    }
}
    
    
    // return our higher variable and lower variable
    return higher - lower

}

// getHigherAndLower([3, 5, -9])
// getHigherAndLower(temperature)


console.log(getHigherAndLower(temperature))