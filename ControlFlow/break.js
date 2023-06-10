// break statement is used to terminate the loop immediately when it is encountered

// break with for Loop
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}

// When break is used inside a nested loops, break terminates the inner loop ONLY.
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

/* Output:
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
*/

// Replace Line 15 with -> if(j == 2)

/* Output:
i = 1, j = 1
i = 2, j = 1
i = 3, j = 1
*/