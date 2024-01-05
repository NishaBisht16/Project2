let userscore=0;
let compuscore=0;

let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg')
let userpara=document.querySelector('#user-score');
let comppara=document.querySelector('#comp-score');


const gencompChoice=()=>{
    let options=["rock" ,"paper" ,"scissor"];
    let randidx=Math.floor(Math.random()*3);
     return options[randidx];
};

const drawGame=()=>{
    msg.innerText="Game was draw,play again";
    msg.style.backgroundColor='#081b31';
};

const showinner=(userwin,userChoice,compChoice)=>{
    if(userwin)
    {
        userscore++;
        userpara.innerText=userscore;
        
        msg.innerText=`you win ! your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor='green';
    }
    else{
        compuscore++;
        comppara.innerText=compuscore;
        msg.innerText=`you lost ! your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor='red';
    }

};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = gencompChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showinner(userWin, userChoice, compChoice);
    }
  };
  
choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});