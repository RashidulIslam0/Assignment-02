// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.


function calculateSum(a, b) {
    return a + b;
}


const result = calculateSum(12, 8);
console.log(result); 

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
// function isEven(num){
//  return num%2===0
// }
// console.log(isEven(5));

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(arr){
    let max = arr[0];
    for(let i =0;i<arr.length;i++){      
        if(max<arr[i]){
            max = arr[i]  
        }
    }
    return max
}
let a =[1,6,42,90,31,2,6]
console.log(findMax(a));


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(str){
    return str.split('').reverse().join('') 
}
console.log(reverseString('Rashidul'))


// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(arr){
    let newArr=[]
    arr.filter((i)=>{
        if(i%2!==0){
          newArr.push(i)
        } 
    })
    return newArr
}
console.log(filterOddNumbers([1,2,3,4,57,54,55,71,35,24]));


// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

const arr = [1, 2, 3, 4, 5];
const totalSum = sumArray(arr);
console.log(totalSum);  

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(arr){
    return arr.sort((a,b)=>a-b)
}
console.log(sortArray([10,12,9,2,80,70,100,42,112,5,30]));


// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
const inputString = "hello";
console.log(capitalizeFirstLetter(inputString));  // Output: "Hello"
