
/*
Javascript Coding For RPS Game
*/

function rpsGame(yourChoice) {

    var humanChoice, botChoice;

    console.log(yourChoice); //this gonna be print human choice or user choice on console ####[only for testing on console]

    humanChoice = yourChoice.id;
    botChoice = intToChoice(rpsBotRandomInt());  //here var 'botChoice' call 'rpsBotRandomInt' function and take a integer and then call 'intToChoice' function 

    console.log('Computer Choice: ' ,botChoice);  //this gonna be print bot choice or computer choice on console ####[only for testing on console]

    result = decideWinner(humanChoice, botChoice); //there var 'result' call 'decideWinner' function passing 'humanChoice' &  'botChoice' variable
    
    console.log(result); //this will print var 'result' on console ####[only for testing on console]

    message = finalMessage(result);  //this var will call 'finalMessage' function passing var 'result' like o,0; 0,1; 0.5,0.5;

    rpsFrontEnd (yourChoice.id, botChoice, message);  //at last this function will call to display result on index.html
}

/*
this function is called at last on front-end for play again button
*/
function playAgain() {
    window.open('index.html','_self');
}

/*
this function below will generate random int between 0, 1 & 2
*/
function rpsBotRandomInt() {
    return Math.floor(Math.random() * 3);
}

/*
if the rpsBotRandomInt function return 0, this function gonna return 'rock'
if the rpsBotRandomInt function return 1, this function gonna return 'paper'
if the rpsBotRandomInt function return 2, this function gonna return 'scissor'
*/
function intToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

/*
this function will return yourScoe & botScore
like,
if you choose 'rock' & bot will choose 'scissor' then yourScore will be 1
if you choose 'rock' & bot will choose 'rock' then yourScore will be 0.5
if you choose 'rock' & bot will choose 'paper' then yourScore will be 0
if you choose 'paper' & bot will choose 'scissor' then yourScore will be 1
if you choose 'paper' & bot will choose 'scissor' then yourScore will be 0.5
if you choose 'paper' & bot will choose 'scissor' then yourScore will be 0
if you choose 'sciissor' & bot will choose 'paper' then yourScore will be 1
if you choose 'scissor' & bot will choose 'scissor' then yourScore will be 0.5
if you choose 'scissor' & bot will choose 'rock' then yourScore will be 
*/
function decideWinner(humanChoice,computerChoice) {
    var rpsDatabase = {
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissor':0},
        'scissor': {'paper':1, 'scissor':0.5, 'rock':0}
    }
    yourScore = rpsDatabase[humanChoice][computerChoice];
    botScore = rpsDatabase[computerChoice][humanChoice];

    return [yourScore, botScore];
}

/*
this function will return 'message' & 'message-color' depending on yourScore
*/
function finalMessage([yourScore, botScore]) {
    if(yourScore === 0) {
        return {'message':'You lost!', 'color':'red'};
    }else if(yourScore === 0.5) {
        return {'message':'Game Tied', 'color':'yellow'};
    }else {
        return {'message':'You Won!', 'color':'green'};
    }
}

/*
this function will cal at last to display final result on index.html
by taking three argunment which we have to display as result
*/
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    //lets remove all images of frontend or index.html to print result
    document.getElementById('tips-in-h3').remove();
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    //creating div for each items i have to show for Front-End Result
    var yourChoiceDiv = document.createElement('div');
    var botChoiceDiv = document.createElement('div');

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    var playAgainButtonDiv = document.createElement('div');

    //assigning items in the elements i created for Front-end
    yourChoiceDiv.innerHTML ="<h3 style='color:blue'><u>Your Choice</u></h3>"
    botChoiceDiv.innerHTML = "<h3 style='color:red'><u>Bot Choice</u></h3>"

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);' >" ;
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'  height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,34,1);' >";
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px;'>" + finalMessage['message'] + "</h1>"

    playAgainButtonDiv.innerHTML = "<button onclick='playAgain()'>Play Again</button>";

    //showng items on Front-End index.html page
    document.getElementById('flex-box-co3').appendChild(yourChoiceDiv);
    document.getElementById('flex-box-co3').appendChild(botChoiceDiv);

    document.getElementById('result-container-for-js').appendChild(humanDiv);
    document.getElementById('result-container-for-js').appendChild(messageDiv);
    document.getElementById('result-container-for-js').appendChild(botDiv);

    document.getElementById('play-again-btn').appendChild(playAgainButtonDiv);
}
