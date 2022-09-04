module.exports = hello = (payload) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payload.randomNumber === 5) {
        console.log(`${new Date()} hello ${payload.name}... - REJECTED`);
        reject(new Error("Erro proposital!"));
        return;
      }
      console.log(`${new Date()} hello ${payload.name}...`);
      resolve();
    }, 100);
  });
