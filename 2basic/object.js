const info={
    Name:"Gauri",
    Age:18,
    Year:"3rd",
     Branch:"CSE",
     Skills:["Java","C++","JavaScript"]
}
//console.log(info.Name);
//console.log(info["Name"]);


//Singleton object
//const tinderUser=new Object()
//tinderUser.id="123abc"
//tinderUser.name="Gauri"
//console.log(tinderUser);
const reg={
    email:"gauri@gmail.com",
    fullname:{
        userfullname:{
            firstname:"gauri",
            lastname:"Tyagi"
        }
    }
}
//console.log(reg.fullname.userfullname.firstname)
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2}
//console.log(obj3);

const course={
name:"gauri",
price:100,
instructor:"gauri"
}
const {instructor:i}=course
console.log(i)

