// setTimeout(() => {
//     console.log("this is the first message");
//   }, 5000);
//   setTimeout(() => {
//     console.log("this is the second message");
//   }, 3000);
//   setTimeout(() => {
//     console.log("this is the third message");
//   }, 1000);


//   promises

// let mypromise= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hey there");
//     },5000);
//     // resolve("yess");

//     reject(new Error("there is an error"))
// })

// // mypromise.then((value)=>{console.log(value)});
// // mypromise.catch((error)=>{console.log("received an error")});


// // or we can catch error using then also
// mypromise.then((value)=>{console.log(value)}, (error)=> {console.log("there is error")});


 let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am 1st timeout");
    }, 50000);
    resolve();
 })

 let p3= p1.then(()=>{
    let p2= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I am 2nd timeout");
        }, 10000);
        resolve("I am resolved");
     })
     return p2;
    
 })

 p3.then((value)=> console.log(value));