

// let promise = new Promise((resolve,reject)=>{
//     resolve("A")
// })
// console.log("me first");
// promise.then((result)=>{console.log("me second")})
// console.log("me third");

//microtask que are part of the promise has more priority than the cb queue.

// let pr = new Promise((res,rej)=>{
//     res("A")
// })
// console.log("me first");
// setTimeout(()=>{
//     console.log("time out");
// },0);
// pr.then((result)=>{console.log(result)})
// console.log("me third");

// let promiseA = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("A")
//     },0)
// })

// let promiseB = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          resolve("B")
//     })
// })
// console.log("me first");
// promiseB.then((result)=>{console.log(result);})
// console.log("Before B");
// promiseA.then((result)=>{console.log(result);})
// console.log("me last");

//to make above make synchronous manner we will use below one

// console.log("me first");
// promiseA.then((data)=>{
//     console.log(data)
//     console.log("Before B");
// })
// promiseB.then((data)=>{
//     console.log(data);
//     console.log("me Last");
// })

// function printLetter(letter){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(letter)
//         },2000)
//     })
// }
// function printAlphabet(){
//     printLetter("A")
//     .then((result)=>{
//         console.log(result);
//         console.log("before b GETS resolved");
//         return printLetter("B")
//     })
//     .then((result)=>{
//         console.log(result);
//         console.log("before c gets resolved");
//         return printLetter("C")
//     })
//     .then((result)=>{
//          console.log(result);
//     })
// }
// printAlphabet()

//--------async and await:synctatic sugar" (simpler syntax to write promises)-make ur code very readable.

//instead of .then we will use async and await:

// function printLetter(letter){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log(letter);
//             resolve(letter)
//         })
//     })
// }
    
// async function printAlphabet(){
//     await printLetter("A")
//     console.log("before b gets resolved");
//     await printLetter("B")
//     console.log("before c gets resolved");
//     await printLetter("c")
// }
// printAlphabet()

// function printLetter(letter){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log(letter);//here without using console we can call resolve.
//             resolve(letter)
//         })
//     })
// }
    
// async function printAlphabet(){
//    let val1 =  await printLetter("A")
//    console.log(val1);
//     console.log("before b gets resolved");
//     let val2 = await printLetter("B")
//     console.log(val2);
//     console.log("before c gets resolved");
//     let val3 = await printLetter("c")
//     console.log(val3);
// }
// printAlphabet()
//for order "me first,me second,me third"

// console.log("me first");
// let pr = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("me second")
//       },1000);
// })
// pr.then((data)=>{console.log(data)
//     console.log("me third");
// })

//by using aync and await:order should be :first,second,third

// let pr = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("me second")
//     }, 1000);
// })
// async function cb(){
//     console.log("me first");
//     // console.log(await pr);
//     //or:
//     let val = await pr
//     console.log(val);
//     console.log("me third");
// }
// cb()

//prototype and inherit:

//------prototype:

// let obj = {}
// console.log(obj);

// let animal = {
//     eats:true,
//     moves:true,
//     walk:function (){
//         console.log("we walk");
//     }
// }

// let rabbit = {
//     hastail:"Node",

// }
// let mouse = {
//     jumps:"cage",
// }
// rabbit.__proto__ = animal //rabbit inherits animal object
// mouse.__proto__animal //mouse inherits animal object
// console.log(rabbit.eats);
// rabbit.walk() // this is for function inside the object so it will get. 
// rabbit.eats()//the given key is not a function so it will not get.
// console.log(rabbit.moves); // inherited property(means links with parent object )
// console.log(rabbit.hastail); //own property

//hasownproperty return boolean values:this will tell the property in inthe own object or not.
// console.log(rabbit.hasOwnProperty("moves"));
// console.log(rabbit.hasOwnProperty("hastail"));

// let obj = Object.keys(rabbit)
// console.log(obj);

//object.keys dont give me inherited keys.

//for in loop . -----provides both own key and inherited key.

// for(let key in rabbit){
//     console.log(key);
// }

//in other way:
// for (let key in rabbit){
//     if(rabbit.hasOwnProperty(key)){
//          console.log(key,"own");
//     }
//     else{
//         console.log(key,"inherited");
//     }
// }

//-----onstructor functions:
//they are just like regular function ..but there 2 conventions.
//1.they are named with a capital first letter.
//2. they should be called only with the "new" keyword.

//constructor function returns an object

// function User(name){
//     this.firstname = name
//     this.isAdmin = true
// }
// let result = new User("sainath")
// console.log(result);


let animal = {
    eats:true,
    moves:true,
    walk:function(){
        console.log("i walk");
    }
}
function Rabbit(name){
    this.petName = name
    this.jumps = true
}
Rabbit.prototype = animal //this will access inherited objects

let rabbit = new Rabbit ("tommy")
console.log(rabbit);

 

