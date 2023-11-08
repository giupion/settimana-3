
window.alert()
//nodi sono oggetti cioe compongono pagina, con javascitp manipolo nodi
//BOM serie oggeti che modellano browser
//tutte le funzionalità di browser bom
//DOM per modificare la pagina

console.log(window)
console.log(window.document)
console.dir(window.document)
//selezione un nodo html tramite id

let h1=window.document.getElementById("titolo")
console.log("h1")
console.dir(h1)

h1.innerText="testo modificato tramite javascript"
h1.style.textdecoration="underline"
h1.style.textAlign="center";
console.log(h1.innerText)



