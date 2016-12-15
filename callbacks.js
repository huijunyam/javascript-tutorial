class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 100);
  }

  printTime() {
    const hrs = `${this.hours < 10 ? "0" + this.hours : this.hours }`;
    const min = `${this.minutes < 10 ? "0" + this.minutes : this.minutes }`;
    const sec = `${this.seconds < 10 ? "0" + this.seconds : this.seconds }`;

    console.log(`${hrs}:${min}:${sec}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;

    if (this.seconds >= 60) {
        this.seconds %= 60;
        this.minutes += 1;
    }
    if (this.minutes >= 60) {
      this.minutes %= 60;
      this.hours += 1;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }

    this.printTime();
  }
}

const clock = new Clock();
