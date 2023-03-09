# Tic Tac Toe

Sample repository for teaching basics of coding.

# Day 2.5 -- Homework

Assuming you've installed nvm, pull down this repo and run `npm install`. This will install some external packages required to run the homework.

After running that, try running `npm run test` in your terminal. This will run some tests that are in `/test/homework.spec.js`. Open that file and you will see some problems in this format:

```js
function example() {
  return 5;
}

test("Example - write the function above that returns the number 5", () => {
  expect(example()).toBe(5);
});
```

Fill out the functions above each test so that they do what the test asks you. If you do it right, then you should see a green checkmark when you run `npm run test` next to that specific test, like this.

```
PASS  test/homework.spec.js
  ✓ Example - write the function above that returns the number 5 (1 ms)
  ✓ Write a function that uses a loop to generate an array of increasing numbers (2 ms)
  ✓ Write a function that takes in an array and returns a new array contains the first X elements
  ✓ Write a function that creates a 2D array of a given size. Each element should be a 0
  ✓ Given a 2D array, write a function that will grab the bottom right element. (1 ms)
```

If not, you'll get a message showing what exactly went wrong. You'll probably see that message as soon as you run `npm run test`, since those functions aren't filled out yet.

Work on one problem at a time and run the tests after you complete each function. You may want to comment out the tests for a problem you're not currently working on, just so your terminal stays a little cleaner. Let me know if you have any questions!

# Day 2

We're going to learn some of the basics of JavaScript by creating a data structure that stores a tic-tac-toe board.

A data structure is how we store information. The most basic data structure (and the one we'll be using today) is called an array, or a list.

An array stores thing in a sequence. You can declare an array in JS like this:

```js
// Declare an empty array
const emptyArray = [];

// You can also declare an array with things already in it
const arrayWithStuff = ["zero", "one", "two"];

// You can fetch things from an array using brackets, like this.
const fetch = arrayWithStuff[0]; // This will assign "one" to fetch.

// You can also add things to an array with a similar notation:
arrayWithStuff[4] = "four"; // This will add four to the end.

// You can also modify existing elements in an array as such
arrayWithStuff[0] = "oops"; // This will replace the "one" above with "oops"
```

Arrays can also contain other arrays, like this

```js
const arrayInArray = [[]];

// And maybe you can see where we're going with this:
const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

/*
    1. What's the initial state?
    2. Check row/column/diagonal win condition
    3. How to represent X vs O
    4. Who's turn is it?
    5. How to reset to initial state?
    6. How to add an X or O to the board? Where is it gonna be etc
*/
```

Arrays in arrays are also known as 2D arrays. So lets figure out how we'd represent our tic-tac-toe using a 2D array.

Once we've done that, what does the game of tic-tac-toe actually entail? What game states and conditions do we need to check for?

# Day 1

## Getting Started

1. Download and install Git from [here](https://git-scm.com/download/win)
2. Open your terminal in VSCode.
3. Navigate to the folder you want to store this project.
4. Clone the repository by typing in `git clone https://github.com/grepfruit19/tic-tac-toe.git`.
5. Open index.html and styles.css in your VSCode.

## Optional Pre-Reading

[HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)

[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

We're going to play around with HTML divs, and try to learn how to arrange them. Learning how to arrange divs is probably the most complicated part of basic HTML/CSS.
