const express = require('express');
const app = express();
const format = require('date-format');
const PORT = 4000;
const cors = require('cors');

// cross origin error
app.use(cors());

//swagger integration
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello From Earth</h1>');
});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    username: 'goku',
    followers: 10,
    folowing: 12,
    date: format.asString('yyyy-MM-dd hh:mm:ss.SSS', new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
  const linkedin = {
    username: 'professional goku',
    followers: 60,
    folowing: 12,
    date: format.asString('yyyy-MM-dd hh:mm:ss.SSS', new Date()),
  };

  res.status(200).json(linkedin);
});

app.get('/api/v1/youtube', (req, res) => {
  const linkedin = {
    username: '_goku',
    subscribers: 60,
    subscribed: 12,
    date: format.asString('yyyy-MM-dd hh:mm:ss.SSS', new Date()),
  };

  res.status(200).json(linkedin);
});

app.get('/api/v1/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ param: id });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
