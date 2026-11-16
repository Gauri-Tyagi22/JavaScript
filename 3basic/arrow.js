const user={
    username:"gauri",
    price:100,
    welcome:function(){
        console.log(`${this.username},welcome to website`);
        
    }
}
// user.welcome()
// user.username="tyagi"
// user.welcome()
//console.log(this)
// function cold(){
//     let username="gauri"
//     console.log(this.username)
// }
// cold()

// const cold=function(){
//     let username="gauri"
//    console.log(this.username)
// }
// cold()
const cold=()=>{
    let username="gauri"
   console.log(this)
}
//cold()
// let add=(a,b)=>{
// return a+b
// }
let add=(a,b)=>  a+b

console.log(add(4,5))