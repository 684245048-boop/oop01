interface Book {
  title: string;
  isAvailable: boolean;
}
const library: Book[] = [
  { title: "The Hobbit", isAvailable: true },
  { title: "Harry Potter", isAvailable: false },
  { title: "The Alchemist", isAvailable: true },
  { title: "Dune", isAvailable: false },
  { title: "Steve Jobs", isAvailable: true }
];

let availableCount = 0;
let borrowedCount = 0;

for (const book of library) {
  if (book.isAvailable) {
    console.log(`${book.title} -> [พร้อมให้ยืม]`);
    availableCount++;
  } else {
    console.log(`${book.title} -> [ถูกยืมแล้ว]`);
    borrowedCount++;
  }
}

console.log(`Available: ${availableCount} | Borrowed: ${borrowedCount}`);