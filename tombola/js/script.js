
let numeriTabellone=76;
.addEventListener('click',()=>{}) 
//creare codice che si adatta elle esigenze con un click adattare da 76 a 1111110
function generatabellone(num){

let board=document.querySelector('.main-board m-auto board')


    for (let i=0;i<numeriTabellone;i++){

let div=document.createElement('div');
div.ClassName='cell';
div.innerText=i+1
board.appendChild(div)
console.log(div)
    }
}


function numRandom(num){let rand=}


//si mette dentro funzione anonuma per eveitare che al carimacameto non abbia subito numero casuale senza cliccare

// ele.innertext===num numero casuale generato uguale a testo elemento div....fai qualcosa e fai un for each di tutti i div

//applico una classe agli elementi ele...highlight...cosi si illmina...con css



























//PROGRAMMA MIO FUNGE MA SOPRA FACCIO QUELLO DELL?AMICO
/*function appendicelle() {
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
       //corrispondenza ..per ogni cella o elemento dell 'array div tabellone
      // per i numeri selezionati con indice numeroestratto-1(cioe esce 76 per esempio...allora si fa 76-1 75, cio cella con indice 75 perche array ha indice da zero, quel elemento basilare lo colori)
    
    })
    })
}
estrainumero() */













