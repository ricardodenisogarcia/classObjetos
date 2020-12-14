console.log("Bienvenidos al codigo de practica para el ejercicio de objetos y clases");

var muchosNumeros = {
    unNumero : 1,
    dosNumeros : 23,
    tresNumeros: 456,
};

var variado = {
    conLetras : "dispositivo movil",
    conNumero : 208,
    conArray : ["motorola","alcatel","nokia"],
};

var letraObjeto = {
    conLetra : "teclado",
    objetoLetra : {
        tipo : "inalambrico",
    },
};

var objetoFuncion = {
    objetoUno : {
    objetivoUno : "Poner una meta",
    },
    unaFuncion : function objetivos(metas1, metas2){
            var resultado = metas1 + " y tambien voy a hacer" + metas2;
            return resultado;
       },
};
//var resultado = objetivos("ver el video", "tomar apuntes");
// no se como declarar las variables de la funcion para que imprima
//" ver el video"+"y tambien voy a hacer"+"tomar apuntes"

class Animales{
    constructor (clase, tamaño, desplazamiento) {
        this.clase = clase;
        this.tamaño = tamaño;
        this.desplazamiento = desplazamiento;
    }
    //cuando declaro estos datos en la terminal me marca el signo igual como que ahi esta el error
   // clase = "mamifero"
    //tamaño = "grande"
    //desplazamiento = "nadando"
    nadar () {
        console.log("nadando como pes en el agua");
    }
}
var nuevoAnimal = new Animales("mamifero","muy grande");

class Autos{
    constructor (marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    esBueno (){
        return this.marca === "ford";
        // esto no se si lo hice bien porque cuando imprimo no cambia nada 
    }
}
var primerAuto = new Autos ("ford", "focus", 2001);

console.log("");
console.log("primer objeto:");
console.log(muchosNumeros);
console.log("");
console.log("segundo objeto");
console.log(variado);
console.log("");
console.log("tercer objeto");
console.log(letraObjeto);
console.log("");
console.log("cuarto objeto");
console.log(objetoFuncion);
console.log("");
console.log("primera clase");
console.log(Animales);
console.log(nuevoAnimal.clase);
console.log("");
console.log("segunda clase");
console.log(Autos);
console.log(primerAuto.modelo);
console.log(primerAuto.marca);
console.log(Autos.esBueno);
