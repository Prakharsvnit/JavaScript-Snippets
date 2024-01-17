/*
Run the functions in the tasks collection in series, each one running once the previous function has completed. 
If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error. 
Otherwise, callback receives an array of results when tasks have completed.
*/
const async = require('async');

async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
});

async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    // results is now equal to: {one: 1, two: 2}
});