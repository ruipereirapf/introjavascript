/*Exercise
Change the value of wordCount so that it is truthy. This value should still be a number.
Change the value of favoritePhrase so that it is still a string but falsy.
*/

// Change the value of wordCount so that it is truthy. This value should still be a number.
// Change the value of favoritePhrase so that it is still a string but falsy.

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
