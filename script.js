/* OPEN CHART */
function openChart() {
    let coin = document.getElementById("SymbolCoin").value
        .trim()
        .replace("/", "")
        .toUpperCase()

    if (coin.length < 1) {
        alert("Masukkin coin yang bener dongg!!")
        return
    }

    if (!coin.endsWith("IDR")) {
        coin = coin + "IDR"
    }

    window.open(`https://indodax.com/chart/${coin}`, "_blank")
}

/* ENTER SUPPORT */
document.getElementById("SymbolCoin").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    openChart()
  }
})

/* MATRIX */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const letters = "01";
const fontSize = 14;
let columns;
let drops;

function init() {
  columns = canvas.width / fontSize;
  drops = [];
  for (let i = 0; i < columns; i++) drops[i] = 1;
}
init();

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#22ff88";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);
