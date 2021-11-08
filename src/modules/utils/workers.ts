import { Worker } from "worker_threads";

const w1 = new Worker("./dist/workers/1.js");
const w2 = new Worker("./dist/workers/2.js");
const w3 = new Worker("./dist/workers/3.js");
const w4 = new Worker("./dist/workers/4.js");
const w5 = new Worker("./dist/workers/5.js");
const w6 = new Worker("./dist/workers/6.js");
const w7 = new Worker("./dist/workers/7.js");
const w8 = new Worker("./dist/workers/8.js");
const w9 = new Worker("./dist/workers/9.js");
const w10 = new Worker("./dist/workers/10.js");

const workers = {
  w1,
  w2,
  w3,
  w4,
  w5,
  w6,
  w7,
  w8,
  w9,
  w10,
};

export default workers;
  