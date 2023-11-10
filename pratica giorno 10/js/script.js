//seleziono nodo che deve selezionare evento, senza sporcare html

//applicare evento al nodo btn.onclick ma prima seleziono nodo btns=document.queryselector(#btn2)
//a onclick metti il copro delle funzione btn2.onclick=funclick deve sostituire alla funzione originaria, il browser si preoccupa di invocarlo

//let btn3.document.query     btn3.addeventlistener("evento da ascoltaer",funzione da eseguire)  

//ti mette in ascolto quando browser 

//invio dati form sul server e li mette in un database

//dati sbagliati fai il controllo prima per non far perder tempo al server

//controllo html blando
//2 controllo con js
//preventDevefault function (e) e poi e.preventdefault...cosi non submita e refresha
//prender dati dai form e pulirili
//document.form[0]accedo al primo form non devi inviarli html ma javascritp per questo preventdefautl
//document.form[1].elements[0] secondo form primo elemento
//submit devo dire a quale pagina inviare httpp non mantiene memoria stateless, perde i dati refreshando
//oppure metto button e tolgo type submit e metto button


let h1=document.createElement("h1")
let body=document.querySelector("body")
let form=document.createElement("form")
let input=document.createElement("input")
let button=document.createElement("button")
//let ul=document.createElement("ul")
 //   let li=document.createElement("li")

h1.innerText="La mia To-Do List";

button.type = "submit";
//button.style.padding="px"
button.style.margin="5px"

button.innerText="+"

console.log(body.appendChild(h1))

console.log(body.appendChild(form))
console.log(form.appendChild(input))
console.log(form.appendChild(button))
//console.log(form.appendChild(ul))
//console.log(ul.appendChild(li))



//console.log(ul.appendChild(li))
button.addEventListener('click',aggiungitodo);

function aggiungitodo(event){
    
    event.preventDefault();
    //let ul=document.createElement("ul")
    //let li=document.createElement("li")
    //console.log(form.appendChild(ul))
//console.log(ul.appendChild(li))

let input = document.querySelector("input") //seleziono bottone
let text = document.createTextNode(input.value)
 //creo nodo di testo  individuando input value
//li.appendChild(text)
li.style.listStyleType="none";
let task=(input.value.trim) //con trim pulisci e togli spazioprima
if(task.length>2){
    let li=document.createElement("li")
li.innerText=task;
let ul=document.querysSelector('ul')
ul.appendChild(li)
input.value="" }//pulishi il campo
taskcomplete()
 if(input.value==="")return;
 const buttondelete=document.createElement("button")
 buttondelete.className="cancellali"
 li.appendChild(buttondelete);//appendo il testo a li
 buttondelete.style.margin="2px"
buttondelete.innerText="-"
buttondelete.type="delete";

li.addEventListener('click',eliminadallalista);

function eliminadallalista(event){
    //conviene fare con classe
    event.preventDefault();
   //if(//è presente lo style)
    li.style.color = "red"
    li.style.textDecoration="line-through";
    
    }


    buttondelete.addEventListener('click',eliminabottone);

function eliminabottone(event){
    
    event.preventDefault();
   
    
    ul.removeChild(li)
    input.value=""
    
    }

    

//ul.removeChild(li)
   
}
//let input=documenti.queryselector("form input")
//console.dir(input)vedi dove ha scritto ciao su value!)


function taskcomplete(){

    let li=document.querySelectorAll("ul");
    console.log(li)
    
    for(let i=0;i>li.length;i++)
    //this evento che ha scatenato oggetto this.className stampi valore elemento cliccato
    {li[i].addEventListener('click',function(){this.classList.toggle})
}}
   
//applicare una classe this.className=completato
toggle//clicco metto classe e clicco tolgo classe


//e.target.className nodo che ha scatenato evento //ci applica una classe completato
//se stampi  e.target, vedi che ha proprieta target cioe li

//e.target.classsNme=e.target.classNmae==='completato' ? '' : 'completato'
//se ce completato lo metto se lo tolgo ecco come si fa

//li.innerHtml=<span>+task</span>//contenere task con span
//let span=document.createlement('span)
//valore del task messo dentro lo span


//btn.addeventlistener(('click,(e')=>{console.log(e.target.parentNode)
//let li=e.targetprantnode})
//se voglio sapere il parent del bottone