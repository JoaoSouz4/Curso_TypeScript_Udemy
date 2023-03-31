"use strict";
//Inerface é uma outra maneira de nomear um tipode objeto;
//Podemos determinar um nome para o tipo;
//E também escolher quais as propriedades e seus tipos; 
function showCoords(obj) {
    console.log(obj.x);
    console.log(obj.y);
    console.log(obj.z);
    if (obj.plus == true || obj.plus === false)
        console.log(obj.plus);
}
const coordObject = {
    x: 10,
    y: 20,
    z: 30,
    plus: true
};
showCoords(coordObject);
