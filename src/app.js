require('./style.css')

window.onload = function(){
    let pronombre = ["nuestra", "ella", "la"];
    let adjetivo = ["increible", "extraordinaria", "estupefaciente"];
    let sustantivo = ["perra", "niña", "ornitorrinco"];
    let dominio = [".com", ".us", ".net", ".fr"];

    let i, j, k, l;
     for (i = 0; i < pronombre.length; i++) {
         for (j = 0; j < adjetivo.length; j++) {
             for (k = 0; k < sustantivo.length; k++) {
                 for(l=0; l < dominio.length; l++){

                 console.log(pronombre[i] + adjetivo[j] + sustantivo[k] + dominio[l]);
                 }
             }
         }
     }
 }
