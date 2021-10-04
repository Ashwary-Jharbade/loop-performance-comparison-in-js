import data from "./iterableData.js";
import PerformanceCalculator from "./performanceCalculator.js";
const obj = new PerformanceCalculator();

obj.start();
let sum = 0;
for(let i of data) {
    sum = sum + i;
}
obj.end();
console.log(sum); // o/p - 49999995000000
console.log(obj.timeDiff); // o/p - 6.2085