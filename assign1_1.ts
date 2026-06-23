
const productName: string = "Wireless Headphones";
const pricePerUnit: number = 1200;
const quantity: number = 1;
const isMember: boolean = true;

const totalPrice: number = pricePerUnit * quantity;
const isEligibleForDiscount: boolean = totalPrice > 1000 || isMember;
const discountRate: number = isEligibleForDiscount ? 0.10 : 0;
const finalPrice: number = totalPrice * (1 - discountRate);

console.log(`ชื่อสินค้าและจำนวนที่ซื้อ: ${productName} (${quantity} ชิ้น)`);
console.log(`ราคารวมทั้งหมด: ${totalPrice} บาท`);
console.log(`ได้รับส่วนลด: ${isEligibleForDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท`);