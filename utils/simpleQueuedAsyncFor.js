module.exports = asyncIncrementalFor = async (from = 0, to, callback) => {
  async function* asyncGenerator() {
    let i = from;
    while (i < to) {
      yield i++;
    }
  }
  (async function () {
    for await (let i of asyncGenerator()) {
      await callback(i);
    }
  })();
};
