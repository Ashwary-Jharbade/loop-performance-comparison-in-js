import data from "./iterableData.js";
import PerformanceCalculator from "./performanceCalculator.js";
const obj = new PerformanceCalculator();

obj.start();
let sum = 0;
for(let i in data) {
    sum = sum + Number(i);
}
obj.end();
console.log(sum); // o/p - string
console.log(obj.timeDiff); // o/p - 9.782800000011921

// Type conversion (parseInt) result
// o/p - 49999995000000
// o.p - 8.704199999988079

// Type conversion (Number) result
// o/p - 49999995000000
// o.p - 6.338199999988079