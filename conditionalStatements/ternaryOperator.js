/* Exercise
Refactor, or edit, the first if...else block to use a ternary operator.
Refactor the second if...else block to use a ternary operator.
Refactor the third if...else block to use a ternary operator.
*/

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// Refactor, or edit, the first if...else block to use a ternary operator.
isLocked ? console.log('You will need a key to open the door.')
:console.log('You will not need a key to open the door.');

// Refactor the second if...else block to use a ternary operator.
isCorrect ? console.log('Correct!')
: console.log('Incorrect!');

// Refactor the third if...else block to use a ternary operator.
favoritePhrase === 'Love That!' ? console.log('I love that!')
: console.log("I don't love that!");