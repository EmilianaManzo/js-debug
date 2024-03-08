/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i); 
}

// corretto
// for (let i = 0; i < 5; i++) {
//     console.log(i); 
// }

/**
1. questo ciclo for cicla per 5 volte partendo da 0
2. si sono presenti errori di sintassi (i > 5  non viene riconosciuto e crea un loop infinito, il simbolo è <)
3. no
 */



ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// corretto
// function addIfEven(num) {
//     if (num % 2 == 0) {
//         return num + 5;
//     }
//     return num;
// }

//console.log(addIfEven()); 
/**
1. restituisce un numero, ma se il numero è pari a questo si deve aggiungere 5 
2. si sono presenti errori di sintassi percè in parentesi ci deve essere il doppio uguale
3. si non viene mai richiamata la funzione
 */




ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// corretto
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

/**
1. è una funzione al cui interno si ripete un ciclo che arriva a 5 
2. si sono presenti errori di sintassi perchè gli elementi all'interno della parentesi del ciclo for devono essere separati da ;
3. no
 */




// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


//corretto
// function displayEvenNumbers() {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     const evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0){
//             evenNumbers.push(numbers[i]);
//         }
//     }
    
//     return evenNumbers;
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/**
1. questa funzione restituisce un array di numeri pari che vengono presi da un array con numeri sia pari che dispari, attraverso un ciclo for vengono ciclati e se rispettano la condizione dell' if allora vengono pushati nell'array dei numeri pari
2. si, sono 7 in ordine: 
    -le  due let che sono const 
    -il -1 dopo numbers.length non serve perchè c'è il simbolo < , se fosse stato <= allora ci sarebbe dovuto essere 
    -il punto e virgola dopo l'incremento del contatore nella parentesi del ciclo for 
    -il numbers nella condizione di if deve avere l'indice, il doppio uguale nella condizione dell'if
    -non deve esserci il punto e virgola fuori dalla parentesi della condizione di if
    -all'interno della parentesi del push deve esserci il nome dell'array ad indice i 
    -il return deve essere fuori dalle parentesi del for
3. si : -il -1 dopo numbers.length non serve perchè c'è il simbolo < , se fosse stato <= allora ci sarebbe dovuto essere 
        -all'interno della parentesi del push deve esserci il nome dell'array ad indice i 
        -il return deve essere fuori dalle parentesi del for
 */