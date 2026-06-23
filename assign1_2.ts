
let bookTitle: string = "TypeScript เบื้องต้น";
let isbn: string = "978-616-12345-6-7";
let price: number = 650;

let bookSummary: [string, number] = [bookTitle, price];

let isAvailable: boolean = true;

let promotionalDiscount: number = 0.15;
let discountPrice: number = price * (1 - promotionalDiscount);

let isPremium: boolean = price > 500;

let canDisplay: boolean = isPremium && (isAvailable === true);
let displayStatus: string = canDisplay ? "สามารถจัดแสดงที่หน้าตู้โชว์ได้" : "ไม่สามารถจัดแสดงที่หน้าตู้โชว์ได้";

console.log(`========================================`);
console.log(`ระบบจัดการข้อมูลหนังสือภายในร้าน`);
console.log(`========================================`);
console.log(`ชื่อหนังสือ: ${bookSummary[0]}`);
console.log(`รหัส ISBN: ${isbn}`);
console.log(`ราคาปกติ: ${bookSummary[1].toFixed(2)} บาท`);
console.log(`ราคาโปรโมชัน (ลด 15%): ${discountPrice.toFixed(2)} บาท`);
console.log(`ประเภทหนังสือ Premium: ${isPremium}`);
console.log(`สถานะการจัดแสดง: ${displayStatus}`);
console.log(`========================================`);