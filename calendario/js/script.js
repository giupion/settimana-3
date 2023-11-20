
let now = new Date()
console.dir(new Date())
//per avere anno corrente
let calendar=document.querySelector("#calendar")
const getYear=now.getFullYear()
console.log(getYear)
const getMonth=now.getMonth()
let appointments = [];
console.log(getMonth)
const lastDayDate=new Date(getYear,getMonth+1,0) //0 è il giorno questo è il setting get month array quindi parte da 0 e fai piu uno per avere mese corrente
console.log(lastDayDate)

//ci occore mettere l'ultimo giorno del mese in una variabile

const lastDayMonth=lastDayDate.getDate()
console.log(lastDayMonth)


   
//creiamo una cella del calendario per ogni giorno del mese
//su calendar
//prima crea tutti gli elelementi e poi appenndi
for(let i=0; i<=lastDayMonth;i++){

    const dayCellNode=document.createElement("div")
dayCellNode.className="day";
const day=document.createElement("h3")

//ovviamente i giorni partono da 1 quindi

day.innerText=i+1 //scrivi nella cella il numero che parte da1

const today=now.getDate();

//recuperato il giorno oggi, diamogli un colore diverso

if(today===i+1){day.style.backgroundColor="violet"}
//appendiamo

dayCellNode.appendChild(day)
calendar.appendChild(dayCellNode)



    for(let i = 0; i < lastDayMonth; i++) {
        appointments[i] = []
    }

    dayCellNode.onclick=function(e){

        dayCellNode.classList.add('selected')

        const currentDayAppointments=appointments[i]

        if(currentDayAppointments.length>0){

            showAppointments[i]
        }else{document.getElementById('appointments').style.display="none"}
    }
}

