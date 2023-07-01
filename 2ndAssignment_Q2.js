// Q2. Given a string, reverse each word in the sentence
function reverseWords(sentence) {
  // Split the sentence into an array of words
  let words = sentence.split(' ');

  // Iterate over each word and reverse it
  let reversedWords = words.map(word => {
    // Reverse each word using string manipulation
    let reversedWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  });

  // Join the reversed words back into a sentence
  let reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example usage
let sentence = "The Phoenix Guild is the best Women in Web3 Community";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);


// Q3. Create a function, pass two parameters in it and print the product of the two numbers.
function printProduct(a, b) {
  let product = a * b;
  console.log("The product is: " + product);
}

// Example usage
printProduct(5, 7);


// Q4. Remove all occurrences of a number in an array. The given array is:
let array = [1, 2, 3, 1, 4, 6, 4, 4];
let numberToRemove = 1;

let resultArray = array.filter(function(element) {
  return element !== numberToRemove;
});

console.log(resultArray);


// Q5. Given two strings, return true if they are anagrams of one another. Strings are: "Study" and "Dusty"
function areAnagrams(str1, str2) {
  // Remove whitespace and convert strings to lowercase
  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  // Check if the lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to arrays and sort them
  let arr1 = Array.from(str1).sort();
  let arr2 = Array.from(str2).sort();

  // Compare the sorted arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Example usage
let str1 = "Study";
let str2 = "Dusty";
console.log(areAnagrams(str1, str2));
