var button = document.createElement("button");
button.style.margin = '10px';
button.innerHTML = "Flashlight: We're readyy!!";
document.body.appendChild(button);

//schrijf hier tussen je code

const lijstBenodigdheden = ["Light is on","Light is off"]; // Bericht van de benodigdheden
const lijstAchtergronden = ["Yellow","Black"]; // kleuren van de achtergronden
const lijstBerichten = ["Switch the lights off","Switch the lights on"]; // berichten die getoond worden op de knop
var counter = 0 // hier wordt getelt in de lijst

function benodigdheden(){
    if (counter > 1) {counter = 0}
    button.innerHTML = lijstBerichten[counter];
    console.log(lijstBenodigdheden[counter]);
    document.body.style.backgroundColor = lijstAchtergronden[counter];
    counter += 1
};

button.onclick = benodigdheden;

// schijf hier tussen je code

//achtergrondkleuren wijzigen (check)
//button wijzigen (check)
//op de maat (check)

