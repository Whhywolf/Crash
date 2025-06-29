let multiplier = 1.0;
let interval = setInterval(() => {
  multiplier += 0.01;
  document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";
  if (Math.random() < 0.005 + multiplier / 200) {
    crash();
  }
}, 50);

function crash() {
  clearInterval(interval);
  document.getElementById("multiplier").innerText = "💥 Crashed at " + multiplier.toFixed(2) + "x";
  document.getElementById("crashSound").play();
}
