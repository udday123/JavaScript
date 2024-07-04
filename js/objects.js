// // object singleton
// // Object.create

// // object literal

// const s1=Symbol("k1")
// const a={                //key : value
//     [s1] : "OP",
//     name:"udday",
//     age:"18",
//     loginDays:["Monday","wednesday"]
//      
// }
// console.log(a.name)
// console.log(a["age"])
// console.log(a[s1]);
// console.log(typeof a[s1]);
// console.log(typeof s1);

// Object.freeze(a) //from now no changes will be propogate

// console.log(a);



//++++++++++++++++++++++++++++++++++++++++++++++++++++
// singleton
// const a=new Object()
// // console.log(a)
// const data1=new Object()
// data1.id="254"
// data1.name="Udday"
// data1.age="18"
// // console.log(data1)

// const data2=new Object()
// data2.base={
//     base5:"level1"
// }
// console.log(data2.base.base5)

// const a={                //key : value
    
//     name:"udday",
//     age:"18",
//     loginDays:["Monday","wednesday"],
//     password:
//      {
//         passwordtypes:{
//         type1:"alphabet",
//         type2:"numeric",
//         type3:"symbolic"
//         }
//     }
// }
// console.log(a.password.passwordtypes.type1)

// const users=[
//     {
//         id:0,
//         email:"udday@users",
//     },
//     {
//         id:1,
//         email:"udday@users",
//     },
//     {
//         id:1,
//         email:"udday@users",
//     },
//     {
//         id:1,
//         email:"udday@users",
//     }
// ]
// console.log(users[1].id)

// console.log(Object.keys(users))
// console.log(Object.values(users))
// console.log(Object.entries(users))

//can be done with arrays

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const info={
    name:"udday",
    age:19,
}
// console.log(info["name"])

const{name}=info      //another syntax
// console.log(name)

const{name:one}=info   //change the name to something else called de-structure                         
console.log(name)

{
    //this is json
    "name":"udday",
    //syntax
}