// while creates a loop that executes a block as long as a condition evaluates to true.

console.log("while loop output")
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}

// do...while creates a loop that executes a block as long as condition inside while statement evaluates to true.
// do-while loop always executes the statement at least once before evaluating the expression.

console.log("do-while loop")
let index = 0;
do {
  console.log(index);
  index++;
} while (index < 5)

