var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
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