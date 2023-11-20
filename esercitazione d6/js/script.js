
//da d4 extra a d6



/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area=function area(l1,l2){

  
    return  l1*l2
}

let rettangolo=area(4,5)
console.log(rettangolo)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


const crazySum=function (num1,num2){

    if(num1===num2){return (num1+num2)*3}
    else{return num1+num2;}
    
}

console.log(crazySum(3,3))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n,num2=19){

    if(n>19){return Math.abs(n-num2)*3}
    else{return n-num2}
}

console.log(crazyDiff(25))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */








/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/


let newStringa="";
function concatenaStringa(Stringa1,Stringa2){
Stringa1.substring(0,2)

Stringa2.substring(Stringa2.length-3,Stringa2.length)

newStringa=Stringa1.substring(0,2).toUpperCase()+Stringa2.substring(Stringa2.length-3,Stringa2.length).toUpperCase();
return newStringa;
}


console.log(concatenaStringa("Gimmi","Giorno"))
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function array10(n){
let scatola10=[];
//n come paramentro che posso mettere poi sotto sull invocazione come argomento e metterlo a funzione!
for(i=0;i<n;i++) //metto numero come parametro..e lo metto alla condizione di for...cosi fintanto chè i è minore uguale a 10 faccio il push nell'array di un numero random. appena arriva a 11 esce dal programma e mi stampa "finito! hai aggiunto 10 numeri"
   {let randomico=Math.round(Math.random()*10) //condizione vera genera numero random
    scatola10.push(randomico) //pusha su scatola 10 numero random

}
console.log("finito hai pushato 10 numeri "+scatola10)
return scatola10


}
console.log(array10(5)) //riga 225 funzioan solo se ritorni il valore, chiamando la funzione! cosa devo ritornare come valorese stampo ? chiediti questo...per il return....scatola10
const scatola10=array10(10)
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function array10(n){
    let scatola10=[];
    //n come paramentro che posso mettere poi sotto sull invocazione come argomento e metterlo a funzione!
    for(i=0;i<n;i++) //metto numero come parametro..e lo metto alla condizione di for...cosi fintanto chè i è minore uguale a 10 faccio il push nell'array di un numero random. appena arriva a 11 esce dal programma e mi stampa "finito! hai aggiunto 10 numeri"
       {let randomico=Math.round(Math.random()*10) //condizione vera genera numero random
        
       
       scatola10.push(randomico) //pusha su scatola 10 numero random
    
    }
//come scrivere scatola10(function (ele){return ele%2===0}) funzione anonima a cui metto nome 
console.log(scatola10.filter(ele=>ele%2===0))
//
}
//ele=ele%2 è una funzione anonima con return implicito a cui metto nome filtrami
//all'array ritorno cosa? che valore metto? un filtro.
const filtrami=(array)=>{array.filter(ele=>ele%2===0)}
//nome funzione filtrami
filtrami([4,6,5,4,7])

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

//function (array) { } ometti function qua

const sommaforEach=(array)=>{
    let somma=0
   array.forEach(ele=>console.log(somma+=ele))
return somma}
console.log(sommaforEach([4,6,5,4,7]))

//passo un paramentro array e poi metto nell invocazioe argometo e ritorno la somma

//ritorno cosa visualizzo col console log quando specifico paramentro argomento






/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const riducimi=(array)=>{ return array.reduce((acculumus,valorecorrente)=>
(acculumus+valorecorrente,11))}

console.log(riducimi([1,4,5,6,5,4]))

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
//crea un nuovo array map 
const mappami=(array,n)=>{return array.map(ele=>(ele+n))}

console.log (mappami([54,5,6,7,8],4))
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/const mappastringhe=(array)=>{return array.map(ele=>ele.length)}

console.log(mappastringhe(["gim","gom","fd","ggh","fd"]))


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

//funzione per creare array con valori dispari da 1 a 99


function arraydispari(){

    let scatoladispari=[];
    for(i=0;i<100;i++)
     //scorro tutti i numeri da 1 a 99
    //abituati a scrivere codice e commento
//non entrare in modalita copia codice a cazzo finche non riesce, ragiona!
    { //se nel ciclo di i...cioe i=0 mi chiedo 0 da resto diverso da zero? no non è dispari e faccio break, se i 1 l if va e faccio il push nell array vuoto
    if(i%2!==0){scatoladispari.push(i)}

//solo perchè else break ha funzioanto na volta non significa rifunga
}
return scatoladispari
}

function genera100(){
    let scatolanumeri=[];
    for(i=0;i<100;i++){
        scatolanumeri.push(i)}
        return scatolanumeri}

console.log(genera100())

const arraydis=(array)=>{array.forEach(ele=>{if (ele%2!==0){return ele}} )}

console.log(arraydis(genera100()))

//una piccola magia con foreach, la differenza sta nel fatto che cmq for ti fa anche tutti gli elementi cosa che for each non fa...lavora solo con gli elementi....
//for each esegue una funzioone for (genera100 ) per ogni elemento array
console.log(arraydispari())
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  
  /* ESERCIZIO 9 (forEach)
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
  */



    const old=(arr)=>{
        let filmcaso=arr[0];
        arr.forEach(film=>
            {if (film.Year<filmcaso.Year)
            
            { filmcaso=film}
        
    })
    return filmcaso
    }

    const getFilmVecchio=function(arr){
        let old=arr[0]; //metto un film qualsiasi confronto e se è piu vecchio lo sostituisci
        arr.forEach(film=>{ //la variabile deve essere generica in una funzione non puoi mettere movies
      //film è generico non inerente a movies non puoi richiamarla
      if(film.Year<old.Year){old=film}}) //il controllo lo esegui sulla proprieta anno

      //cofonronit e se si sovrascrivi ogni volta fino a che esce condizione verificata e ok...lo ritorni
      return old};
      console.log(getFilmVecchio(movies));

//qua metto sempre array che devo passar
console.log(old(movies))
  
  /* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */

    const numerofilm=(numerofilm)=>{
        console.log(movies.length)
    }

numerofilm()
  
  /* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */
//devi ritornare tutto una funzione di una funzioen che richaiama un array
    const titolifilm=(array)=>{return array.map (film=> film.Title)
    }
    console.log(titolifilm(movies))
  
  /* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */

    const filtramillennio=(array)=>{return array.filter(film=>parseInt(film.Year)>=1999)
    }
  
    console.log(filtramillennio(movies))
  /* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */

    const sommaanni=(array)=>{return array.reduce((accumulatore,valore)=>accumulatore+parseInt(valore.Year),0)
   }
  
    console.log(sommaanni(movies))



  
  /* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */


    const cercafilm=(array,id)=>{return array.find((ele)=>ele.imdbID === id)}
    
    
  console.log(cercafilm(movies,'tt4154796'))
  /* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */

  const getMovieByYear=(array,year) =>{return array.findIndex((ele)=>(ele.Year===year)) } 
  console.log( getMovieByYear(movies,"2019"))


   /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
       const changeTitle = function () {

        let h1=document.querySelector("h1") //selezioni h1 nel DOM
        let cipolla=h1.innerText="Questo è un nuovo titolo" //cambi la proprietà text in h1 
       return cipolla
       }
       console.log(changeTitle())

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        let h1=document.querySelector("h1")
     let cipollino=h1.className="myHeading" //aggiungo a h1 la class my heading
     console.dir(h1) //spunta h1.heading
     return cipollino
       }

       console.log(addClassToTitle())
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {

let div=document.querySelectorAll("div>  p") //div >p selettore di figli //div p selettore di discendenti cioè un discendente di un div con id specifico per esempio
div.forEach(ele=>ele.innerText="miiii")
//let p=div.innerText="miiiiiii"
return 
}

      changePcontent()




 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
let link=document.querySelectorAll('a:not(footer a)')
console.dir(link)
let supi= link.forEach(collegamento=>collegamento.href="https://www.google.com")

return supi
    };
       
 console.log(changeUrls())



//fidati piu di te
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {
const secondalista=document.querySelector("#secondList")
        const li=document.createElement("li")
const appendi=secondalista.appendChild(li)
appendi.innerText="4th"
console.log(appendi)
console.dir(secondalista)
return appendi
       }

       console.log(addToTheSecond ())
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        const primodivselezione=document.querySelector("div")
        let p=document.createElement("p")
        let appendip=primodivselezione.appendChild(p)
        appendip.innerText="miiiiiiizzica"
        console.log(appendip)
        console.dir(appendip)
return appendip

       }
       addParagraph()
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {

        const firstul=document.querySelector("#firstList")
        console.dir(firstul)
        firstul.style.visibility="hidden";
       }
       hideFirstUl()
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        const allul=document.querySelectorAll("ul")
        allul.forEach(li=>li.style.backgroundColor="green")

       }
       paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 //da provare con ciclofor
       const makeItClickable = function () {
        let h1=document.querySelector("h1");
        let testo=h1.innerText  //seleziona attributo testo altrimenti non fai un cazzo 
      testo=testo.slice(0,-1) //metti nel testo lo slice -1
       h1.innerText=testo //rimetti risultato ogni volta su h1.iinertext risovrascrivi, se non sovrascrivi di nuovo non fa un cazz
        console.log(testo)
        return testo

       }

      

       console.log(makeItClickable())
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {

        const footer=document.querySelector("footer h3>a"); //h3 discendente a figlio
console.dir(footer)
const txt=footer.href
alert(txt)
       }

      
       
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {
let divtab=document.querySelector("#tableArea")

let table=document.createElement("table")
table.style.border = '1px solid black';

let tr=document.createElement("tr") //riga

let th1=document.createElement("th") //celle
th1.innerText="immagine"
let th2=document.createElement("th") //quantità
th2.innerText="Nome Prodotto"
let th3=document.createElement("th")
th3.innerText="Quantità"
let th4=document.createElement("th")
th4.innerText="Prezzo"
let th5=document.createElement("th")

let appenditr1=tr.appendChild(th1)
let appenditr2=tr.appendChild(th2)
let appenditr3=tr.appendChild(th3)
let appenditr4=tr.appendChild(th4)
let appenditr5=tr.appendChild(th5)
let appendith=table.appendChild(tr)
let  appendidivtab=divtab.appendChild(table)


       }
      console.log( generateTable()) 



      
        
     
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {
        let divTableArea = document.querySelector('#tableArea');
        let tr2=document.createElement("tr")
        tr2.innerText="gimmi"
        let appendiriga2=divTableArea.appendChild(tr2)
       return appendiriga2
      }

       addRow()
       
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}
 
 