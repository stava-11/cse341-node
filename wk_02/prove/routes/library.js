const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const books = adminData.books;
  res.render('library', {
    books: books,
    pageTitle: 'Library',
    path: '/',
    hasbooks: books.length > 0,
    activeShop: true,
    bookCSS: true
  });
});

module.exports = router;
