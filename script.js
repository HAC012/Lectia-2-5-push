console.log("3 + 1")

/* com. in mai multe linii
*/
// com in o singura linie
/*  
        TIPURI DE DATE
    I) Fundamentale"
    1)siruri de caractere - String(s)
    2) Numere (matematice)
    3) Boolean : a) True = 1    b) False = 0
    4) Null
    5) Undefined

    II) Complexe:
    1) Liste
    2) Obiecte

    Operatori:
    1)nAritmetici - primesc nr la intrare si ne intorc inapoi nr
    2)De comparatie: a) verificarea egalitatii: == verifica egalitatea fara tipul de date. === verificarea tipul de date si valoarea interna
                     b) verificare inegalitatii: != verifica inegalitatea fara tipul de date. !== verificarea tipul de date si valoarea interna
                     c) comparatia matematica - exeplu de utilizare la sortarea alfabetica

 */
let prenume = 'Cristian'
let nume = ' Hadei'

console.log(prenume + nume)

prenume = 'Caterinchik'
console.log(prenume)
let limbaj = "JavaScript"
let framework = 'VueJS'
let propozitie = limbaj + ':' + framework

let pret1 = 500.321
let pret2 = 150.1234
let total = pret1 + pret2
console.log(total.toPrecision(5))
console.log("Adunare: ", 3+5)
console.log("Scadere: ", 3-5)
console.log("Ridicare la putere: ", 3** 2)

// Stergerea intregului text din consola console.clear

console.log("Cristian" + 2025)
console.log('103' + 2025)

console.log('103' - 2025)
console.log('Cristian' - 2025)  // NaN - Not a Number - eroare ce indica ca nu poate fi 
console.log(prenume)
// Metode aplicate la tipurile de date trebuie sa aiba ()
console.log(prenume.toUpperCase())
console.log(prenume.replace("a", "b"))

let parola_corecta = true
let tos = false
console.log(parola_corecta)
let mesaj;

console.log(mesaj)

let parola_user = 'qwerty'
let parola_server = 'qwerty'
console.log(parola_user === parola_server)
console.log(parola_user !== parola_server)
console.log(4>5)