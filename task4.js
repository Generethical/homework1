// 4. Write a JavaScript function to get a copy
// of the object where the keys have become the values and the values the keys.

function swapElements(object){
    return Object.assign({}, ...Object.entries(object).map(([a,b]) => ({ [b]: a })))
}

console.log(swapElements({A : 1, B : 2, C : 3, D : 4}));