var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
    {
        title: 'Classics for Pleasure',
        genre: 'Non-Fiction',
        author: 'Michael Dirda',
        bookId: '249203',
        read: false
        },
    {
        title: 'A Confederacy of Dunces',
        genre: 'Fiction',
        author: 'John Kennedy Toole',
        bookId: '310612',
        read: true
        },
    {
        title: 'Car Talk',
        genre: 'Non-Fiction',
        author: ['Tom Maglioozi', 'Ray Magliozzi'],
        bookId: '49004',
        read: false
        },
    {
        title: 'Where Wizards Stay Up Late',
        genre: 'Non-Fiction',
        author: ['Katie Hafner', 'Matthew Lynon'],
        bookId: '281818',
        read: false
        },
    {
        title: 'The Return of the Dancing Master',
        genre: 'Fiction',
        author: 'Henning Mankell',
        bookId: '39797',
        read: false
        },
    {
        title: 'Steve Jobs',
        genre: 'Biography',
        author: 'Walter Issaacson',
        bookId: '11084145',
        read: false
        },
    {
        title: 'TED Talks: The Official TED Guide to Public Speaking',
        genre: 'Non-Fiction',
        author: 'CHris Anderson',
        bookId: '25897871',
        read: false
        },
    {
        title: 'Chronology of Tech History',
        genre: 'Non-Ficton',
        author: 'Tom Merritt',
        bookId: '16093177',
        read: false
        }
    ];

var router = function (nav) {
        
            adminRouter.route('/addBooks')
                .get(function (req, res) {
                    var url =
                        'mongodb://localhost:27017/libraryApp';
        
                    mongodb.connect(url, function (err, db) {
                        var collection = db.collection('books');
                        collection.insertMany(books,
                            function (err, results) {
                                res.send(results);
                                db.close();
                            }
                        );
        
                    });
        
                    //res.send('inserting books');
                });
        
            return adminRouter;
        };
        
        module.exports = router;