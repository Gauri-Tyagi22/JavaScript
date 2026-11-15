const arr=[1,2,3]
//arr.push(5)
//arr.pop(3)
//arr.pop(8)
//arr.unshift(0)
//arr.shift()
const mya1=arr.slice(1,2);
const mya2=arr.splice(1,2);
console.log(mya1);
console.log(mya2);
//slice not inculde last index and splice include last index and also splice chnage original array
const arr1=[1,2,3,4]
const arr2=[5,6,7]
const arr3=[...arr1,...arr2]
console.log(arr3);


