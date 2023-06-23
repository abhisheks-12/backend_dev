const express = require('express');
const PORT = 4000;
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
// cross origin error
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

// swagger docs integration
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const songs = [
  {
    id: '11',
    name: 'rap god',
    rating: 7.87,
  },

  {
    id: '15',
    name: 'venom',
    rating: 8.7,
  },

  {
    id: '16',
    name: 'self',
    rating: 9.87,
  },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/v1/greet', (req, res) => {
  res.send('Hello from hell');
});

app.get('/api/v1/songsobj', (req, res) => {
  res.status(200).json(songs);
});

app.get('/api/v1/songarr', (req, res) => {
  res.status(200).json(songs);
});

app.get('/api/v1/songs/:id', (req, res) => {
  const { id } = req.params;
  let matchingName = songs.find((song) => song.id === id);
  return res.status(200).json(matchingName);
});

// create route
app.post('/api/v1/createSong', (req, res) => {
  const data = req.body;
  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).json({ error: 'Page not found' });
});

app.get('/api/v1/searchSong', (req, res) => {
  const { song, rating } = req.query;
  res.json({ song, rating });
});

app.post('/api/v1/upload', (req, res) => {
 
  const sampleFile = req.files.sampleFile;

  const path = __dirname + '/Images/' + Date.now() + '.jpg';

  sampleFile.mv(path, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json('File Uploaded');
  });

 
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.......`);
});
