class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    hablar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
    despedirce() {
        console.log(`adios ${this.nombre}`);
      }
  }

  let juan = new Persona("juan",45)
  let pedro = new Persona("pedro",44)
  let maria = new Persona("maria",41)
    juan.hablar()
    pedro.hablar()
    maria.hablar()
    maria.despedirce()


    class Estudiante extends Persona {
        constructor(nombre, edad, carrera) {
          super(nombre, edad);
          this.carrera = carrera;
        }
        estudiar() {
          console.log(`${this.nombre} está estudiando ${this.carrera}`);
        }
      }
  

    cristian= new Estudiante("cristian",45,"ingenerias")
    cristian.estudiar()