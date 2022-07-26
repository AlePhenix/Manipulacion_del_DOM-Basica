// var name = "Ivan";
// var lastName = "Castañeda Piña";
// var userName = "teodoroHermoso2.4";
// var age = 22;
// var email = "emilianojose@dragoncito.com";
// var adult = true;
// var saveMoney = 8000000;
// var debit = 8;



// function NombreCompleto() {
//     document.write( "Nombre Completo : <br>" + name + " " + lastName + "<br>" + "<br>");
// }


// function DineroTotal() {
//     document.write("Dinero Total :<br>");
//     document.write(saveMoney - debit + "<br>");
// }

// NombreCompleto()

// DineroTotal()







// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";


// function Presentacion(name, apodo) {   
//     console.log("Mi nombre es " + name + ", pero prefiero que me digas " + apodo + ".");
// }

// Presentacion(completeName, nickname )







// const tipoDeSuscripcion = "Basic";


// if(tipoDeSuscripcion == "Free") {
//     console.log("Solo puedes tomar los cursos gratis");
// }

// if(tipoDeSuscripcion == "Basic") {
//    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }

// if (tipoDeSuscripcion == "Expert") {
//    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }

// if(tipoDeSuscripcion == "ExpertPlus") {
//    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }





// -------------------- Bonus Class ----------------------



// const tipoDeSuscripcion = {
//     free:"Solo puedes tomar los cursos gratis",
//     basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
//     expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
//     ExpertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
// }


// function AxesoACursos (suscripcion){
//     if (tipoDeSuscripcion[suscripcion]) {
//         console.log(tipoDeSuscripcion[suscripcion]);
//         return;
//     }

//     console.warn("Este tipo de suscripcion no existe");
// };


// AxesoACursos("expert");



// var i = 0;
// var a = 10;

// while (i <= 5) {
//     console.log("El valor de i es: " + i)
//     i++
// };

// while (a >= 2) {
//     console.log("El valor de a es: " + a);
//     a--
// }








// // Numero de intentos !!!
// var intentos = 1;



// function Calculo (){
//     function NoIntentos () {
//         if (preguntaDeSuma == 4){
//             if (intentos === 1) {
//                 document.write("Felicidades has encontardo el resultado en tu primer intento");
//             }
//             else{
//                 document.write("Felicidades has encontardo el resultado en tu intento numero " + intentos);
    
//             }
//         }
//         else{
//             intentos++;
//             Calculo()
//         }
//     }
    
//     var preguntaDeSuma;
    
//     if (intentos == 1){
//         preguntaDeSuma = prompt("HEY TU USUARIO!!!  Responde. ¿Cuantó es 2 + 2?");
//         NoIntentos()
//     } 
//     else {
//         preguntaDeSuma = prompt("Uys!!! alparecer eres bobo, pero todos siempre merecen otra oportunidad. asi que.. ¿Cuantó es 2 + 2?");
//         NoIntentos()
//     };
// };


// Calculo()






// let listaDeObjetos = ["zapato", "limon", "neumatico", "pluma" , "escoba"];


// function ListandoArrays (array) {
   
//     console.log("El primer elemeto de tu array es: " + array[0]);  
// }

// ListandoArrays(listaDeObjetos)





// function ArraysUnoAUno(array) {
//     for (let index = 0; index < array.length; index++) {
//         var numReal = index + 1;
//         console.log("El elemento numero " + numReal + " del array es: " + array[index]);

//     }
// };

// ArraysUnoAUno(listaDeObjetos)





// function Perrito (
//     nombre,
//     edad,
//     color,
//     raza,
// ){
//     this.nombre = nombre,
//     this.edad = edad,
//     this.color = color,
//     this.raza = raza
// }

// var perritaLuna =new Perrito("Luna", 3,"Sal Pimienta", "Snauser");

// function ElementosDeObjetos (object){
//     let contador = 0;
//     for (const key in object) {
//         contador++
//         console.log("El elemento numero " + contador + " de tu objeto es: " + key + " Con un valor de: " + object[key])
//     }
// } 

// ElementosDeObjetos(perritaLuna)


