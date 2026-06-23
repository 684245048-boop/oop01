"use strict";

let productName = "คีย์บอร์ดบลูทูธ";
let pricePerUnit = 1200;
let quantity = 1;
let isMember = true;

let totalPrice = pricePerUnit * quantity;

let hasDiscount = (totalPrice > 1000) || isMember;
let discountPercent = hasDiscount ? 0.10 : 0;
let discountAmount = totalPrice * discountPercent;

let finalPrice = totalPrice - discountAmount;

console.log(`========================================`);
console.log(`รายงานสรุปยอดซื้อสินค้า`);
console.log(`========================================`);
console.log(`ชื่อสินค้า: ${productName} (จำนวนที่ซื้อ: ${quantity} ชิ้น)`);
console.log(`ราคารวมทั้งหมด: ${totalPrice.toFixed(2)} บาท`);
console.log(`ได้รับส่วนลดหรือไม่: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice.toFixed(2)} บาท`);
console.log(`========================================`);
