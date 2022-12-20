// javascript object has three types-

// Object Literal
// new keyword
// Object Constructor

// 1. Using Object Literal

// Syntax for Creating Object using Object Literal

// var obj_name = {prop_name1:prop_val1,prop_name2:prop_val2,....,prop_name n:prope_val n};

// syntax

// var obj_name = {
// 	prop_name1:prop_val1,
// 	prop_name2:prop_val2,
// 	....,
// 	prop_name n:prope_val n
// 	};

// 2. Using new Keyword

// Syntax for Creating Object using 'new' Keyword

// var obj_name = new Object();



// 3. Using Object Constructor

// function emp(id, name, salary){
// 	this.id = id;
// 	this.name = name;
// 	this.salary = salary;
// 	}

// object inside array:

let mainData = {
    status: 'success',
    data: {
        count: 67,
        rows: [
            {
                id: 9,
                name: 'Afsha',
                roll: 'BCA009',
            },
            {
                id: 1,
                name: 'Tarique',
                roll: 'BCA001',
            },
            {
                id: 2,
                name: 'Saumya',
                roll: 'BCA002',
            },
            {
                id: 3,
                name: 'Adil',
                roll: 'BCA003',
            },
            {
                id: 4,
                name: 'Snehal',
                roll: 'BCA004',
            },
            {
                id: 5,
                name: 'Dilshad',
                roll: 'BCA005',
            },
            {
                id: 6,
                name: 'Shahnawaz',
                roll: 'BCA006',
            },
            {
                id: 7,
                name: 'Atandita',
                roll: 'BCA007',
            },
            {
                id: 8,
                name: 'Jawed',
                roll: 'BCA008',
            },
        ],
    },
};


// let users = mainData.data.rows;

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]['id'], users[i]['name']);
// }

// console.log(+'363' + +'363');
// console.log(parseInt('363') + parseInt('363');


// sum of all id inside rows

// let users = mainData.data.rows;
// let sum= 0;
// for (let i = 0; i < users.length; i++) {
//     console.log("rows[i]['id'], rows[i]['name'],rows[i]['roll']):", sum ); 
//     sum= sum + users[i].id
//  }

// average of all inside ids inside rows

// let users = rows;
// let sum=0;
// let average= sum/users.rows.length;

// for(i=0; i< users.rows.length; i++){
// sum = sum + rows[i];
// }
// return average;

// sort ascending order all element of rows

let users=mainData.data.rows;

console.log(users.sort((a,b) =>
{
    return a.id- b.id;
})


// sort in ascending order without any library method
