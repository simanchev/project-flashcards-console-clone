const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

class View {
  constructor() {}

  showTopic(arrTopic) {
    console.log(`\nПривет дорогой!`);
    console.log('Выбери одну тему и погнали:\n');
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

  showQuest(arrQuest) {
    // console.log(arrQuest[0])
    // console.log(arrQuest.slice(1).join('\n') + '\n')
  }

}

module.exports = View

const arr = ['tema1', 'tema2', 'tema3']
// // const arrQ = ['1. Верно или нет? Еноты впадают в спячку.' , 'a. YES', 'b. NO', "c. MAYBE"]
const obj = new View()
// obj.showTopic(arr)
// obj.getNumber()

// const answer = rl.question('What do you think of Node.js? ');
// console.log(`Thank you for your valuable feedback: ${answer}`);





// '\x1b[32m%s\x1b[0m',