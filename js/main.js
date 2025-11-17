/*=========================================
    1. Calcular el área de un rectángulo
==========================================
Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un
console.log() .
La idea de esto es comprender que algunas funciones retornan un valor y otras simplemente hacen otras cosas, como
imprimir un mensaje por consola. Las que retornan algo, deberán incluir la palabra clave return .
// Longitud = ancho x alto
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
*/

console.log("1. Calcular el área de un rectángulo");

let base = parseInt(prompt("Ingrese la base de su rectángulo"));
let altura = parseInt(prompt("Ingresa la altura de su rectángulo"));


function calcularAreaRectangulo(base, altura) {
    resultado = base * altura
    return resultado;
}

console.log("El área del cuadrado es de: " + calcularAreaRectangulo(base, altura));

// -------------------------------------------------------------------------------------------------------------------

/*=====================================
    2. Contar palabras en una cadena
=======================================
Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
*/

console.log("2. Contar palabras en una cadena");

let texto = prompt("Ejercicio número 2: Ingrese su texto para contabilizar las palabras");

function contarPalabras(texto) {
    let palabras = texto.split(" ");
    return palabras.length;
}

console.log("El texto: " + texto + ", tiene: " + contarPalabras(texto) + " palabras");

// -------------------------------------------------------------------------------------------------------------------

/*====================================
    3. Contar vocales en una cadena
======================================
Escribe una función que reciba una cadena y cuente el número de vocales.
console.log(contarVocales("JavaScript")); // Resultado: 3
*/

console.log("3. Contar vocales en una cadena");


let palabra = prompt("Ejercicio número 3: Ingrese una palabra para contar las vocales de la palabra");

function contarVocales(palabra) {
    const vocales = "aeiouAEIOU";
    let contador = 0;

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log("La palabra: " + palabra + " tiene: " + contarVocales(palabra) + " vocales");

// -------------------------------------------------------------------------------------------------------------------

/*===============================
    4. Encontrar el palíndromo
=================================
Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.
// Ejemplos, neuquen, reconocer, rallar
console.log(esPalindromo("neuquen")); // true*/

console.log("4. Encontrar el palíndromo");

let palabraPolindromo = prompt("Ejercicio número 4: Ingrese una palabra para comprobar si es políndromo");

function esPalindromo(palabraPolindromo) {
    let original = palabraPolindromo.toLowerCase();
    let invertida = original.split("").reverse().join("");
    return original === invertida;
}

console.log(esPalindromo(palabraPolindromo));

// -------------------------------------------------------------------------------------------------------------------

/*===========================================================================
    5. Crear un programa para convertir la edad de un perro a años humanos
=============================================================================
Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
que equivale a 7 veces la edad humana.
Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.
edadCanina(7); // Tu perro tiene 49 años humanos*/

console.log("5. Crear un programa para convertir la edad de un perro a años humanos");

let edadPerro = prompt("Ejercicio número 5: Ingrese los años de su perro para calcular su edad real");

function edadCanina(edadCanina) {
    return edadCanina * 7
}

console.log(`Tu perro tiene ${edadCanina(edadPerro)} años`);

// -------------------------------------------------------------------------------------------------------------------

/*===============================================================
    6. Convertir la primera letra de cada palabra en mayúscula
=================================================================
Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript*/

console.log("6. Convertir la primera letra de cada palabra en mayúscula");

let cadena = prompt("Ejercicio número 6: Ingrese una palabra para convertir la primera letra en mayúscula");

function capitalizarPalabras(cadena) {
    const palabras = cadena.split(" ")

    const palabrasCapitalizadas = palabras.map(function(palabra) {
        return palabra[0].toUpperCase() + palabra.slice(1);
    });

    return palabrasCapitalizadas.join(" ");
}

console.log(capitalizarPalabras(cadena));

// -------------------------------------------------------------------------------------------------------------------

/*==================================================================
    7. Generar los primeros N números de la sucesión de Fibonacci
====================================================================
Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.
console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]*/

console.log("7. Generar los primeros N números de la sucesión de Fibonacci");

let n = prompt("Ejercicio número 7: Ingrese un número para la secuencia fibonacci");
function fibonacci(n){
    let a = 0;
    let b = 1;

    if (n >= 1) console.log(a);
    if (n >= 2) console.log(b);

    for (let i= 3; i <= n; i++) {
        let siguiente = a + b;
        console.log(siguiente);

        a = b;
        b = siguiente;
    }
}

console.log(fibonacci(n))

// -------------------------------------------------------------------------------------------------------------------

console.log("8. Ejercicios de arrays 1");

/*======================
8. Lista de Productos
======================*/
const productos = [
 { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
 { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
 { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
 { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
 { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];
// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
// 2. Usando map: Crear un array con solo los nombres de los productos
// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
// 4. Usando find: Encontrar el producto con id 3
// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)

console.log("1. Usando forEach: Mostrar en consola cada producto con su nombre y precio");
productos.forEach(producto => console.log(`"Nombre: ${producto.nombre} - Precio: $${producto.precio}`));

console.log("2. Usando map: Crear un array con solo los nombres de los productos");
let productName = productos.map(prod => prod.nombre);
console.log(productName);

console.log("3. Usando filter: Obtener productos electrónicos con stock mayor a 20");
let filtrados = productos.filter(producto => producto.stock > 20 && producto.categoria === "electrónica");
console.log(filtrados)

console.log("4. Usando find: Encontrar el producto con id 3");
let indice = productos.find(producto => producto.id === 3);
console.log(indice);

console.log("5. Usando reduce: Calcular el valor total del inventario (precio * stock)");
let totalInventario = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log("valor total del inventario: " + totalInventario);

// -------------------------------------------------------------------------------------------------------------------

/*====================================
    9. Estudiantes y Calificaciones
====================================*/

console.log("9. Ejercicios de arrays 2");

const estudiantes = [
 { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
 { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
 { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
 { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];
// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
// 4. Usando find: Encontrar estudiante llamado 'María'
// 5. Usando reduce: Calcular la edad promedio de los estudiantes


console.log("1. Usando forEach: Mostrar nombre y edad de cada estudiante");

estudiantes.forEach(estudiante => console.log(`Nombre ${estudiante.nombre} - Edad: ${estudiante.edad}`));

// -------------------------------------------------------------------------------------------------------------------

console.log("2. Usando map: Crear array de objetos con nombre y promedio de calificaciones");

let promedioPorEstudiante = estudiantes.map(estud => {
    let promedio = estud.calificaciones.reduce((acc, nota) => acc + nota, 0) / estud.calificaciones.length;
    return {
        nombre: estud.nombre,
        promedio: promedio
    };
});

console.log(promedioPorEstudiante);

// -------------------------------------------------------------------------------------------------------------------

console.log("3. Usando filter: Obtener estudiantes con promedio mayor a 7.5");

let promedioDestacado = promedioPorEstudiante.filter(estud => estud.promedio > 7.5);
console.log(promedioDestacado);

// -------------------------------------------------------------------------------------------------------------------

console.log("4. Usando find: Encontrar estudiante llamado 'María'");
let maria = estudiantes.find(estud => estud.nombre === "María")
console.log(maria);

// -------------------------------------------------------------------------------------------------------------------

console.log("5. Usando reduce: Calcular la edad promedio de los estudiantes");
let edadPromedio = estudiantes.reduce((total, est) => total + est.edad, 0) / estudiantes.length;
console.log(`Edad promedio ${edadPromedio}`);

// -------------------------------------------------------------------------------------------------------------------

/*===================
    10. Películas
====================*/

console.log("10. Ejercicios de arrays 3");

const peliculas = [
 { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
 { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
 { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
 { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
 { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];
// 1. Usando forEach: Mostrar título y año de cada película
// 2. Usando map: Crear array de títulos en mayúsculas
// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
// 4. Usando find: Encontrar película estrenada en 2014
// 5. Usando reduce: Calcular la duración total de todas las películas

console.log("1. Usando forEach: Mostrar título y año de cada película");
peliculas.forEach(pelicula => console.log(`Nombre: ${pelicula.titulo}, año de estreno: ${pelicula.año}`))

// -------------------------------------------------------------------------------------------------------------------

console.log("2. Usando map: Crear array de títulos en mayúsculas");

let titulosMayus = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log(titulosMayus);

// -------------------------------------------------------------------------------------------------------------------

console.log("3. Usando filter: Obtener películas de drama con rating mayor a 8.5");
let ratingDrama = peliculas.filter(peli => peli.rating > 8.5 && peli.genero === "drama");
console.log(ratingDrama);

// -------------------------------------------------------------------------------------------------------------------

console.log("4. Usando find: Encontrar película estrenada en 2014");
let anioEstreno = peliculas.find(peli => peli.año === 2014);
console.log(anioEstreno);

// -------------------------------------------------------------------------------------------------------------------

console.log("5. Usando reduce: Calcular la duración total de todas las películas");
let duracionTotal = peliculas.reduce((total, peli) => total + peli.duracion, 0);
console.log(`Duracion total de todas las peliculas: ${duracionTotal} minutos`);
