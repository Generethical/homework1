// 9. Write a function that delete null and undefined values from the array.
// The function takes two parameters: array, callback, runs for 5 seconds and then calls a callback function-parameter
// that displays the result of the execution or an error.

    function deleteNullOrUndefined(array,callback){
    setTimeout(()=>{
        return callback(array)
    },5000)


}

deleteNullOrUndefined([3,5,null,100,undefined,46,'hello',undefined,null,17],(array=>{
    const resultArray = array.filter(item => {
        if (typeof item !== "null" || typeof item !== "undefined") {
            return item;
        }
    })
    console.log(resultArray)
}))
