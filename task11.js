// 11. Write a JavaScript program to run a given array of promises in series.
const p1 = new Promise(resolve => {
    setTimeout(()=>{resolve("Hello")},1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve("World")},5000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('!!!')},10000)
})
Promise.all([p1,p2,p3]).then(value=>{
    console.log(value)
})