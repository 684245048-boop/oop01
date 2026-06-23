"use strict";

let bookTitle = "TypeScript เบื้องต้น";
let isbn = "978-616-12345-6-7";
let price = 650;

let bookSummary = [bookTitle, price];

let isAvailable = true;

let promotionalDiscount = 0.15;
let discountPrice = price * (1 - promotionalDiscount);

let isPremium = price > 500;

let canDisplay = isPremium && (isAvailable === true);
let displayStatus = canDisplay ? "สามารถจัดแสดงที่หน้าตู้โชว์ได้" : "ไม่สามารถจัดแสดงที่หน้าตู้โชว์ได้";

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
