// //synchronous programming
// console.log("starting...")
// console.log("working...")
// console.log("ending...")
// //asynchronous programming

// console.log("starting...")
// setTimeout(() => console.log("working..."), 5000)
// console.log("ending...")

//Promise
function doSomething(hasResource){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> (hasResource?resolve('done'):reject('fail')),3000)
    })
}
console.log(doSomething(false))

//not handle promise
// console.log("starting...")
// const workStatus = doSomething(false)
// console.log(workStatus)
// console.log("ending...")

//handle promise -2 ways: 1. then().catch(), 2.async-await

//1.
//console.log('starting...')

doSomething(true).then((result)=> {
    console.log("working...")
    console.log(`work status= ${result}`)
    console.log("ending...")
})
.catch((error) => {
    console.log(error);
})

//2. async-await
async function working2(){
    console.log("starting...")
    try{
    const workStatus = await doSomething(true)
    console.log(workStatus)
    console.log("ending...")
} catch(error){
    console.log(error)
    }
}
working2()