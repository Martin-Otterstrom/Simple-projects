const monke = document.querySelector(`.monke`);
const MONKE = document.querySelector(`.MONKE`);

// Add event listener
monke.addEventListener(`click`, ()=> {
    if(MONKE.classList.contains(`MONKE`)) {
        MONKE.classList.add(`active`);
        monke.classList.remove(`active`);
    }
});

MONKE.addEventListener(`click`, ()=> {
    if(monke.classList.contains(`monke`)) {
        monke.classList.add(`active`);
        MONKE.classList.remove(`active`)
    }
})