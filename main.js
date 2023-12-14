class Alumno{ 
    constructor(nombre, apellido, edad, materiasInscritas = [], calificaciones = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materiasInscritas = materiasInscritas;
        this.calificaciones = calificaciones; 
    }

    asignarCalificacion(materia, calificacion){
        this.calificaciones[materia] = calificacion;
    }

/// La Const de numero de materias es necesario 
    promedioCalificaciones(){
        const numMaterias = object.keys(this.calificaciones).lenght; 
        if (numMaterias === 0) {
            return 0;
        }

        const sum= Object.values(this.calificaciones).reduce((total, calificacion) => total + calificacion, 0);
        return sum / numMaterias; 
    }

    function agregarAlumno(nombre, apellido, edad, materiasInscritas, calificaciones){

    }
}