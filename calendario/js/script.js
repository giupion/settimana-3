
  //lastdaymonth[i].
    //console.log(i) //stampo tutti i giorni del mese iterando parto da 1 perche i giorni partono da 1!
   
function creaCalendario() {
//tutte le variabili che definisco fuori posso usare ovunque
//variabili dentro scope di funzione posso usarle solo nella funzione in cui le ho defnite

    let now = new Date()

    console.log(now)
    let getMonth = now.getMonth() + 1 //il mese lo calcola come un array

    console.log(getMonth)


    let getYear = now.getFullYear()
    console.dir(now) //presente oggetto getfullyear

    let lastdaydate = new Date(getYear, getMonth, 0)
    console.log(lastdaydate)
    lastdaymonth = lastdaydate.getDate()
 //console.log(lastdaymonth)
    
    for (let i = 1; i <= lastdaymonth; i++) {
        const  dayCellNode = document.createElement('div');
        dayCellNode.className = 'day';
        const day = document.createElement('h3');
        day.innertext = i;
        let today = now.getDate();
        if (today === i) { day.className = "color-epic" }
        dayCellNode.appendChild(day);
        let calendar = document.querySelector('#calendar')

        
        calendar.appendChild(dayCellNode);
    }}
    
creaCalendario()
  
    function nomeMese(m) {
        //passo mese sotto forma di numero e mi da il mese, faccio con switch case

        switch (m) {
            case 1:
                return "Gennaio"
            case 2: return "febbraio"
            case 3:
                return "Febbraio"
            case 4: return "marzo"
            case 5:
                return "Aprile"
            case 6: return "Maggio"
            case 7:
                return "Aprile"
            case 8: return "febbraio"
            case 9:
                return "Maggio"
            case 10: return "febbraio"
            case 11:
                return "Giugno"
            case 12: return "febbraio"

        }
    }


    //per itereare array di array giorni cmetto fuori cosicche altra funzione lo veda

    let appointments=[i]=[]

    //ad ogni indice un array

    //per accedere aray denrto array
    //scrivo dentro appointement [5][3]="test"



 








