const a=[0,1,2,3,4,5]
const b=["apple","pea","oragne"]
const arr=new Array(0,1,2,3,4)
console.log(a)
console.log(b)
console.log(arr);
// a.fill(0);
// console.log(a)
// const x=Array(7);
// x.fill(0);
// console.log(x)
console.log(a.includes(9));  //check for thhe value
const c=a.join("-->")//converts into a string 
console.log(c);

let str = "hello,world,foo,bar";
str = str.split(",")//.join(""); // Output: "helloworldfoobar"
console.log(str);

// a=a.slice(0,4);
// console.log(a);

const myn2 = a.splice(1, 3)
console.log("C ", a);//works on constant as well
console.log(myn2);