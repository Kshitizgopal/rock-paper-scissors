let gameResult = JSON.parse(localStorage.getItem('gameResult')) || {
  wins : 0 ,
  loses : 0,
  tie : 0
  };

  updateScoreElement();

  // if(!gameResult){
  //   gameResult = {
  //     wins : 0 ,
  //     loses : 0,
  //     tie : 0
  //   }
  // }
  function playGame(playerTaken){
    const computerMove= pickCompuerMove();
    let result = '';
    if(playerTaken === 'scissors'){
      if(computerMove === 'rock'){
        result = 'You lose.';
      }else if(computerMove === 'paper'){
        result = 'You win.';
      }else if(computerMove === 'scissors'){
        result = 'Tie.';
      }
    
    }else if(playerTaken === 'paper'){
      if(computerMove === 'rock'){
        result = 'You win.';
      }else if(computerMove === 'paper'){
        result = 'Tie.';
      }else if(computerMove === 'scissors'){
        result = 'You lose.';
      }
      }else if(playerTaken === 'rock'){
        if(computerMove === 'rock'){
          result = 'Tie.';
        }else if(computerMove === 'paper'){
          result = 'You lose.';
        }else if(computerMove === 'scissors'){
          result = 'You win.';
        }
      }
      if(result === 'You win.'){
        gameResult.wins++;
      }else if(result === 'You lose.'){
        gameResult.loses++;
      }else if(result ==='Tie.'){
        gameResult.tie++;
      }
      
      localStorage.setItem('gameResult',JSON.stringify(gameResult));
      
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-move').innerHTML = `You
<img src="Rock Paper Scissors/${playerTaken}-emoji.png" class="move-icon">
<img src="Rock Paper Scissors/${computerMove}-emoji.png" class="move-icon"> computer`

      updateScoreElement();

  }

  function updateScoreElement(){
    document.querySelector('.js-score')
      .innerHTML = `Wins : ${gameResult.wins}, Loses : ${gameResult.loses}, Ties : ${gameResult.tie}`;

  }

  function pickCompuerMove(){
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 &&
      randomNumber < 1 / 3){
      computerMove = 'rock';
    }else if(randomNumber >= 1 / 3 && 
      randomNumber < 2 /3){
      computerMove = 'paper'
    }else if(randomNumber >= 2 / 3 && 
      randomNumber < 1){
      computerMove = 'scissors'
    }
    return computerMove;
  }
