const readline = require('readline');

class View {
  constructor() {}

  showTopic(arrTopic) {
    console.log('\x1b[33m%s\x1b[0m', `\nПривет, дорогой(-ая)(-ие)(-ушеньки)!`);
    console.log('\x1b[33m%s\x1b[0m', 'Выбери одну тему и погнали:\n');
    console.log(arrTopic.join('\n') + '\n');
  }

  getNumber() {
    return new Promise((resolve, rejects) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question((''), (a) => {
        resolve(a)
        rl.close()
      })
    })
  }
}

module.exports = View
