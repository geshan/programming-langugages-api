const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const programmingLanguagesRouter = require('./routes/programmingLanguages');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/programming-languages', programmingLanguagesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
