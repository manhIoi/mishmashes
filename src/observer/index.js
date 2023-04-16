const Subject = require('./Subject');

class ObserverData {
  constructor(defaultData) {
    this.subject = new Subject();
    this.data = defaultData;
  }

  attach(observer) {
    this.subject.attach(observer);
    return () => {
      this.detach(observer);
    };
  }

  detach(observer) {
    this.subject.detach(observer);
  }

  update(newData) {
    this.data = newData;
    this.subject.notify(newData);
  }

  get() {
    return this.data;
  }
}

module.exports = {
  ObserverData,
  Subject,
};
