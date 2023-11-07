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

 obj1=obj2 //stessa locazione di memoria no copia)
let obj2=Object.assign({},obj1); //ogniuno ha vita proprio

let obj3={...obj1,
city:"Milano"} //clono e sovrascrivo