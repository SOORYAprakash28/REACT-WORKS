let numbers=[1,2,3,4,5,6,7,8,9];
let names=['soorya','prakash','acharya'];
console.log(numbers,names);

// for each function for each element in the arrya

numbers.forEach(element => console.log(element));

// filter ourt the elements that donot matc hthe condition

let evennumbers = numbers.filter(num => num % 2 == 0);
console.log(evennumbers);