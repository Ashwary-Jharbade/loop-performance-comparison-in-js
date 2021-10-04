class PerformanceCalculator {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    this.timeDiff = 0;
  }

  start() {
    this.startTime = performance.now();
  }

  end() {
    this.endTime = performance.now();
    this.checkTimeDifference();
  }

  checkTimeDifference() {
    this.timeDiff = this.endTime - this.startTime; //in ms
    // strip the ms
    this.timeDiff /= 1000;
  }

  reset() {
    this.startTime = 0;
    this.endTime = 0;
    this.timeDiff = 0;
  }

  peek() {
    console.log("Seconds :", this.timeDiff);
  }
}

export default PerformanceCalculator;
