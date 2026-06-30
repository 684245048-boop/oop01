const studentScores = [
    { name: "สมชาย", score: 85 },
    { name: "สมหญิง", score: 72 },
    { name: "สมศักดิ์", score: 48 }
];
const studentGrades = new Map<string, string>();

for (const student of studentScores) {
    let grade: string = "";      
    
    if (student.score >= 80) {
        grade = "A";
    } else if (student.score >= 70) {
        grade = "B";
    } else if (student.score >= 60) {
        grade = "C";
    } else if (student.score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

   
    studentGrades.set(student.name, grade);
}
console.log("=== สรุปรายชื่อและเกรด ===");
for (const [name, grade] of studentGrades) {
    console.log(`นักเรียน: ${name} -> เกรด: ${grade}`);
}