const image = document.getElementById("dice-img");
const notification = document.getElementById("notification");
const h2 = document.getElementById("score");
const roll = document.getElementById("roll");
const myButton = document.getElementById("winRefresh");
let totalScore = 0;
const reStart = ()=> {
    totalScore = 0;
    h2.innerHTML = totalScore;
    notification.innerHTML = "Start again to get to 20!";
    roll.disabled = false
}


roll.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  totalScore += randomNumber;
  console.log(totalScore)

  image.src = `dice${randomNumber}.png`;
  h2.innerHTML = totalScore;
  
  if (totalScore >= 20) {
    notification.innerHTML = "Winner- Game Over";
     roll.disabled = true

  } else if (randomNumber == 1) {
    notification.innerHTML = "loser";
    totalScore = 0;
  } else {
    notification.innerHTML = "Keep it up, get to 20!";
  }
});


myButton.addEventListener("click", () => {
  reStart();
});
