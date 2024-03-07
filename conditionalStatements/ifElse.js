/* Exercise
Using the let keyword, declare a variable named sale. Assign the value true to it.
Now create an if statement. Provide the if statement a condition of sale.
Inside the code block of the if statement, console.log() the string 'Time to buy!'.
Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.
Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.
Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'
*/

let sale = true;
sale = false;

if (sale == true){
  console.log('Time to buy!');
}
else{
    console.log('Time to wait for a sale.');
}