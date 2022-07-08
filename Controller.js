class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.quest = [];
    this.result = 0;
    this.bestScore = 5;
  }

  run() {
    this.printTopicsController(this.model.readTopics());
  }

  printTopicsController(arrTopic) {
    this.view.showTopic(arrTopic);
    this.view.getNumber()
      .then((number) => this.getArrQuest(number));
  }

  getArrQuest(topicNumber) {
    this.model.readContent(`./topics/${topicNumber}.txt`)
      .then((arr) => {
        this.quest = arr;
        this.printQuestController()});
  }

  printQuestController() {
    if (this.quest.length === 0) {
      console.log(`Твой результат: ${this.result} / ${this.bestScore}`);
      console.log('\nСыграем ещё? YES / не YES ?\n');

      this.view.getNumber()
        .then((input) => {
          if (input !== 'YES') {
            return console.log('\nУСЕ!\n');
          }
          this.run();
        });
    } else {
      const answer = this.quest[0][4];
      const quest = this.quest.splice(0,1);
      console.log('\x1b[33m%s\x1b[0m', `\n${quest[0][0]}`);
      console.log(`\n${quest[0].slice(1, 4).join('\n')}\n`);

      this.view.getNumber()
        .then((number) => {
          if (number !== answer) {
            console.log('\x1b[31m%s\x1b[0m', '\n😭 ну ё-маё, обшибка... 😭\n');
          } else {
            this.result++;
            console.log('\x1b[32m%s\x1b[0m', '\n😏 Гуд, двигаемся дальше 😏\n');
          }
          return this.printQuestController(number);
        })
    }
  }
}

module.exports = Controller;
