
// Función para buscar un alumno por nombre
function buscarAlumnoPorNombre(nombre) {
    return listaDeAlumnos.find(alumno => alumno.nombre === nombre);
}

// Función para buscar un alumno por apellido
function buscarAlumnoPorApellido(apellido) {
    return listaDeAlumnos.find(alumno => alumno.apellidos === apellido);
}

// Función para obtener el promedio de un alumno
function obtenerPromedioAlumno(alumno) {
    var sum = alumno.calificaciones.reduce((total, calificacion) => total + calificacion.calificacion, 0);
    return sum / alumno.calificaciones.length;
}

// Función para obtener el promedio del grupo
function obtenerPromedioGrupo(grupo) {
    var sum = grupo.alumnos.reduce((total, alumno) => total + obtenerPromedioAlumno(alumno), 0);
    return sum / grupo.alumnos.length;
}

// Función para obtener lista de alumnos ordenados por calificación ascendente
function obtenerListaAlumnosOrdenadosAscendente() {
    return listaDeAlumnos.slice().sort((a, b) => obtenerPromedioAlumno(a) - obtenerPromedioAlumno(b));
}

// Función para obtener lista de alumnos ordenados por calificación descendente
function obtenerListaAlumnosOrdenadosDescendente() {
    return listaDeAlumnos.slice().sort((a, b) => obtenerPromedioAlumno(b) - obtenerPromedioAlumno(a));
}

function buscarAlumno() {
    var nombreBuscado = prompt("Ingrese el nombre del alumno a buscar:");
    var alumnoEncontrado = buscarAlumnoPorNombre(nombreBuscado);

    if (alumnoEncontrado) {
        console.log("Alumno encontrado:", alumnoEncontrado);
    } else {
        console.log("Alumno no encontrado");
    }
}