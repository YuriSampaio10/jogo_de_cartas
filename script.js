function mostaBaralho() {
    const naipes = ["Paus", "Ouros", "Copas", "Espadas"];
    const valores = ["Ás", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Rainha", "Rei"];
    const baralho = [];

    for (const naipe of naipes) {
        elementRandom = naipes[Math.floor(Math.random() * naipes.length)];
    }
    console.log(elementRandom);


    for (const valor of valores) {
        elementRandom2 = valores[Math.floor(Math.random() * valores.length)];
    }
    console.log(elementRandom2);
}



mostaBaralho();