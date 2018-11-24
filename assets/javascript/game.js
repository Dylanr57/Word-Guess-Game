var guessCount = 10;
var guess = "";

var userGuesses = [];

var guessPosition = 0;

var wordSpace = [];

var wordList = ["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard","magic","dice"];

var wordLength = 0;

var answer = [];

var wordSpaceString = "";

document.onkeyup = function(event) {

    var word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);

    

    wordLength = word.length;

    for (i=0; i < wordLength; i++) {
        answer[i] = word.charAt(i);
        wordSpace[i] = "_"
    }

    wordText.textContent = wordSpace;

    console.log(answer);
    console.log(wordSpace);

        document.onkeyup = function(event) {

            guess = event.key;
            console.log("Guess = " + guess);

            //wordSpace = answer;
            console.log("word space =" + wordSpace);
            console.log("answer = "+ answer);
    
            wordSpaceString = wordSpace.join("");
            console.log(wordSpaceString);
            
                if (wordSpaceString === word || guessCount === 0) {

                    guessCount = 10;
                    answer = [];
                    wordSpace = [];
 
                    
                    word = wordList[Math.floor(Math.random() * wordList.length)];
                    
                    wordLength = word.length;
                    
                    for (i=0; i < wordLength; i++) {
                        answer[i] = word.charAt(i);
                        wordSpace[i] = "_"
                    }

                    userGuesses = [];
                    guessPosition = 0;
                }
                else {
                    console.log(answer);
                    var match = false;
                    for (i = 0; i < wordLength; i++) {
                        if (guess === answer[i]) {
                            wordSpace[i] = guess;
                            console.log(wordSpace[i]);
                            var match = true;
                        }
                    }
                    console.log(match);
                    if (match === false) {
                        guessCount--;
                        console.log("# of guesses left = " + guessCount);
                        userGuesses[guessPosition] = guess;
                        guessPosition++;
                        console.log("User guesses = " + userGuesses);
                    }


            }

            wordText.textContent = wordSpace;
            guessCountText.textContent = guessCount;
            userGuessesText.textContent = userGuesses;

        }
}
