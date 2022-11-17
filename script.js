function typewriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, index) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * index);
    });
}

const title = document.querySelector('#home>#txthome>h2');
typewriter(title)


function typewriterTWO(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, index) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 150 * index);
    });
}

const item1 = document.getElementById("item1")
typewriterTWO(item1)

const item2 = document.getElementById("item2")
typewriterTWO(item2)

const item3 = document.getElementById("item3")
typewriterTWO(item3)

const item4 = document.getElementById("item4")
typewriterTWO(item4)

const item5 = document.getElementById("item5")
typewriterTWO(item5)