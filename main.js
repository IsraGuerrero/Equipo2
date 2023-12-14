/// Dedicar la primera seccion solamente a la creacion de alumnos y sus atributos

class Alumno{ 
    constructor(nombre, apellido, edad, materiasInscritas, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materiasInscritas = [];
        this.telefono = telefono;
        this.calificaciones = {};  /// ya que son valores, es posible hacerlo un array directamente? ///
        this.siguienteAlumno = null; 
    }

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