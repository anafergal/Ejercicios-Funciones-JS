// Ejercicios

/*

Realizar una función que realice o satisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/
 
///////////////////////////////////////////////////////////////////////

//Calcular el cuadrado de un número.
//Función normal
function calcularCuadrado(numero){
    console.log("Número = "+ numero);
    return "Número al cuadrado = " + numero*numero;
}
//Función arrow
const funcionCuadrado = numero => numero*numero;

//Escribir un código que convierta de grados celsius a grados farenheit
//Función normal
function celsiusFarenheit(celsius){
    console.log("Temperatura en grados Celsius = " + celsius + "ºC");
    return "Temperatura en grados Farenheit = " + [(1.8*celsius)+32] + "ºF";
}
//Funcion arrow
const funcionFarenheit = celsius => "La temperatura en grados Farenheit es = " + [(1.8*celsius)+32] + "ºF";

//Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.
//Función normal
function calcularVoltaje(resistencia, corriente){
    console.log("Resistencia = " + resistencia + " O");
    console.log("Corriente = " + corriente + " A");
    return "El voltaje es = " + resistencia*corriente + " V";
}
//Funcion arrow
const funcionVoltaje = (resistencia, corriente) => {
    console.log("Resistencia = " + resistencia + " O");
    console.log("Corriente = " + corriente + " A");
    return "El voltaje es = " + resistencia*corriente + " V";
}
//Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado
//Funcion normal
function calcularVolumen(lado){
    console.log("Medida del lado = " + lado + " u");
    return "El volumen del cubo es = " + (lado*lado*lado) + " u";
}
//Funcion arrow
const funcionCubo = lado => "El volumen del cubo es = " + lado*lado*lado + " unidades cúbicas";

//Calcular el área de un triángulo
//Función normal
function areaTriangulo(base, altura){
    console.log("Base = " + base + "u");
    console.log("Altura = " + altura + "u");
    return "El área del triángulo es = " + [(base*altura)/2] + "u cuadradas";
}
//Función arrow
const funcionArea = (base, altura) => {
    console.log("Base = " + base + "u");
    console.log("Altura = " + altura + "u");
    return "El área del triángulo es = " + [(base*altura)/2] + "u cuadradas";
}

//Calcular el volumen de una esfera
//Función normal
function volumenEsfera(radio){
    var pi= 3.1416;
    console.log("Radio ingresado = " + radio);
    return "El volumen de la esfera es = " + (4/3*pi)*radio*radio*radio;
}
//Función arrow
const funcionEsfera = radio => {
    var pi= 3.1416;
    return (4/3*pi)*radio*radio*radio;
}

//Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
//Función normal 
function textoMayusculas(){
    return texto.toUpperCase();
}