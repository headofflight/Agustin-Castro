function soloNum(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

    return array.filter(n => Number.isInteger(n));
}
soloNum(['uno', 2, 3])

function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca
    return strings.reduce((a,c)=>(c.length > a.length ? c : a),'')
  }
  stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag'])

  function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  
    // Tu código aca:
    for (i=0; i<amigos.length; i++){
      if (amigos[i].nombre == nombre){
        return amigos[i];
      }
    }
    
  }
  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  buscarAmigo(amigos, 'toni'); //debe devolver { nombre: 'toni', edad: 33 };

  function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
  
    let numero= num.toString();
    let mirrorNum= numero.split('').reverse().join('');
    if (numero === mirrorNum){
      return true;
    }else{
      return false;
    }
  }
  console.log(numeroSimetrico(11711))

  function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el 
    //nombre de una  propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:
    let nuevoArray = array.map((a) => a[propiedad]);
    return nuevoArray;
  }
    
  
  
  var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  console.log(pluck(productos, 'name')) //debería devolver ['TV LCD', 'Computadora']
  // No modifiques nada debajo de esta linea //

  function crearClasePersona() {
    class Persona {
      constructor(nombre ='', edad = 0, hobbies = [''], amigos = [{}]) {
        // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
        // Inicializar las propiedades de la persona con los valores recibidos como argumento
  
        // Tu código aca:
        this.nombre= nombre;
        this.edad = edad;
        this.hobbies = hobbies;
        this.amigos = amigos;
  
      }
  
      addFriend(nombre = '', edad=0) {
        // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // No debe retornar nada.
  
        // Tu código aca:
        this.amigos.push({nombre: nombre, edad: edad})
  
      }
  
      addHobby(hobby='') {
        // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de 
        //la persona.
        // No debe retornar nada.
        
  
        // Tu código aca:
        this.hobbies.push('hobbie')
  
  
      }
      getFriends() {
        // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
        // persona.getFriends() debería devolver ['martin', 'toni']
  
        // Tu código aca:
        const newArray =[];
        for(let amigo of this.amigos){
          newArray.push(amigo.nombre)
        }
        return newArray
  
      }
  
      getHobbies() {
        // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
  
        // Tu código aca:
        return this.hobbies
  
      }
  
      getPromedioEdad() {
        // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
        // Ej:
        // Si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
  
        // Tu código aca:
        let nuevoAcumulador = 0;
        for(let amigo of this.amigos){
          nuevoAcumulador += amigo.edad
        }
        return nuevoAcumulador/this.amigos.length;
  
      }
    };
  
    return Persona;
  }
  
  // No modifiques nada debajo de esta linea //

  function filtrar(funcion) {
    // Escribi una función filtrar en el prototipo de Arrays,
    // que recibe una funcion (callback) que devuelve true o false.
    // filtrar los elementos de ese arreglo en base al resultado de esa funcion
    // comparadora, devolver un nuevo arreglo con los elementos filtrados.
    // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
    // ej:
    // var productos = [{
    //   price: 100,
    //   name: 'tv'
    // }, {
    //   price: 50,
    //   name: 'phone'
    // }, {
    //   price: 30,
    //   name: 'lamp'
    // }]
    // productos.filtrar(function(p) {
    //   return p.price >= 50;
    // }) => [{price: 100, name:'tv'}]
    Array.prototype.filtrar = function (callback) {
      const nuevoArreglo=[]
      for (let elemento of this){
        if(callback(elemento)) nuevoArreglo.push(elemento)
      }
      return nuevoArreglo
    }
  }
  
  filtrar()
  var productos = [
    {
       price: 100,
       name: 'tv'
    }, 
    {
       price: 50,
       name: 'phone'
    }, 
    {
       price: 30,
       name: 'lamp'
    },
  ]
