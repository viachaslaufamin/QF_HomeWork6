//Задание 1
//let user = {
//   name: 'John',
//   age: 30
//};

//for(let key in user){
//   console.log(key)
//}


//Задание 2,3,4

//let product = {
//   productname: 'Car',
//   productprice: 100
//};
//console.log(product.productname, product.productprice)

//product.productquantity = 'quantity';
//product.productquality = 'quality';
//delete product.productquality;

//console.log(product);


//Задание 5
//let menu = {
//   width: 200, 
//   height: 300,
//   title: "my menu"
//};

//for(let key in menu){
//   if (typeof menu[key] === 'number'){
//      menu[key]*=2;
//   }
//}
//console.log(menu);


//Задание 6
//function number (a, b){
//   if(a>b){
//      return 1;
//   }
//   else if (a<b){
//      return -1;
//   }
//   else{
//   return 0;
//   }
//}
//console.log(number(4, 2));
//console.log(number(2, 4));
//console.log(number(2, 2));


//Задание 7

function number (a, b){
   if(a%2 ===0 && b%2 === 0){
      return a * b;
   }
   else if(a%2!==0 && b%2!==0){
      return a + b;
   }
   else if (a%2 !==0){
      return a;
   }
      else{
         return b
      }
   
}
console.log(number(4, 6));
console.log(number(3, 5));
console.log(number(2, 7));
























