const { rejects } = require('assert');
const fs = require('fs');

class Model {
  constructor() {
    this.topicNames = ['Пятигорск', 'Выдры', 'Еноты'];
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