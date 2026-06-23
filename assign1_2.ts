const bookTitle: string = "The Art of TypeScript";
const isbn: string = "978-3-16-148410-0";
const price: number = 650;
const isAvailable: boolean = true;

const bookSummary: [string, number] = [bookTitle, price];

const discountedPrice: number = price * 0.85;
const isPremium: boolean = price > 500;
const canDisplayInShowcase: boolean = isPremium && isAvailable;

console.log(`ชื่อหนังสือ: ${bookSummary[0]}`);
console.log(`ISBN: ${isbn}`);
console.log(`ราคาปกติ: ${price} บาท`);
console.log(`ราคาโปรโมชัน (15% off): ${discountedPrice} บาท`);
console.log(`เป็นหนังสือ Premium: ${isPremium}`);
console.log(`สามารถจัดแสดงที่หน้าตู้โชว์ได้: ${canDisplayInShowcase}`);
