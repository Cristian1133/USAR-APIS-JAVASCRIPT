// Ejemplo de JavaScript Sincrónico
console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");

// Ejemplo de JavaScript Asincrónico con setTimeout
console.log("Inicio");
setTimeout(() => {
    console.log("Tarea Asincrónica");
}, 1000);//tiempo
console.log("Fin");



// Ejemplo de Promesa
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Operación Completada"), 3000);
});

promesa.then(resultado => console.log(resultado));



