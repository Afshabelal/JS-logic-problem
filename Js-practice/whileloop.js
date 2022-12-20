// WAP to find the average of an array

// let arr=[1,2,3,4,5,6,7,8];

// let sum=0;

// let i=0;

// while (i < arr.length){
//     sum= sum + arr[i];
//     i++;
// }
// console.log(sum, sum/arr.length);

// WAP to find the sum of even number in an array

// let arr=[10,2,5,6,4,8,9,20];

// let sum=0;

// let i=0;

// while(i < arr.length){
//     if(arr[i] %2===0) {
//     sum = sum + arr[i];
//     }
//     i++;
// }
// console.log('sum of even number', sum);

// // Reverese a number
// 149 --> 941

let a = 149;
let rev = 0;

while(a!=0) {
        let r = a%10; // a=149 149%10
   rev = rev*10 + r; //0*10 + a%10
        a = Math.floor(a/10); //149/10
     }
    
     console.log(rev);
    