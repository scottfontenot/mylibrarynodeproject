var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = function () {
    
    var getBookById = function (id, cb) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/249203.xml?key=AIorOaMoo8vcTxMXIFrnuQ'
        };
        var callback = function(response) {
            var str = '';
            //as data comes back from http req, append data to a string
            response.on('data', function(chunk) {
                str += chunk;
            });
            response.on('end', function() {
                console.log(str);
                //send string to xml parser, call the callback that bookController sent in with the result
                parser.parseString(str, 
                    function(err, result) {
                        cb(null, 
                            result.GoodreadsResponse.book);
                    });
            });
        };
        
        http.request(options, callback).end();
    };
        
    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;
