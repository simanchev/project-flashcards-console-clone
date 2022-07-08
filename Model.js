const fs = require('fs');

class Model {
  constructor() {
    this.topicNames = ['1. Пятигорск', '2. Спортик', '3. Айтишечка'];
    this.contentArr = []; // будет заполнена методом
  }

  readTopics() {
    return this.topicNames;

  }

  readContent(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (error, data) => {
        if (error) reject(error);
        let arrQuest = [];
        let m = (data.split('\n\n'));
        for (let i = 0; i < m.length; i++) {
          arrQuest.push(m[i].split('\n'));
        }
        resolve(arrQuest);
      });
  }); }
}

module.exports = Model