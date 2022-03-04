const tombolSatu = document.getElemetById("inc");
const tombolDua = document.getElemetById("dec");
const paragraf = document.getElemetById("show");

let count = 0;
const increase = () => {
    show.innerHTML = ++count;
}

const decrease = () => {
    show.innerHTML = --count;
}

inc.addEventListener("click", increase);
dec.addEventListener("click", decrease);
