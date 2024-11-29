
// // let users = [
// //     { name : "oyin", age:"30"},
// //     { name : "tola", age:"15"},
// //     { name : "bola", age:"21"},
// //     { name : "david", age:"18"},
// //   ]
// //   if (users[3].age >=19){
// //     console.log("you re vip!welcome to club quilox");
// //   } else {
// //     console.log("sorry,u re too young to enter");
// //   }
// //   if (users[0].age >= 19 && users[2].age <= 21)
// //     console.log("welcome to the club! Enjoy nd drink responsibly")
  

// // let isonline = "true";

// // switch (isonline){
// //   case "true":
// //   console.log("user is online")
// //   break;
// //   case "false":
// //     console.log("user is not online")
// // }
             



// // step 1: declare the shopping list array
// // let shoppinglist = ["brerad","milk","egg","butter","cheese"];

// // console.log("original shopping list:", shoppinglist);
// // for(let i = 0; i < shoppinglist.length; i++){
// //   console.log(shoppinglist[i] )}
// // shoppinglist[3] = "jam"

// // console.log("updated shoppinglist", shoppinglist)
// // for(let i = 0; i < shoppinglist.length; i++){
// // console.log(shoppinglist[i])
// // }
// // console.log("total number of items", shoppinglist.length);
   


// // function hey(age){
// //   console.log("hey," + age +  " how re u ");
// // }
// // hey(12)
   

// // function hello(age){
// //   console.log("hello ," +  age  + " nice t0 meet u");
// // }
// // hello(10)



// // function multiply(a , b) {
// //   console.log("The multiplication is " + (a*b));
// // }
// // multiply(2,5)

// // let names =["ademide","oyinkansolami","olamide","abiola"];
// // function hello (){}
// // for(let i = 0; i < names.length; i ++){
// // console.log(names[i])}

// // hello




// // let fruit = ["apple","banana","cherry","date","pawpaw"]
// // function showfruits (){
// //     console.log(fruit[0])
// //     console.log(fruit[2])
// //     console.log(fruit[fruit.length - 1])
// // }
// // console.log("apple")

// // showfruits()




// // 





// // function subtraction (a,b){
// //     return a - b
// // }
// // const subtract = (a,b) => a - b;
// // console.log(subtract(10,2));

// // const object = {
// //     displayage: (age) => 'my age is ' + age,
// //     displayname: (name) => 'my name is ' + name,
// //   };
  
// //   const users = {
// //     name: "ade",
// //     age: 22
// //   }







// // let number = ["16","18"]
// // function shownumbers(){
// //     if (number >= 18){
// // console.log(negative)
// //     }
// // }





// // function calculategrade(score){
// // if (score >= 90){//score grater than e
// // return "A"
// // } else if (score >= 80){
// // return "B"
// // }else if (score >= 70){
// // return "C"
// // }else if (score >= 60){
// // return "D"
// // }else {//else return F
// // return fail
// // }
// // }
// // console.log (calculategradelet cus


// // let customers  = ["alice","bob","charlie"];
// // // //push() add an element to the end of an array
// // customers.push("daisy");

// // console.log(customers)
// // // // shift()- removes the first element of an array
// // customers.shift();
// // console.log(customers);
// // // // unshift()- add an element to the front of an array
// // customers.unshift("richard");
// // console.log(customers);
// // // // pop()-remove the last element of an array
// // customers.pop();
// // console.log(customers)
// // // //array.slice-(start, end);
// // let newcustomer = customers.slice(1,4);
// // console.log(newcustomer)


// const isQueueEmpty = (Queue)=> {
//     return Queue.length > 2?
//     "the queue contains element"
//    : "the queue is empty"
// }
//  const Queue = ["ade","jamiu","oyin","ola","ayomide"]

//  console.log(isQueueEmpty(Queue))


// let color = {
//     color1: 'Red',
//     color2: 'Pink',
//     color3: 'white',
    
// }

// const { color1, color2, color3} = color;
// console.log(color1)
// console.log(color2)
// console.log(color3)

// const phone = {
//     brand : "android",
//     model : "samsung",
//     price : "250",
//     getDetails: function (){
//        const innerFunction= () => {
//        this.brand+ ' '+ this.model+ ' '+ this.price
//         }
//     innerFunction
//     }
// };


//  console.log( phone.getDetails());



const library ={
    name: 'cuteabiola library',
    location: 'lekki',
    book1:{
      title: "A midsummer night dream",
      author: "williams shakespeare",
    },
    book2:{
        title: "fences",
        author: "august wilson",
    },
    book3:{
        title: "second class citizen",
        author: "buchi emecheter",
    }
}
console.log(library.book1.title)
console.log(library.book2.author)