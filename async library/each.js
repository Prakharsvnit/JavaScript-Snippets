/*
This function applies a function to each item in an array, in parallel. 
The main callback is called after all the function calls have completed. 
If any of the function calls pass an error to the callback, the main callback is immediately called with the error.
*/

const async = require('async');

let arr = ['Task 1', 'Task 2', 'Task 3'];

async.each(arr, function(task, callback) {
    console.log('Processing ' + task);
    callback();
}, function(err) {
    if (err) {
        console.log('A task failed to process');
    } else {
        console.log('All tasks have been processed successfully');
    }
});