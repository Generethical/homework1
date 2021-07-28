// 6. Write a JavaScript function to uncamelize a string
// Example :
//     console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"
function uncamelize(helloWorld, param2) {
    const [text,delimeter=' '] = Array.prototype.slice.call(arguments);
    const array = text.split('');
     return array.slice(0, getUpperCaseIndex(array)).join("").toLowerCase().concat(delimeter)
     .concat((array.slice(getUpperCaseIndex(array), array.length)).join("").toLowerCase()).toString()

}

function getUpperCaseIndex(array){
    for (let item of array) {
        if(item.toUpperCase()===item){
            return array.indexOf(item)
        }
    }
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
