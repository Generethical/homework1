//5. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function objectToListKeysAndValues(object){
    const array = [];
    for (const [key, value] of Object.entries(object)) {
        array.push([`${key}: ${value}`]);
    }
    return array;
}

console.log(objectToListKeysAndValues({A : 1, B : 2, C : 3, D : 4}))