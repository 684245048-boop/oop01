let fname: string = "Teeratep";
let lname: string = "Klommek";
let age: number = 19;
let dreamJob: string = "trainer, programmer";

let mark: number = 80;
let pass: boolean = true;
let course: string = "Object-Oriented Programming";

console.log("Name : %s %s \nAge : %d \nDream Job : %s \nCourse : %s \nMark : %d",fname,lname,age,dreamJob,course,mark);

console.log("Pass:", pass);

let courses: string[] = ["Database", "Programming", "Web"];
let marks: number[] = [75, 72, 81];

console.log("\nCourse Scores");
console.log(courses[0], marks[0]);
console.log(courses[1], marks[1]);
console.log(courses[2], marks[2]);

let total: number = marks[0] + marks[1] + marks[2];
console.log("Total Marks:", total);
let avg: number = total / 3;
console.log("Average",avg);
