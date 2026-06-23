// 2. การประกาศตัวแปร (Variables & Types) โดยใช้ Static Typing
let productName: string = "คีย์บอร์ดบลูทูธ";
let pricePerUnit: number = 1200;
let quantity: number = 1;
let isMember: boolean = true;

// 3. การคำนวณ (Calculations & Operators)
// คำนวณราคารวมก่อนหักส่วนลด
let totalPrice: number = pricePerUnit * quantity;

// สร้างเงื่อนไขส่วนลดพิเศษ โดยใช้ Logical Operators (&&, ||)
// ถ้ายอดซื้อรวมเกิน 1,000 บาท หรือ เป็นสมาชิก จะได้รับส่วนลด 10%
let hasDiscount: boolean = (totalPrice > 1000) || isMember;
let discountPercent: number = hasDiscount ? 0.10 : 0;
let discountAmount: number = totalPrice * discountPercent;

// คำนวณราคาที่ต้องจ่ายจริงหลังหักส่วนลด
let finalPrice: number = totalPrice - discountAmount;

// 4. การแสดงผล (Output) โดยใช้ Template Literals
console.log(`========================================`);
console.log(`รายงานสรุปยอดซื้อสินค้า`);
console.log(`========================================`);
console.log(`ชื่อสินค้า: ${productName} (จำนวนที่ซื้อ: ${quantity} ชิ้น)`);
console.log(`ราคารวมทั้งหมด: ${totalPrice.toFixed(2)} บาท`);
console.log(`ได้รับส่วนลดหรือไม่: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice.toFixed(2)} บาท`);
console.log(`========================================`);