import Kahoot from "kahoot.js-updated";
import { parentPort } from "worker_threads";
import { v4 as uuidv4 } from "uuid";

parentPort!.on("message", function (data) {
  for (var i = 1; i <= data[2]; i++) {
    let x = i;
    setTimeout(function () {
      let client = new Kahoot();
      client.join(data[0], data[1] + "-" + uuidv4());
      client.on("QuestionStart", (question: any) => {
        setTimeout(function () {
          question.answer(Math.floor(Math.random() * 5).toString());
        }, i * (Math.random() * 15 + 8));
      });
    }, x * (Math.random() * 100 + 100 / 2));
  }
});
