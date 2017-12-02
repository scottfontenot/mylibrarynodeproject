var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
    var books = [
    {
        title: 'Classics for Pleasure',
        genre: 'Non-Fiction',
        author: 'Michael Dirda',
        read: false
        },
    {
        title: 'A Confederacy of Dunces',
        genre: 'Fiction',
        author: 'John Kennedy Toole',
        read: true
        },
    {
        title: 'Car Talk',
        genre: 'Non-Fiction',
        author: ['Tom Maglioozi', 'Ray Magliozzi'],
        read: false
        },
    {
        title: 'Where Wizards Stay Up Late',
        genre: 'Non-Fiction',
        author: ['Katie Hafner', 'Matthew Lynon'],
        read: false
        },
    {
        title: 'The Return of the Dancing Master',
        genre: 'Fiction',
        author: 'Henning Mankell',
        read: false
        },
    {
        title: 'Steve Jobs',
        genre: 'Biography',
        author: 'Walter Issaacson',
        read: false
        },
    {
        title: 'TED Talks: The Official TED Guide to Public Speaking',
        genre: 'Non-Fiction',
        author: 'CHris Anderson',
        read: false
        },
    {
        title: 'Chronology of Tech History',
        genre: 'Non-Ficton',
        author: 'Tom Merritt',
        read: false
        }
    ];
    bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
        });
    });

    bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Books',
            nav: nav,
            book: books[id]
        });
    });
    
    return bookRouter;
}
module.exports = router;

/*
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/about', function(req, res) {
        res.render('pages/about');
    });
};*/