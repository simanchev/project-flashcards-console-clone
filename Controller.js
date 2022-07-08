class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  run() {
    this.printTopicsController(this.model.readTopics())
    this.view.showTopic
    // this.getArrQuest(1)
  }

  printTopicsController(arrTopic) {
    this.view.showTopic(arrTopic)
    this.view.getNumber()
      .then(number => this.getArrQuest(number))
  }

  getArrQuest(topicNumber) {
    this.model.readContent(`./topics/${topicNumber}.txt`)
    .then(arr => this.printQuestController(arr))
  }

  printQuestController(arrQuest) {
    let answer = arrQuest[0][4]
    let quest = arrQuest.splice(0,1)
    console.log('\x1b[32m%s\x1b[0m', `\n${quest[0][0]}`)
    console.log(`\n${quest[0].slice(1, 4).join('\n')}\n`)

    this.view.getNumber()
      .then(number => this.getQuest(number))
  }

  getQuest(QuestNumber) {
    let quest = arrQuest.splice(0,1)
    console.log('\x1b[32m%s\x1b[0m', `\n${quest[0][0]}`)
    console.log(`\n${quest[0].slice(1, 4).join('\n')}\n`)

    this.view.getNumber()
      .then(number => this.getQuest(number))
      
  }


  
}

module.exports = Controller