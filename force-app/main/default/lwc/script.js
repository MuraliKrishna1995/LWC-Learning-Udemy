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


 // Spread operator
 