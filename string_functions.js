const readline = require('readline');

// setting up readline interface
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// asking for the users name
r1.question("Enter your name...", function(name){
 
  var length = name.length;
  var firstLetter = name[0];
  var lastLetter = name[name.length - 1];

  r1.question("Enter the nth position of the character you want to find...", function(n){
    n = parseInt(n);
    if(n <= 0 || n > length) {
      console.log("Please enter a valid nth position");
    } else {
      var nthChar = name[n-1];
      console.log("Hi, " + name + ". Your Name has "+ length + " characters. The first letter is " + firstLetter + " and the last letter is " + lastLetter + "\n");
      console.log("The character in place "+ n + " is " + nthChar )
    }

    r1.close();
  });

  

});








