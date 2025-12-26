# Secret Message

Secret Message is not an app, just practicing array methods.

Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck” to see a project walkthrough video.

Tasks
8/8 complete
Mark the tasks as complete by checking them off
1.
Use an array method to remove the last string of the array secretMessage.

You can read about the .pop() method in the MDN documentation.

2.
Great! You can check your work by logging the .length of the array.

At this point, the length should be one less than the original length.

You can use this throughout your code to check your work.

console.log(array.length);

Copy to Clipboard

3.
Use an array method to add the words 'to' and 'Program' as separate strings to the end of the secretMessage array.

You can call .push() like this:

array.push('wordOne', 'wordTwo');

Copy to Clipboard

You can read about the .push() method in the MDN documentation.

4.
Replace the string 'easily' in the array with 'right' by accessing its index and assigning the new value.

You can replace an array element like this:

array[oldWordIndex] = 'newWord';

Copy to Clipboard

5.
Use an array method to remove the first string of the array.

You can read about the .shift() method in the MDN documentation.

6.
Use an array method to add the string 'Programming' to the beginning of the array.

Call .unshift() like this:

array.unshift('newWord');

Copy to Clipboard

You can read about the .unshift() method in the MDN documentation.

7.
Use an array method to remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know,'.

Call .splice() like this:

array.splice(indexToStart, numberOfIndices, 'stringToAdd');

Copy to Clipboard

You can read about the .splice() method in the MDN documentation.

8.
On one line, use console.log() and .join() to print the secret message as a sentence.

Use the console.log() and .join() methods to print the secret message as a sentence like this:

console.log(array.join(' '));

Copy to Clipboard

Note that we used ' ' (a space character) as the argument in the join() method to combine the array elements into a sentence.

The final output should be:

Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program
