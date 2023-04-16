class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    const existedObserver = this.observers.find(o => o === observer);
    !existedObserver && this.observers.push(observer);
  }

  detach(observer) {
    const that = this.observers.filter(o => o !== observer);
    this.observers = that;
  }

  notify(newData) {
    this.observers.forEach(o => {
      if (typeof o === 'function') {
        o(newData);
      } else {
        o.update && o.update(newData);
      }
    });
  }
}

module.exports = Subject;
