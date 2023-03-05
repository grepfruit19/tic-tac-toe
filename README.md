# Tic Tac Toe

Sample repository for teaching basics of coding.

# Day 2

We're going to learn some of the basics of JavaScript by creating a data structure that stores a tic-tac-toe board.

If you've never

A data structure is how we store information. The most basic data structure (and the one we'll be using today) is called an array, or a list.

An array stores thing in a sequence. You can declare an array in JS like this:

```js
// Declare an empty array
const emptyArray = [];

// You can also declare an array with things already in it
const arrayWithStuff = ["one", "two", "three"];

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
const grid = [[], [], []];
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
