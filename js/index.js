/*
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
Función: profesoresCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número).
Retorno: array de objetos profesor que pertenecen a la categoría indicada.
*/

let profesores = [
    {categoria: 1, nombre: "Luis", sexo: "M"},
    {categoria: 2, nombre: "Maria", sexo: "F"},
    {categoria: 4, nombre: "Miguel", sexo: "M"},
    {categoria: 3, nombre: "Andrea", sexo: "F"},
    {categoria: 2, nombre: "Jose", sexo: "M"},
    {categoria: 5, nombre: "Ariana", sexo: "F"},
    {categoria: 5, nombre: "Willians", sexo: "M"},
    {categoria: 2, nombre: "Andres", sexo: "M"},
    {categoria: 1, nombre: "Juan", sexo: "M"},
    {categoria: 1, nombre: "Pedro", sexo: "M"}
]

let profesoresCategoria = (profesores, categoria) => {
    let arrayProfesores = []
    profesores.forEach(profesor =>{
        if(profesor.categoria == categoria){
            arrayProfesores.push(profesor)
        }
    })
    return arrayProfesores
}

let salida = document.getElementById("salida")

salida.innerHTML = `
    Profesores de la categoria 1: ${JSON.stringify(profesoresCategoria(profesores, 1))}<br>
    Profesores de la categoria 2: ${JSON.stringify(profesoresCategoria(profesores, 2))}<br>
    Profesores de la categoria 3: ${JSON.stringify(profesoresCategoria(profesores, 3))}<br>
    Profesores de la categoria 4: ${JSON.stringify(profesoresCategoria(profesores, 4))}<br>
    Profesores de la categoria 5: ${JSON.stringify(profesoresCategoria(profesores, 5))}<br>
`