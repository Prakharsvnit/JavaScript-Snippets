const async = require('async');

async.waterfall([
    function(callback) {
        callback(null, 'result1');
    },
    function(result1, callback) {
        console.log(result1);
        callback(null, 'result2');
    },
    function(result2, callback) {
        console.log(result2);
        callback(null, 'finalResult');
    }
], function(err, finalResult) {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Final result:', finalResult);
    }
});

/*
This function runs an array of functions in series, each passing their results to the next in the array. 
However, if any of the functions pass an error to the callback, the next function is not executed and 
the main callback is immediately called with the error.
*/