const { quickAddJob, run } = require("graphile-worker");
const hello = require("./tasks/hello");
const simpleQueuedAsyncFor = require("./utils/simpleQueuedAsyncFor");
const getRandomInt = require("./utils/getRandomInt");

const connectionString = ""; //@TODO: coloque a url para conectar-se no banco, na base postgres

const addTaskToQueue = async (payload, identifier = "default") => {
  //@TODO: adicione a task na fila
  //...
};

const callback = (i) =>
  addTaskToQueue(
    { name: `Daniel ${i}`, randomNumber: getRandomInt(1, 10) },
    "hello"
  );

(async () => await simpleQueuedAsyncFor(0, 100, callback))();

const main = async () => {
  //@TODO: Utilize a funçao run aqui da maneira correta para que suas tasks sejam processadas
  //...
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
