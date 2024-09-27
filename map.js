
// node map.js//

// let ar = [2, 4, 8, 10, 20]
// let mep = ar.map(az=> az*2)
// console.log(mep);






// node map.js//
// let ar = [50, 56, 30, 12, 80]
// let man = ar.map(azmir => azmir + 10);
// console.log(man);



// node map.js//
// let ar = ["kire", "hi", "bol", "asbi"]
// let val = ar.map(str=> str.length)
// console.log(val);



// node map.js//

let person = [{ name: "Azmir Uddin", country: "Bangladesh", age: 20, skils: "Front End Developer", selary: 22000 },
{ name: "Azmir Uddin", country: "Bangladesh", age: 20, skils: "Front End Developer", selary: 22000 },
{ name: "Azmir Uddin", country: "Bangladesh", age: 23, skils: "Front End Developer", selary: 32000 },
{ name: "Azmir Uddin", country: "Bangladesh", age: 22, skils: "Front End Developer", selary: 56000 },
{ name: "Azmir Uddin", country: "Bangladesh", age: 29, skils: "Front End Developer", selary: 44000 }]


// let des = person.map(person=>person.country)
// console.log(des);
// node map.js//


// jast selary ber kora hoice jader 30 hazar taka theke besi ace
// let man = person.filter(p => p.selary > 30000).map(p=> p.selary);
// console.log(man);


// node map.js//

// let fine = person.find(f=> f.selary < 50000)
// console.log(fine);

// node map.js//

// let rud = person.reduce((p, c) => p + c.selary, 0);
// console.log(rud);