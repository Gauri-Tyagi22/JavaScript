function greet(){
    console.log("g");
    
}
//greet()
function add(num1,num2){
    return num1+num2
}
//console.log(add(5,6))
//rest operator
function calculate(...num1){
    return num1;
}
//
//console.log(calculate(200,500,700))
const user={
    name:"gauri",
    price:100

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} ans price is ${anyobject.price}`)
}
handleobject(user)
