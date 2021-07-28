//10. Write a function that returns Promise, which is resolved after 6 seconds
const func = function (){
    return new Promise(resolve => setTimeout(()=>{
        resolve("to you")
    },6000))
}
func().then(value=> {
    console.log(`Hello ${value}`)
})