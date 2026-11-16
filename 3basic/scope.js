var c=200
if (true) {
    let a=10
const b=20
var c=30
}
//console.log(a);
//console.log(b);
//console.log(c);
//thats why var is avoiding during programming
let a=200
if (true) {
    let a=10;
   // console.log(a);
    
}
//console.log(a);

//Nested scope
function one(){
    const username="gauri"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()
if(true){
    const username="gauri"
    if(username==="gauri"){
        const website="youtube"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)

//++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++

function add(num){
return num+1
}
add(5)