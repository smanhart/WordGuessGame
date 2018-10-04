//Variables
var wordList = [
    sunflower,
    elderberry,
    snapdragon,
    lavender,
    honeysuckle,
    bluebells,
    columbine,
    orchid,
    violet,
    bromeliad
];

var winCount = 0;
var guessCount = 0;









//Functions

document.onkeyup = function() {
    var activeWord = wordList[Math.floor(Math.random()*wordList.length)];
    
    console.log(activeWord);


    // var activeWord = wordList[Math.floor(Math.random()*wordList.length)];
//  if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
//      alert("you've made a valid guess, you guessed " + userGuess);
//  } else {
//      alert("BAD GUESS, you guessed " + userGuess);
 }

} 