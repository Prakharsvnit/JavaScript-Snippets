// continue statement is used to skip the current iteration of the loop
// and the control flow of the program goes to the next iteration.

for (let i = 1; i <= 5; i++) {    
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// When continue is used inside of two nested loops, 
// continue skips the current iteration of the inner loop ONLY.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

/* Output:
i = 1, j = 1
i = 1, j = 3
i = 2, j = 1
i = 2, j = 3
i = 3, j = 1
i = 3, j = 3
*/

// Replace Line 16 with -> if(i == 2)

/* Output:
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
*/