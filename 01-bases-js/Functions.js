"use strict";
function saludar() {
    return 'holaaaa!!!!';
}
var heroes = [
    {
        id: 1,
        heroe: 'Batman'
    },
    {
        id: 2,
        heroe: 'superman',
    }
];
var existHero = function (id) { return heroes.some(function (el) { return el.id === id; }); };
console.log(existHero(1));
