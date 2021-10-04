import data from "./iterableData.js";
import PerformanceCalculator from "./performanceCalculator.js";
const obj = new PerformanceCalculator();

obj.start();
let sum = 0;
data.forEach((item,i) => {
    sum = sum + i;
})
obj.end();
console.log(sum); // o/p - 49999995000000
console.log(obj.timeDiff); // o/p - 0.7286000000238418