// 1. Write a JavaScript function that returns the Fibonacci series up to a certain number. Input: 8
// Output: [0, 1, 1, 2, 3, 5]
// Input: 610
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
function fib(n){
    if(typeof n === "number" && n >=0 && Array.prototype.slice.call(arguments).length===1) {
        const result = [0,1];
        if(n===0){
            const popped  = result.pop();
            console.log(result);
        }else {
            while (arrayResult(result) < n) {
                result.push(arrayResult(result))
                if (arrayResult(result) > n) {
                    console.log("Unable to show Fibonacci series");
                    return;
                }
            }
            console.log(result);
        }
    }else{
        console.log("Enter one positive number");
    }
}

function arrayResult(array){
    return array[array.length-1]+array[array.length-2]
}

fib(10,3)