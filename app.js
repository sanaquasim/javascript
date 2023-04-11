


// ____________question no 01___________________


// function greet(num1)
// {
//     let 
//     return function(num2)
//     {
//         document.write(num1+num2);
//     }
// };

// let innerFunction = greet(20)
//  innerFunction(10);

// ___________________question 02________________

// // program to check if an array contains a specified value

// const array = ['you', 'will', 'learn', 'javascript'];

// const check = array.includes('javascript');





// // check the condition


// if(check) {
//     console.log('Array contains a value.');
// } else {
//     console.log('Array does not contain a value.');
// }



// ____________________question no3_________

// let first = document.getElementById("firstPara");
//  first.innerHTML = "<p> this is my javascript assignment </p>";


//  __________________question no 4_________________________





// const order = document.createElement("li");
// const textorder = document.createTextNode("bag");
// order.appendChild(textorder);
// document.getElementById("myList").appendChild(order);
 


// _________question no 5____________________


// function style( name,col) {

//     let para = document.getElementById("firstPara")
//     para.innerHTML = name //"hello world";
//     para.style.backgroundColor =  col //"#cc5a52"
// }
//  style( "hye","#93b0db");



// _____________________question06__________________



// function product(){

    // return {
    //     productName:"book",
    //     quantity:80,
    //     size: "small",
    //     price:5000,
    //     code:101,
    // };
// }




// let result = product();
// console.log(result);

// let stringify = JSON.stringify(result);


// localStorage.setItem("product record",stringify);


// _____________qustion 07_________________________



// let record = localStorage.getItem("product record")
// let write = JSON.parse(record)

// console.log(  write)

//     function product(){

//     return {
//         productName:"book",
//         quantity:"one",
//         size: "small",
//         price:200,
//         code:101,
//     };
// }




// let result = product();
//        // console.log(result);

// let stringify = JSON.stringify(result);


// localStorage.setItem("product record",stringify);


// ______________question 8___________________




let product = {
    name:"pen",
    code: 203,
    size:20,
    quantity: 700,
    price: 1000,


}


let stringify =JSON.stringify(product);

localStorage.setItem("productName",product.name);
localStorage.setItem("productcode",product.code);
localStorage.setItem("productSize",product.size);
localStorage.setItem("productQuantity",product.quantity);
localStorage.setItem("productPrice",product.price);


