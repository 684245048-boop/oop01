"use strict";
// 2. การกำหนดข้อมูล (Data Definition)
let bookTitle = "TypeScript เบื้องต้น";
let isbn = "978-616-12345-6-7";
let price = 650;
// ใช้ Tuple เพื่อเก็บข้อมูลสรุปสั้นๆ [bookTitle, price]
let bookSummary = [bookTitle, price];
// กำหนดตัวแปร สถานะการยืม (isAvailable) เป็น boolean
let isAvailable = true;
// 3. การประมวลผล (Logic & Operators)
// ใช้ Arithmetic Operators คำนวณราคาหลังหักส่วนลด 15% สำหรับช่วงโปรโมชัน
let promotionalDiscount = 0.15;
let discountPrice = price * (1 - promotionalDiscount);
// ใช้ Comparison Operators ตรวจสอบว่าเป็น "หนังสือราคาสูง (Premium)" หรือไม่ (ราคาก่อนหักส่วนลด > 500 บาท)
let isPremium = price > 500;
// ใช้ Logical Operators เพื่อตรวจสอบเงื่อนไข
let canDisplay = isPremium && (isAvailable === true);
let displayStatus = canDisplay ? "สามารถจัดแสดงที่หน้าตู้โชว์ได้" : "ไม่สามารถจัดแสดงที่หน้าตู้โชว์ได้";
// 4. การแสดงผล (Output) ใช้ Template Literals จัดรูปแบบรายงานในหน้าจอ Console
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
