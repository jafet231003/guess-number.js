/*console.log("Bienvendios a la clase de fundametos de programacion en enter tech!");

let nombre = "jafet sanchez";
console.log(nombre);
console.log(typeof nombre);

let edad = 22;
console.log(edad);
console.log(typeof edad);

let nombreususario=prompt("¿Como te llamas ?");

console.log("nombre" ,nombreususario);
console.log("Tipo de dato", typeof nombreususario);


let edadususario=prompt("¿Cuantos años tienes ?");

console.log("nombre" ,edadususario);
console.log("Tipo de dato", typeof edadususario);*/

let edad = Number(prompt("¿Cuántos años tienes?"));

if (edad >= 18) {
    alert("Puedes votar 🗳️");
} else {
    alert("Aún no puedes votar ❌");
}

let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
    alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 23) {
    alert("Está fresquito, ponte algo ligero 🧢");
} else {
    alert("Hace calor, usa polo y bloqueador solar 🧴");
}