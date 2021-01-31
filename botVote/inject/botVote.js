/*
    Luiz Bruno 31/01/2021 00:06 
*/



// Iniciando a função
window.addEventListener("load", olhar)

//Função ao iniciar
function olhar(){

    // Função que clica no objeto
    function clickVotar(){ 
        document.querySelector('#btn-votar').click(); 
    } 

    // tempo de cliques
    setInterval(clickVotar, 1000);//1000 = 1 Segundo
}