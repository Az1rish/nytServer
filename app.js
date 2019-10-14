const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common')); // let's see what 'common' format looks like

const books = require('./books-data.js');

app.get('/books', (req, res) => {
  // ALL OUR CODE HERE
    const { search = ""} = req.query;

    let results = books
        .filter(book =>
            book
                .title
                .toLowerCase()
                .includes(search.toLowerCase()));

  res.json(results);
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});