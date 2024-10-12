// JavaScript Object Notation (JSON)
const student = {
    name: 'tahmina',
    id: 3
}

console.log(student);

const stuString = JSON.stringify(student);      // "JSON.stringify(student)" eta dye object theke string e convert kore
console.log(stuString);
console.log(typeof student);
console.log(typeof stuString);


// "JSON.parse(stuString)" eta dye string theke object e convert kore
const stuObject = JSON.parse(stuString);
console.log(stuObject);
console.log(typeof stuObject);