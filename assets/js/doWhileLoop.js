import data from "./iterableData.js";
import PerformanceCalculator from "./performanceCalculator.js";
const obj = new PerformanceCalculator();

obj.start();
let sum = 0;
let i = data.length;
do {
    sum = sum + i;
} while(--i);
obj.end();
console.log(sum); // o/p - 50000005000000
console.log(obj.timeDiff); // o/p - 0.027200000047683717

// Pre increment o/p
// o/p - 50000005000000
// o/p - 0.14210000002384185