console.log("hello");
let name="purushottam pradhan";
let arry=[1,2,3,4,'dddd'];
console.log(name)
console.log(arry)
console.log(name.split('u'));
console.log(Date())
let obj={
    name:'purushottam',
    class:'mca',
    'roll no':501402118006
}
console.log(obj)
for(let i=0;i<=arry.length;i++){
    console.log(arry[i])
}
arry.forEach(element => {
    console.log(element)
});
for(key in obj){
    console.log(`the ${key} is ${obj[key]}`)
}
// let element=document.createElement('input')
// element.type='submit'
// element.value='new'
// // element.innerText='hello'
// let abc=document.querySelector('.myclass')

// let abc=document.getSelection('body')
// console.log(abc)

