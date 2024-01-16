const async = require('async');

async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'Task 1');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'Task 2');
        }, 100);
    }
],

function(err, results) {
    console.log(results);
});

/*

Run the tasks collection of functions in parallel, without waiting until the previous function has completed. 
If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error. 
Once the tasks have completed, the results are passed to the final callback as an array.

Reference: https://caolan.github.io/async/v3/
*/
