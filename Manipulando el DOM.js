


// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parrafito = document.getElementsByName("parrafito");
// const pid = document.getElementById("pid");
// const input = document.querySelector("input");




// input.value = "Espagueti"


// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// })




// h1.innerHTML = "Patito <br> Feo";
// p.innerText = "Patito <br> Feo";

// // console.log(h1.getAttribute("class"));
// // h1.setAttribute("class", "rojo");


// // h1.classList.add("rojo");
// // h1.classList.remove("verde");


// const img = document.createElement("img");
// img.setAttribute("src", "https://ae01.alicdn.com/kf/Hfbe5ebdd6a9347caa54fbff55c4356aaY/Dibujos-animados-para-exploraci-n-del-espacio-exterior-dibujos-animados-planetas-astronautas-Maleta-monopat-n-graffiti.jpg_Q90.jpg_.webp");

// console.log(img);

// pid.append(img);









const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  // console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

