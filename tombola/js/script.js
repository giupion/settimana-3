
function appendicelle() {
    let tombola = document.querySelector('#tombola')


    //querySelector fuori dal for


    for (let i = 1; i <= 76; i++) {
        // const  dayCellNode = document.createElement('div');
        //dayCellNode.className = 'day';

        //crei la cella 
        let Cella = document.createElement('div');
        //metti numeri nella cella
        Cella.innerText = [i];
        tombola.appendChild(Cella);//appendi celle al div
        Cella.className = 'celle'; //applica classe alle celle


        console.log(Cella);


    }

}

appendicelle()


let button = document.querySelector("button")
button.type = "submit";
button.innerText = "Genera un numero casuale"
button.style.margin = "5px"
button.addEventListener('click', estraiNumber);


function estraiNumber() {



    let numerestratto = Math.round(Math.random() * 77);
    console.log(numerestratto)
    console.dir(numerestratto)
}

estraiNumber()



function corrispondenzaRandomCelle() {

    

}






