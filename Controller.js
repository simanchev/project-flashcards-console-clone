// class Controller {
//   constructor(model, view) {
//     this.model = model
//     this.view = view
//   }

  run() {
    this.printTopicsController(this.model.readTopics())
    this.getArrQuest(1)
  }
//   run() {
//     this.printTopicsController(this.model.readTopics())
//   }

//   printTopicsController(arrTopic) {
//     this.view.showTopic(arrTopic)
//   }

  getArrQuest(topicNumber) {
    this.model.readContent(`./topics/${topicNumber}.txt`)
    .then(console.log)
  }

  printQuestController(arrQuest, answerNumber) {
    
  }
//   getArrQuest(topicNumber) {
//     // return new Promise((resolve, reject) => {

//     // })
//   }

//   // printQuestController(arrQuest, answerNumber) {

//   //   if 

//   //   this.view.showTopic(arrQuest)
//   // }

  
// }

// module.exports = Controller