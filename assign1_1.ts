
let productName: string = "คีย์บอร์ดบลูทูธ";
let pricePerUnit: number = 1200;
let quantity: number = 1;
let isMember: boolean = true;

let totalPrice: number = pricePerUnit * quantity;

let hasDiscount: boolean = (totalPrice > 1000) || isMember;
let discountPercent: number = hasDiscount ? 0.10 : 0;
let discountAmount: number = totalPrice * discountPercent;

let finalPrice: number = totalPrice - discountAmount;

console.log(`========================================`);
console.log(`รายงานสรุปยอดซื้อสินค้า`);
console.log(`========================================`);
console.log(`ชื่อสินค้า: ${productName} (จำนวนที่ซื้อ: ${quantity} ชิ้น)`);
console.log(`ราคารวมทั้งหมด: ${totalPrice.toFixed(2)} บาท`);
console.log(`ได้รับส่วนลดหรือไม่: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice.toFixed(2)} บาท`);
console.log(`========================================`);