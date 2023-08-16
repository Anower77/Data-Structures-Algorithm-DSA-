function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    for(let i = 0; i < arr1.length; i++){
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if(currentIndex === -1){
            return false
        }

        arr2.splice(currentIndex, 1)
    }
    return true
}

console.log(same([2, 3, 6], [36, 9, 4]))//true