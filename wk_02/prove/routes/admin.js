
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const fs = require('fs');

const fileJSON = './storage/storage.json';

const books = [];



// /admin/add-book => GET
router.get('/add-book', (req, res, next) => {
  res.render('add-book', {
    pageTitle: 'Add book',
    path: '/admin/add-book',
    formsCSS: true,
    bookCSS: true,
    activeAddbook: true
  });
});

router.post('/add-book', (req, res, next) => {
  books.push({ title: req.body.title, summary: req.body.summary, author: req.body.author });
  console.log(books);

  res.redirect('/');
});

exports.routes = router;
exports.books = books;
