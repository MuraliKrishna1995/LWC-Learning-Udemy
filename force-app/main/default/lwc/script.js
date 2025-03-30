var course ="Murali Krishna Global"
console.log(course);
console.log(window);
function scopeTesting (){
var anothercourse ="I am star in function"
console.log(anothercourse);
}
scopeTesting();
//console.log(anothercourse);
// var doesn't have block scope it only supports window & function scope
// let keyword helps u create a variable but doesn't allows to re declare & supports function level and block level


/*DataTypes in JS */
// Array is also a form of object in JS 
//Null is diff from undefined null means "nothing" undefined means not available 
// datatype of undefined is undefine whereas null is object type 
// ===in Js compares the datatype and value where as == doesn't compare datatype.


// 1. Array 
var arr=['a','b','c'];
console.log(arr);


//2. object 
var obj={
"name": "Murali",
"age":29,
"Technilogy job": "Salesforce developer"
}
console.log(obj.job)//this gives us undefines as we have space in the property name 
console.log(obj["Technilogy job"]);// gives us the Salesforce developer


// Spread operator is used to 
//1. breaks down an array into individual elements 

let greetings = "Hi Murali ";
let charList = [...greetings];
console.log(charList);

//2. Combining an Array
let arr1=["Astro","Sassy"];
let arr2=["pod1","Enhancement"];
let arr3=[...arr1,...arr2];
console.log(arr3);
// 3. adding values to array
let arr4 = ["Miiki"];
let arr5 =["Nikki",...arr4];
console.log(arr5);
//4. combining an object 
let obj1=[
    {
        "name": "Murali",
        "age":29,
        "job": "Salesforce developer"
    }];

    let obj2 = [
        {
            "name": "Nikki",
            "age":25,
            "job": "LIMS Developer"}];

            let obj3=[...obj1,...obj2];
            console.log(obj3);

// 5. Shallow Copy 
// if we use traditional way of copying an array i.e .. 
let arr6 = [1,2,3];
let arr7 = arr6;
arr7.push("Mikki");
console.log(arr6);
console.log(arr7);
// both console statements 6,7 have same values but expected is only 7 should have Mikki
// this is due to shallow copying by JS to avoid this we can use the spread operator
var arr10 =[...arr6];
arr10.push("Nikhita");
console.log('print via spread operator '+ arr10);
// Shallow copy is not reflected in the arr 6 


/**********Destructuring***********************/
// Destructing is a special syntax of JS that allows us to assign values from arrays and objects to variables
let arrcomp=["Amazon","Walmart","Flipkart","Snapdeal"];
let [first,second,third,fourth]=arrcomp;
console.log("company 1 " +first);
console.log("Company 2 " +second);
/* Destructuring of object */
let objcomp={
"company":"Amazon",
"price":200,
"rating":5
}
let  {company,price,rating}=objcomp;
console.log("Company array from obj "+ company);
console.log("price array from obj "+price);
console.log("rating array from obj "+rating);
    /********string interopolation *************/
    // String Interpolation is used to the process of inserting strings or values into an existing string 
    //for various purposes
var empname = "Murali";
var salary = 10000;
var bonus = 2000;
var message = (`Hello  your salary is ${salary} and bonus is ${bonus} total ctc is ${salary +bonus}`);

console.log("Whole message " +message);

/* String Methods in JS */
//Slice method extracts a section of a string and returns a new string
var str1 = "Hello World";
    var str2 = str1.slice(0,5);
     console.log("Slice method example "+ str2);
     //trim method removes the whitespaces from both sides of the string
     var str3 = "   Hello World  ";     
     var str4 = str3.trim();
     console.log("trim method example " +str4);

     // Json operators 
    let objjson ={
        Name:"Murali",
        Age:29,
        Job:"Salesforce Developer"
    
    }
    // To know what are the parameters we have in the Json we can use object.key() method 
    console.log('keys in json '+ Object.keys(objjson));
    // we can also use object.values(objjson) method to get the values of the Json
    console.log('values in json' + Object.values(objjson));

    /***Array Methods */
    //map() method is used to create a new array populated with the results of calling a provided function on every element in the calling array.)
    //syntax-----> arr.methodName(function(currentItem,index,actualArray)){

    //})
arr=[2,3,4,6,8,10,12];
let newArray= arr.map(function(currentItem,index,actualArray){
    console.log(`current item is ${currentItem} Index is ${index} actuallArray is ${actualArray}`);
    return currentItem*2;
})
console.log('newArray using map function '+newArray);
//filter() method is used to create a new array filled with all elements of arr that pass the test implemented by the provided function)
let newfilterArray=arr.filter(function(currentItem){
    return currentItem >5
})
console.log('newfilterArray using filter function '+newfilterArray);
//every() method is used to test whether all elements in the array pass the test implemented by the provided function

let age=[20,30,40,50,60];
let allages=age.every(function(currentItem){
    return currentItem >19
})
console.log('allages '+allages);
//some() method is used to test whether some element in the array passes the test implemented by the provided function
let someages=age.some(function(currentItem){
    return currentItem >25
})
console.log('someages '+someages);
//sort() method is used to order the elements of an array in ascending order
let numberlist=[2,4,5,1,3];
let sortednumberlist= numberlist.sort(function(a,b){
    return a-b;// This gives the numberList in ascending order
})
console.log(sortednumberlist);
//reduce() method is used to apply a function against an accumulator and each value of the array (from left-to-right)   to reduce it to a single value
let numbers=[1,2,3,4,5];
console.log(numbers.reduce(function(a,b){
    return a+b;
}));
//forEach() method is used to execute a provided function once for each array element.
numbers.forEach(function(currentItem){
    console.log(currentItem);
})
/* Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/
//Promise has 3 states pending, resolved and rejected
// Event Propagation in JS explains the order in which events are fired in the browser 
// Event Bubbling is the process of firing an event from child element to parent elements 
//in lwc we use this more often
// Event Capturing is the process of firing an event from parent element to child elements
        
        /****** Custom Events in JS********/
        document.addEventListener('Hello',function(data){
            console.log(data.detail.message);
        })
        function firstFunction(){
      let myevent = new CustomEvent ('Hello',{
          detail:{
            message:'Hello Murali'
          }
        })
        document.dispatchEvent(myevent)
        }
        

// Arrow functions is an alternative syntax for a function expression
// this is the concept of lexical this
abc= ()=>console.log('iam in arrow function');
abc();
//Set Timeout
window.setTimeout(function(){
    console.log('timeout')
},2000)

//setInterval
let intervalId=window.setInterval(function(){
console.log("in settime interval")
},2000)
clearInterval(intervalId);