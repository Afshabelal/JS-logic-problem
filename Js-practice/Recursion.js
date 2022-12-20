function inception(num){ 
    console.log(num);
    inception(num+1);
}
// stack overflow
inception(2)


// let counter = 0;
// function inception() {
//     if (counter > 3) {
//         return "Done"
//     }
//     counter++;
//     console.log(counter);
//     return inception();
// }
// inception()

// factorial program using recursion
// Iterative approach

// const iterativefactorial = (number) => {
//     let ans = 1;
//     for (let i = number; i>0; i--) {
//         ans = ans*i;
//     }
//     console.log(ans);
// }


// Recursive approach

// const recursivefactorial = (number) => {
//     if(number ==2)
//     return 2;
//     return number * recursivefactorial(number-1)
// }
// const ans =recursivefactorial(4)
// console.log(ans);

