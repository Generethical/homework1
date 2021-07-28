// 3. Write a JavaScript function to create a case-insensitive search
// Example :
//     console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
// "Matched"
// console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
// "Matched"
// console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess')); "Not Matched"

function caseInsensitiveSearch(word,findWord){
    return (word.toLowerCase().split(" ").includes(findWord.toLowerCase())) ? "Matched" : "Not Matched"
}

console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'));
