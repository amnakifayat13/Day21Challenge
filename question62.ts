/* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes 
they're taking, and then fill in this blueprint with an example student.*/

interface Students {
    name: string;
    age: number;
    courses: string[]
}
console.log("Data for Student 1:");

let student1: Students = {
    name: "Amna Kifayat",
    age: 30,
    courses: ["Maths", "English", "Accounting"]
}


let student2: Students = {
    name: "Hayatullah Noor",
    age: 15,
    courses: ["English", "Maths", "Computer"]
}

console.log(student1);
console.log("Data for Student2:");
console.log(student2);

