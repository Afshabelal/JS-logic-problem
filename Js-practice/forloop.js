// WAP to print 1 to 100

// for(let a=1; a<=100; a=a+5){ //output 1,6,11,......96
//     console.log(a);
// }

// WAP to find the sum of n natural no

// let n=7; // 1+2+3+4+5+6+7
// var sum=0;
// for(let i=1; i<=n; i++){
//   sum = sum+i;
// }
// console.log(sum);

// WAP to break the loop if values becomes 5,4,6 skip the execution

//  for(let i=1;i<=10;i++) {
//     if(i===5 || i===4 ||i===6) {
//         continue;
//     }
//     console.log(i);
//   }
    
  // Nested loop

  // for(i=0; i<10; i++){
  //  for (j =0; j<=i+1; j++){
  //   console.log(j);
  //  }
  // }

  //WAP to check number is pallindrome or not
 
  // 141 --> 141 --> Pallindrome
 // 123 --> 321 --> Not pallindrome

 //WAP to check if a number is a neon number or not

// 9 // 9*9 = 81 // 8+1 = 9 ===9 // Neon number
// 8 // 8*8 = 64 // 6+4 = 10 !== 8 // Not a Neon

for(let i=1; i<=100; i++){
 if(checkneon(i))
 console.log(i + "");
}