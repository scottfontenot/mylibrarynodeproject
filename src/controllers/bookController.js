var mongodb = require('mongodb').MongoClient;
//var objectId = require('mongodb').ObjectID;
var ObjectId = require('mongodb').ObjectID;

var bookController = function(bookService, nav) {
    var middleware = function(req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };
    var getIndex = function(req, res) {
        var url =
            'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');

            collection.find({}).toArray(
                function(err, results) {
                    res.render('bookListView', {
                        title: 'The Home Library Project',
                        nav: nav,
                        books: results
                    });
                }
            );
        });

    };

    var getById = function(req, res) {
        //console.log(req.params.id);
        var id = new ObjectId(req.params.id);
       // console.log(id);
        var url =
            'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');

            collection.findOne({
                    _id: id
                },
                function(err, results) {
                    //console.log(results);
                    if (results.bookId) {
                        bookService//failing here
                            .getBookById(results.bookId,
                                function(err, book) {
                                    //console.log(book);
                                    results.book = book;
                                    res.render('bookView', {
                                        title: 'The Home Library Project',
                                        nav: nav,
                                        book: results
                                    });
                                });
                    } else {
                        res.render('bookView', {
                            title: 'The Home Library Project',
                            nav: nav,
                            book: results
                        });
                    }
                }
            );//collection.findOne
        });
    };

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;
