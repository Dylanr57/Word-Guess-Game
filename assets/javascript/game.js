// Number of guesses the user has left
var guessCount = 10;
// Current letter the user guessed
var guess = "";
// Array of user's guesses
var userGuesses = [];
// Where on the array the new guess goes
var guessPosition = 0;
// Array for where the word goes, the blank spaces and the letters that are correct
var wordSpace = [];
// Array of possible words
var wordList = ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard","magic","dice"];
// Length of the word
var wordLength = 0;
// Array of the letter of the word chosen
var answer = [];
// wordSpace as a string, used later for comparing what the user has guessed and the answer
var wordSpaceString = "";

// Starts the game when any key is pressed
document.onkeyup = function(event) {

    // Generates a random word from the array wordList and makes it the chosen word
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);

    // Makes wordLength equal the word's length
    wordLength = word.length;

    // Makes the length of wordSpace equal to the length of the word, and makes wordSpace eqal to the appropriate number of underscores.
    for (i=0; i < wordLength; i++) {
        answer[i] = word.charAt(i);
        wordSpace[i] = "_"
    }

    // Displays wordSpace on to the site
    wordText.textContent = wordSpace;

    console.log(answer);
    console.log(wordSpace);

        // Runs the following code when a user makes a guess by hitting a key
        document.onkeyup = function(event){

            // Sets the user guess to the key that was pressed
            guess = event.key;
            console.log("Guess = " + guess);

            console.log("word space =" + wordSpace);
            console.log("answer = "+ answer);
    
            // Makes wordSpace into a string called wordSpaceString
            wordSpaceString = wordSpace.join("");
            console.log(wordSpaceString);

                // Tests to see if the current wordSpace is the same as the chosen word or if the user has 0 guesses left
                if (wordSpaceString === word || guessCount === 0) {

                    answerText.textContent = word;

                    // Resets guess count to 10, and resets answer and wordSpace to empty arrays
                    guessCount = 10;
                    answer = [];
                    wordSpace = [];
 
                    // generates a new random word from the list
                    word = wordList[Math.floor(Math.random() * wordList.length)];
                    
                    // Makes wordLength equal the word's length
                    wordLength = word.length;
                    
                    // Makes the length of wordSpace equal to the length of the word, and makes wordSpace eqal to the appropriate number of underscores.
                    for (i=0; i < wordLength; i++) {
                        answer[i] = word.charAt(i);
                        wordSpace[i] = "_"
                    }

                    // Resets userGuesses to an empty array, and resets guessPosition back to 0
                    userGuesses = [];
                    guessPosition = 0;


                }

                // If wordSpace is not the same as the chosen word
                else {
                    console.log(answer);

                    // A new variable called match is made and set to false
                    var match = false;

                    // This runs the an if statement that tests to see if the if the letter the user guessed is anywhere in the array of letters that make up the chosen word. If there is a match then the variable match is set to true, otherwise match remains false.
                    for (i = 0; i < wordLength; i++) {
                        if (guess === answer[i]) {

                            // When there is a match, it puts the user's guess into the correct position in the array wordSpace.
                            wordSpace[i] = guess;
                            console.log(wordSpace[i]);

                            // This is there match is set to true
                            var match = true;
                        }
                    }
                    console.log(match);

                    // If there user's guess does not match any of the letters in the chosen word, this if statement is run.
                    if (match === false) {

                        // guessCount is reduced by 1
                        guessCount--;
                        console.log("# of guesses left = " + guessCount);
                        // The user's guess is added to the array of userGuesses at position guessPosition...
                        userGuesses[guessPosition] = guess;
                        // which is then increased by 1
                        guessPosition++;
                        console.log("User guesses = " + userGuesses);
                    }


                }

            wordText.textContent = wordSpace;
            guessCountText.textContent = guessCount;
            userGuessesText.textContent = userGuesses;

        }
}
