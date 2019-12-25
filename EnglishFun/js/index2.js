var corWords = ["hello", "yellow", "snow", "show", "blow", "black", "blue", "whale", "wales", "france"];
var inCorWords = ["helo", "yalow", "snaw", "showd", "blon", "qate", "dbate", "datte", "francie"];
// letters to use to make speeling mistakes
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var totWords = 0;
var score = 0;
var scoreText = "Score: ";
var livesText = "Lives: ";
var points = 1;
var lives = 0;
var corMess = "correct";
var inCorMess = "incorrect, try again";
var blankText = "";

// hide items
document.getElementById("next-button").style.opacity = "0";
document.getElementById("word-holder").style.marginLeft = "100%";

function start(){
  totWords = document.getElementById("total-words").value;
  lives = document.getElementById("total-lives").value;
  
  // start the genrateWords function to generate words
  generateWords ();
}; // end start

// generate the words to choose from
function generateWords (){
  // reset
  var wordsArray = [ ];
  document.getElementById("message-box").innerHTML = blankText;
  document.getElementById("word-holder").innerHTML = blankText;
  document.getElementById("word-holder").style.marginLeft = "0%";
  // bring back answer button
  document.getElementById("answer-button").style.opacity = "1";
  document.getElementById("next-button").style.opacity = "0";

  // generate random number upto total words amount to use with the array position
  var randnum = Math.floor(Math.random() * totWords);
  // create elements loop
  for (a = 0; a <= totWords - 1; a++){
    correctWord = corWords[Math.floor(Math.random() * corWords.length)];
    // loop until hit random number if ( i == randnum ), add value="correct" to this element
    if ( a == randnum ){
      // select random word from the correctly spelt words list
      
      document.getElementById("word-holder").innerHTML += "<input id='id" + a + "' name='answer' class='answer' type='radio' value='" + corMess + "'> </input> <label for='answer'>" + correctWord + "</label>" ;
    } else {
      // 
      randLet = letter[Math.floor(Math.random() * letter.length)];
      
      var misspeltWord = correctWord + randLet;
      document.getElementById("word-holder").innerHTML += "<input id='id" + a + "' name='answer' class='answer' type='radio' value='" + randLet + "'> </input> <label for='answer'>" + misspeltWord + "</label>" ;
    }
  }
};
// on answer submit
function checkAnswer() {
  
  document.getElementById("message-box").innerHTML = blankText;
  var found_value = blankText;
  
  // loop through answers until find checked button and get value attribute
  for (var i = 0; i < document.forms[0].answer.length; i++) {
    
    if (document.forms[0].answer[i].checked === true) {
      found_value = document.forms[0].answer.value;
    } else {
      found_value = document.forms[0].answer.value;
    }
  }
  
  // match the checked radio button value against corMess
  // if correct
  if  (found_value == corMess){
    // add to score
    score += points;
    document.getElementById("score").innerHTML = scoreText + score;
    document.getElementById("message-box").innerHTML = corMess;
    document.getElementById("answer-button").style.opacity = "0";
    document.getElementById("next-button").style.opacity = "1";
    
    // if not correct
  } else {
    // when lives reach 0
    if(lives == 0){
      // hide buttons
      document.getElementById("answer-button").style.opacity = "0";
      
    } else {
      // remove a life
      lives -= 1;
      // display updated score
      document.getElementById("lives").innerHTML = livesText + lives;
      document.getElementById("message-box").innerHTML = inCorMess;
    }
  }
};