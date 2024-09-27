// node task.js //

// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1].location);

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

// console.log(students[3333].name);

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

// console.log(data2.data[1].bookCategory);

// node task.js //
// task-4//

// let ary = [1, 3, 5, 7, 9]
// for (let man of ary) {
//     console.log(man + 1);
// }



// node task.js //
// task-4 others//

// let ary = [1, 3, 5, 7, 9]
// let man = ary.map(jur=> jur + 1)
// console.log(man);



// node task.js //
// task-5 //

// let hi = [33, 50, 79, 78, 90, 101, 30]
// let man = hi.filter(az => az % 10 === 0)
// console.log(man);


// node task.js //
// task-5 others//

// let hi = [33, 50, 79, 78, 90, 101, 30]
// let man = hi.find(az => az % 10 === 0)
// console.log(man);


// node task.js //
// task-6 others//

// let instuctor = [
//     {name:"azmir",age: 20,position:"Senior"},
//     {name:"soniya",age: 30,position:"Senior"},
//     {name:"Asif",age: 50,position:"Senior"}
// ]

// console.log(instuctor[0]);
// console.log(instuctor[2]);



// node task.js //
// task-7 others//

let instuctor = [
    {name:"azmir",age: 20,position:"Senior"},
    {name:"soniya",age: 30,position:"Senior"},
    {name:"Asif",age: 50,position:"Senior"}
]
 
let sum = 0
  for(let val of instuctor){
    let man = val.age
    sum = sum + man
  }
  console.log(sum);
