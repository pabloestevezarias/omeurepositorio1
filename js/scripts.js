"use strict";
//exercicio1

//let nombrePila = "Xurxo"; 
//console.log(nombrePila); 

//exercicio2

//nombrePila = "Jorge";
//console.log(nombrePila);

//exercicio3
//se comento variábel dime que non está definida

//exercicio4

//let operador1=3; 
//let operador2=5, operador3="Xurxo";
//let resultado=0;

//resultado = operador1+operador2;

//console.log(operador1+operador2)


//quero ver outra vez o resultado
//operador1 = 67;

//console.log(operador1+operador2);

//quero ver o 8
//console.log(resultado);










//let operador1=1, operador2=2, operador3=3;
//resultado = operador1+operador2;
//console.log(resultado);







//exercicio1profe

//let a = 0, r = 2;
//const PI = 3.1416;
//a = PI * r * r;

//mostramos por template literals


//console.log(`A = π * ${r}² = ${a}`);











//exercicio2profe
//declaración funcións
const ej2Profe = document.querySelector(".area-triangulo");
const res2Profe = document.querySelector("#resultado2");
//funcións
const areaTriangulo = () => {
    //variábeis
    let aTriangulo = 0;
    let base = 3, altura = 2;
    //os datos damos o usuario
    base = prompt("Dame a base pls");  //prompt devolve un string
    //number convirte cousas en número
    base = Number(base);
    altura = prompt ("Dame veneno que quiero morir");
    altura = Number(altura);

    aTriangulo = (base * altura) / 2;
    res2Profe.innerHTML = `<code>
    A(${base}*${altura} / 2) = ${aTriangulo}
    </code>`; 
}
//eventos
ej2Profe.addEventListener(
    "click", 
    areaTriangulo
);









//exercicio 3 do profe

//nodos
//elemento Li do html do terceiro exercicio do profe
const alturaLi = document.querySelector(".persona-altura");
const res3Profe = document.querySelector("#resultado3");

//declarar funcións
const esPersonaAlta = () => {
    let alt = prompt("dame a túa forsa pegaso e xa de paso a túa altura en sentímetros pls"); //promp devolve string
    console.log(`alt (${alt}) es de tipo ${typeof alt}`);
    //quero convertir o string en número
    alt = Number(alt);


    console.log(`alt (${alt}) es de tipo ${typeof alt}`);

    if(alt>200){
        res3Profe.innerHTML=`A pessoa de ${alt} é alta.`;
    }else{
        res3Profe.innerHTML=`A pessoa de ${alt} é baixa.`;
    }

}

//evento
alturaLi.addEventListener(  //sempre leva mínimo dous parámetros
    "mouseover",
    esPersonaAlta

);
