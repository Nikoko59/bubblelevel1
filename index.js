const countDisplay = document.getElementById("win");
const displayLevel = document.querySelector("#demo");

let counter = 0;

const bulAnimation = () => {
  const bulle = document.createElement("span");
  document.body.appendChild(bulle);
  bulle.classList.add("bullet");

  const size = Math.random() * 200 + 100 + "px";
  bulle.style.height = size;
  bulle.style.width = size;

  bulle.style.top = Math.random() * 100 + 50 + "%";
  bulle.style.left = Math.random() * 50 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bulle.style.setProperty("--left ", Math.random() * 100 * plusMinus + "%");

  bulle.addEventListener("click", () => {
    counter++;
    countDisplay.textContent = counter;
    bulle.remove();
  });

  switch (counter) {
    case 10:
      countDisplay.textContent = "1er Level atteint";
      countDisplay.style.color = "red";
      break;
    case 20:
      countDisplay.textContent = "2ème Level atteint";
      countDisplay.style.color = "blue";
      displayLevel.textContent = "Tu deviens bon";
      break;
    case 70:
      countDisplay.textContent = "3ème Level atteint";
      countDisplay.style.color = "green";
      displayLevel.textContent = "WAOUH Super";
      setTimeout(() => {
        bulle.remove();
      }, 500);
      break;

    default:
      null;
  }

  //   if (counter === 10) {
  //     countDisplay.textContent = "Premier Niveau Atteint ";
  //     countDisplay.style.color = "blue";
  //     countDisplay.style.fontSize = "3rem";
  //   } else if (counter === 20) {
  //     countDisplay.textContent = "Deuxième Niveau Atteint";

  //   }

  setTimeout(() => {
    bulle.remove();
  }, 4000);
};

setInterval(bulAnimation, 800);
