VanillaTilt.init(document.querySelector(".card"), {
    max: 12,
    speed: 30,
    reverse: true,
    reset: false,
    transition: true,
    easing: "cubic-bezier(5.65,5.65,5.65,5.65)"
});

const element = document.querySelector('.card')

const fontSize = element.style.color;
console.log(fontSize); // 2em

