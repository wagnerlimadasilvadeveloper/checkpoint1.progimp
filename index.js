let readlineSync = require('readline-sync');
console.log(`

    1 - Pipoca – 10 segundos
    2 - Macarrão – 8 segundos
    3 - Carne – 15 segundos
    4 - Feijão – 12 segundos
    5 - Brigadeiro – 8 segundos
`);

// escolha uma opçãoo
let tempopadrao = 0;
let opcao = readlineSync.question('Selecione um item do MENU. ');
let tempo = readlineSync.questionInt('Insira o tempo de preparo em segundos ');

if(opcao == '1'){
    console.log("Pipoca")
    tempopadrao = 10
}
else if(opcao == '2'){
    console.log("Macarrão")
    tempopadrao = 8
}
else if (opcao == '3'){
    console.log("Carne")
    tempopadrao = 15
}
else if (opcao == '4'){
    console.log("Feijão")
    tempopadrao = 12
}
else if (opcao == '5'){
    console.log("Brigadeiro")
    tempopadrao = 8
}
else {
    console.log("Prato inexistente")
}


if(tempo != tempopadrao){
    if(tempo/tempopadrao >= 2 && tempo/tempopadrao <= 3){
        console.log("Queimou")
    }
    else if (tempo/tempopadrao > 3){
        console.log("kabumm")
    }
    else if (tempo/tempopadrao < 1){
        console.log("Tempo insuficiente")
        
    }
    else {
        console.log("Prato pronto, bom apetite!!!")
    }
}
else {
    console.log("Prato pronto, bom apetite!!!")
}