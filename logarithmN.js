function logarithmN(n){
    while(n > 2){
        console.log(n)
        n /= 2
    }
    console.log("Done")
}
// logarithmN(8)


function anotherLogN(n){
    if(n <= 1){
        console.log("Doen")
        return
    }
    console.log(n)
    anotherLogN(n/2)
}
// anotherLogN(8)