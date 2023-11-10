

function appendicelle() {
    let tab = document.querySelector('#tabellone')


    //querySelector fuori dal for


    for (let i = 1; i <= 76; i++) {
        // const  dayCellNode = document.createElement('div');
        //dayCellNode.className = 'day';

        //crei la cella 
        let Cella = document.createElement('div');
        //metti numeri nella cella
        Cella.innerText = [i];
        tab.appendChild(Cella);//appendi celle al div
        Cella.className = 'celle'; //applica classe alle celle


        console.log(Cella);


    }

}

appendicelle()







function estrainumero() {
    let button = document.querySelector('button')  //selezionati il button
    button.addEventListener('click', () => {                                //crea una arrow con il addeventlistner ed i vari math random ecc..
        let numeroestratto = (Math.ceil(Math.random()*76))
        let numeriselezionati = document.querySelectorAll('#tabellone div')
        numeriselezionati.forEach(cella => {
        numeriselezionati[numeroestratto-1].style.backgroundColor = "blue";    //applica il colore che desideri (il -1 perchè l'array parte da 0 )
        })
    })
}
estrainumero() 













