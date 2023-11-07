//...nomeVar

let arr=[5,7,9];
let arr2=[...arr];//copia
console.log(...arr)//prendo solo i valori dell'array
console.log(arr2)

//prendo solo i valori all'interno lo scarto l array per fare i lclone

let obj1={name:"Mario",
lastname:"Rossi",
age:45,
city:"Roma"}

 //obj1=obj2 //stessa locazione di memoria no copia)
let obj2=Object.assign({},obj1); //ogniuno ha vita proprio

let obj3={...obj1,
city:"Milano"} //clono e sovrascrivo


function func(...args){console.log(arguments)}
func(9,5,6,7)
//crea un arguments arrau dove metto i valori

//(...args) //non so quanti paramentri assegnare...

//func2(...args) //mette valori li scarta e lim ette nell array arguments

//func(...arr3) //scarto e metto valori come funzione


//destrutturazione

let gimmi={name:"Mario",
lastname:"Rossi",
age:45,
city:"Roma"}


let {city:citta,name}=gimmi;

console.log(name)
console.log(citta)


let mar = [5,7,9];
let [x,y,z]=mar

//console.log(x,y,z)

//`ciao sono${gimmi.name} $()` //ottimo

const array=[] //rendo costante la memoria ma ci posso lavorare

//let arrMethod;

//arrMethod.concat(newArr)


//let newArrConcat=[...arrMethod,...arraynew]

//slice e splice non lavorano su array principale

let altroArray=['Uno','Due','Tre']

for(let i=0;i<altroArray.length;i++)
{console.log(i+":"+altroArray[i])}
for(const key in altroArray){
    console.log(key)
} //stampa key come indice

for(const key in gimmi){console.log(gimmi[key])}
//const pippo pure non solo key, accede chiavi elemento e stampa valori

for(const value of altroArray){console.log(value)}

//accedere ai valori



 function f(params){}
//funzione espressione funzona solo dopo averla definita
f()//errore
let f=function(params){}
f()//ok
let f=(params)=>{}

//function a posto della freccia

()=>returnValue

//arrow function se chiamata ritorno valore

//anche senza assegnarli un nome

//forEach() per iterare array
function callFunc(val){console.log(val)}

//funzione che se richiamo e gli apsso un valroe stampa ciao
//callFunc('ciao')

//altroArray.forEach(
   // function (val){console.log(val)}})
//)

//stessa cosa 
//itero array e per ogni elemento conenuto nell 'array richiamo funzione, prendo elemento array stampa , per ogni elemento sp

//funzioni anonime le utilizzo libero memoria sono quando le chiamo

altroArray.forEach(val,index)=>console.log(index+ val))

//versione ottimizzata che sfrutta memoria solo quando chiamata e annonima

//for each solo per leggere no return

//map per modificare elementi array
let newArrMap=altroArray.map(val=>val+'!!!')

//prendi elementi array e gli concateni una stringa return a differenza dell'altro.modifica un elemento dentro array e ne ritorna uno nuovo modificato