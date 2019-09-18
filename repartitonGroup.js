var list = []
count = 0

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function assign() {
    let people=parseInt(prompt('Entrez le nombre de participant'))
    let name = prompt("Entrez un nom")
    list.push(name)
    while(list.length !== people){
        let name= prompt("Entrez un nom")
        list.push(name)
        
    }
shuffle(list)
var nbrgrp=parseInt(prompt("entrez le nombre de groupe"));
var group= Math.floor(list.length/nbrgrp)
for(i=0; i < nbrgrp; i++){
let tab=list.slice(count,group)
list.splice(count, group)
document.getElementsByTagName("p")[0].innerHTML = `${document.getElementsByTagName("p")[0].innerHTML}group${i} : ${tab} <br>`
}
}
