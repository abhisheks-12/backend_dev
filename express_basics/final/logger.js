const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getTime();
  console.log(`${method} ${url} ${time}`);
  next();
};


async function readData(){
  
}

module.exports = logger;
