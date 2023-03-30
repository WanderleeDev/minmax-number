'use strict';

const input = document.querySelector('input[data="input"]');
const inputReset = document.querySelector('input[data="reset"]');
const btnRequest = document.querySelector('#btn-request');
const btn = document.querySelector('button[data="btn"]');
const listaHtml = document.querySelector("#lista");


//declara un array container vació
let container =[];

//agregar un número a una lista 
function addNum() {
  //validar que sea un número
  if(isNaN(input.value) || input.value === ""){
    alert("Ingresa un número positivo o negativo, los números deben estar sin espacios");
  }
  else{
    //agregar el valor del input al array
    container.push(input.value)
    //verificar el array
    console.log(container);
    //agrega el numero al array HTML
    addNumberToHtml(input.value);
  }
  
  //limpiar el array para ingresar un nuevo valor
  input.value = "";
  //regresar el focus al input
  input.focus();

  //Reset lista
  inputReset.addEventListener('click', ()=>{
    container = [];
    listaHtml.innerHTML= "";
    
  });
}

//Agregar el número agregado a la listaHtml
function addNumberToHtml (params) {

  // creamos la nueva etiqueta y la almacenamos en una variable
  const tag = document.createElement('span');

  //insertamos el contenido a la etiqueta
  tag.textContent = params;

  //agregamos una clase
  tag.classList.add('number');

  //inserta el tag nuevo dentro del la listaHtml
  listaHtml.insertAdjacentElement("beforeend",tag);

}

//obtener y  regresar el número menor y mayor de la lista
function minmaxNumber(params) {

  if(params === "" || params.length <= 1){
    return alert("Tu lista debe tener mínimo 2 valores o no repetir el mismo valor");
  }else{

    //obtenemos el numero menor del array por medio de reduce
    const min = params.reduce((acumulador, itemList)=>{
      if(acumulador < itemList){
        return acumulador;
      }else{
        return itemList;
      }
    } , params[0]);

    //obtenemos el numero menor del array por medio de reduce
    const max = params.reduce((acumulador, itemList)=>{
      if (acumulador > itemList) {
        return acumulador;
      } else {
        return itemList
      }
    }, params[0]);
    return alert(`el número menor es ${min} y el numero mayor es ${max}`);
  }
}



btn.addEventListener('click',addNum);

btnRequest.addEventListener('click',()=>minmaxNumber(container));