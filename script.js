
let x;
let ComputerChoice;

function getComputerChoice(){

    x = Math.floor(Math.random()*3);
    if(x==0){
        ComputerChoice="Rock";
    }
    else if(x==1){
        ComputerChoice="Paper";
    }
    else {
        ComputerChoice="Scissors";
    }

    return ComputerChoice;
    
}



let HumanChoice;

function getHumanChoice(){
    return prompt("Choose rock, paper or sccissors");
}



let HumanScore = 0, ComputerScore = 0;

function playRound(HumanChoice, ComputerChoice){
    if(HumanChoice.toLowerCase()=="rock"){
        if(ComputerChoice=="Rock")
            {
                console.log("Tie");
            }
        if(ComputerChoice=="Scissors"){
            HumanScore++;
            console.log("Human wins this round");
        }
        if(ComputerChoice=="Paper"){
            ComputerScore++;
            console.log("Computer wins this round");
        }
    }
    else if(HumanChoice.toLowerCase()=="paper"){
        if(ComputerChoice=="Paper"){
            console.log("Tie");
        }
        if(ComputerChoice=="Rock"){
            HumanScore++;
            console.log("Human wins this round");
        }
        if(ComputerChoice=="Scissors"){
            ComputerScore++;
            console.log("Computer wins this round");
        }
    }
    else if(HumanChoice.toLowerCase()=="scissors"){
        if(ComputerChoice=="Scissors"){
            console.log("Tie");
        }
        if(ComputerChoice=="Paper"){
            HumanScore++;
            console.log("Human wins this round");
        }
        if(ComputerChoice=="Rock"){
            ComputerScore++;
            console.log("Computer wins this round");
        }
    }
    else if(HumanChoice.toLowerCase()!= "rock" || HumanChoice.toLowerCase()!="paper" || HumanChoice.toLowerCase()!="scissors" ){
        console.log("Invalid choice");
    }
}

let human; //= getHumanChoice();
let comp; //= getComputerChoice();
console.log("Computer choice:" + comp);
console.log("Human choice:" + human);

//playRound(human, comp);

function playGame(){
    for(let i =0; i<5; i++){
        human = getHumanChoice();
        comp = getComputerChoice();
        console.log("Computer choice:" + comp);
        console.log("Human choice:" + human);
        playRound(human, comp);
        console.log("Computer score: "+ ComputerScore);
        console.log("Human scopre: "+ HumanScore);
    }
}

playGame();

function announceWinner(){
    if (ComputerScore>HumanScore)
        console.log("Computer  is the winner");
    else if(HumanScore>ComputerScore)
        console.log("Human is the winner") ;
    else console.log ("Tie");
}

announceWinner();   