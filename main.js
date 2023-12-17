/// Dedicar la primera seccion solamente a la creacion de alumnos y sus atributos

class Alumno{ 
    constructor(nombre, apellido, edad, materiasInscritas, telefono, calificaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materiasInscritas = [""];
        this.telefono = telefono;
        this.calificaciones = [];  /// ya que son valores, es posible hacerlo un array directamente? ///
        this.siguienteAlumno = null; 
    }
}
class ListaLigada{
        constructor(nombre, apellido, edad, materiasInscritas, telefono, calificaciones) {
            const newAlumno = new Alumno(nombre, apellido, edad, materiasInscritas, telefono, calificaciones);
            this.head = newAlumno;
            this.tale = newAlumno;
            this.lenght = 1
        }

        push(nombre, apellido, edad, materiasInscritas, telefono, calificaciones){
            const newAlumno = new Alumno(nombre, apellido, edad, materiasInscritas, telefono, calificaciones);
            if(!this.head){ //si la cola esta vacia
                this.head = newAlumno;
                this.tale = newAlumno;
            } else{
                this.tale.next = newAlumno;
                this.tale = newAlumno;
            }
            this.length++;
            return this;
        }
}

const lista = new ListaLigada("Marco", "Quezada", 23, ["Igles", "Quimica"], 8721171115, [[9, 8, 8, 9], [10, 9, 9, 9]]);
console.log(lista);

/*
    asignarNota(materia, nota){
        this.calificaciones[materia] = nota;
        return alert('Calificación agregada exitosamente'); 
        console.log('Nota agregada'); 
    }

    promedioCalificaciones(){
        const totalMaterias = Object.keys(this.calificaciones).lenght; 
        if (totalMaterias === 0) 
            console.log('Sin materias agregadas');
 { 
            return 0;
        }
        const sum= Object.values(this.calificaciones).reduce((total, nota) => total + nota, 0);
        return sum / numMaterias; 
    }


/// Dedicar la segunda seccion a la creacion de metodos, a los grupos y las listas.

class Grupo{ 
    constructor(nombredelgrupo){ 
        this.nombredelgrupo = nombredelgrupo;
        this.primerAlumno = null; /// Esto seria el primer nodo? /// 
    }

    agregarAlumno(alumno) { 
        if (!this.primerAlumno) { 
            this.primerAlumno = alumno; 
      console.log('Primer alumno inscrito a este grupo'); }   
        
      else{ 
            let ultimoAlumno = this.primerAlumno; 
            while (ultimoAlumno.siguienteAlumno) {
                ultimoAlumno = ultimoAlumno.siguienteAlumno;
            }
            ultimoAlumno.siguienteAlumno = alumno; 
        }
    }

}
*/