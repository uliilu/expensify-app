// ###################################################################################################
// Anfang object destructuring: mit {} geschwungenen Klammern
// ###################################################################################################
// //console.log('destructuring');

// const person = {
//     name: 'Uli',
//     age: 52,
//     location: {
//         city: 'Bonn',
//         temp: 12
//     }
// };

// // const name = person.name;
// // const age = person.age;
// // Beispiel "object destructuring" Das Gleiche wird durch folgende Zeile erreicht:
// // const {name,age} = person;
// // Sollte z.B. "name" nicht definiert sein, kann ein default Wert verwendet werden:
// const { name: vorname = 'Anonym', age: alter} = person;
// console.log(`${vorname} ist ${alter} Jahre alt!`);

// // const {city,temp} = person.location;
// // Möchte man z.B. statt temp, temperatur als Variablennamen verwenden, wie folgt vorgehen:
// const {city,temp: temperatur} = person.location;


// if(city && temperatur) {
//     console.log(`Bei ${name} in ${city} sind es ${temperatur} Grad!`);
// }

// const book = {
//     title: 'Ego is my Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`Der Herausgeber ist ${publisherName}`);
// ###################################################################################################
// Ende object destructuring
// ###################################################################################################


// ###################################################################################################
// Anfang array destructuring: mit [] eckigen Klammern
// ###################################################################################################

const address = ['Luisenstraße 128', 'Bonn', '53129', 'Deutschland'];
//const address = [];

//const [strasse, stadt, plz, land] = address;
// console.log(`Du befindest Dich grad in der ${strasse} in ${plz} ${stadt}!`);

// wird der letzte Array-Eintrag nicht benötigt, einfach weglassen (hier "land"=[3]):
//const [strasse, stadt, plz] = address;
// console.log(`Du befindest Dich grad in der ${strasse} in ${plz} ${stadt}!`);

// wird einer der Einträge des Arrays nicht benötigt, nur ein Komma als "Platzhalter" einfügen:
// const [,,plz] = address;
// console.log(`Du befindest Dich grad im PLZ-Bereich ${plz}!`);

// default-Werte können auch gesetzt werden: so könnte ein Array sogar völlig leer sein
// und es funktioniert trotzdem
const [,, plz = '34567'] = address;
console.log(`Du befindest Dich grad im PLZ-Bereich ${plz}!`);

const kaffeeArtikel = ['Kaffee (heiß)', '€2,00', '€2,50', '€2,80'];

const [kaffee,,preisM] = kaffeeArtikel;

console.log(`Ein mittlerer '${kaffee}' kostet ${preisM}`);