let annualIncome: number = 50000;
let taxRate: number = 0.07;

let taxAmount: number = annualIncome * taxRate;
let netIncome: number = annualIncome - taxAmount;

console.log("-- Tax Calculation Report --");
console.log("Gross Income: $%d", annualIncome);
console.log("Tax Rate: %d%%", taxRate * 100);
console.log("Tax Amount: $%d", taxAmount);
console.log("Net Income: $%d", netIncome);