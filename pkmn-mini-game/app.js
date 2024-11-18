function randomStarter() {
    const options = ['charmander','bulbasaur','squirtle'];
    const random = Math.floor(Math.random() * options.length)
    return options[random];
  } 
  /*
  this mini game its the same as papers,rock,scissor , there are three options 
  and the random will return just one.
  */

  let trainerScore = 0;
  let gymLeaderScore = 0;
  
  function hasTrainerWon(trainer, gymLeader) {
    return (
        (trainer === 'charmander' && gymLeader === 'bulbasaur') ||
        (trainer === 'bulbasaur' && gymLeader === 'squirtle') ||
        (trainer === 'squirtle' && gymLeader === 'charmander')
    )
  }

  function getBattleResult(trainerOption) {
    const = gymLeaderResult = randomStarter;

    if(hasTrainerWon(trainerOption, gymLeaderResult)) {
      trainerScore++;
      return `Trainer wins! ${trainerOption} beats ${gymLeaderResult}`
    } else if( trainerOption === gymLeaderResult) {
      return `It's a tie! Both chose ${trainerOption}`
    } else {
      return `Gym leader Wins! ${gymLeaderResult} beats ${trainerOption}`
    }
  }
  
  