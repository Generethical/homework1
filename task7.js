//7. Write a JavaScript function to count the occurrence of a substring in a string.
function findCount(word,text){
    return word.split(text).length - 1;
}

console.log(findCount('foobarfoobarfoo foobarfo','foo'))