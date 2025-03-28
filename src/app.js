import "bootstrap";
import "./style.css";

window.onload = function() {

const paloUp = document.querySelector('#palo-up');
const cardValue = document.querySelector('#value');
const paloDown = document.querySelector('#palo-down');
const button = document.querySelector('#generateCard');

const items = {
    "corazon": "♥",
    "diamante": "♦",
    "trebol": "♣",
    "palo": "♠"
};

const valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generarCarta = () => {
    let palo = randomElement(Object.values(items));
    let valor = randomElement(valores);

    paloUp.innerText = palo;
    cardValue.innerText = valor;
    paloDown.innerText = palo;

    if (palo === "♥" || palo === "♦") {
        paloUp.style.color = "red";
        cardValue.style.color = "red";
        paloDown.style.color = "red";
    } else {
        paloUp.style.color = "black";
        cardValue.style.color = "black";
        paloDown.style.color = "black";
    }
};

button.onclick = generarCarta;
generarCarta();

setInterval(() => {
  location.reload();
}, 10000);

//  console.log("Hello Rigo from the console!");
};

