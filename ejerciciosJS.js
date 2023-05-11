/*Crea una funcion que reciba como parametro un arreglo de objetos que contengan informacion 
sobre libros (titulo, autor, ano de publicación) y devuelva una lista de los libros ordenados por año de
 publicación (del más antiguo al más reciente).*/

function ordenaLibros (libros){
    let arreglo = [];
    for (let i = 0;i<libros.length; i++){
    let numero = libros[i].publicacion
    arreglo.push(numero)
    }
    function ascenso (a,b){
      return (a-b)
    }
    arreglo.sort(ascenso);
    let resultado = ""
    for(let j = 0; j<arreglo.length; j++){
      for (let k = 0; k<libros.length;k++){
      if(libros[k].publicacion == arreglo[j]){
        resultado += libros[k].autor + " "+ libros[k].publicacion + " "+ libros[k].nombre + "\n"  }
    }}
    console.log(resultado.split("\n"))}

    ordenaLibros( [
      { nombre: "El Quijote", publicacion: 1605, autor: "Cervantes" },
      { nombre: "Cien años de soledad", publicacion: 1967, autor: "Gabriel"},
      { nombre: "Don Juan Tenorio", publicacion: 1844, autor: "Zorilla" },
      { nombre: "La Iliada", publicacion: -750, autor: "Homero"},
      { nombre: "La Odisea", publicacion: -725, autor: "Homero" }
    ])

    //Tenemos dos listas de asistentes a dos cursos: html y css. Queremos obtener una lsita de los asistentes a ambos cursos. 
    //La lista estará ordenada.//Por ejemplo html = ['Pedro','Juan','Ana'], y 
    //css=['Luis','Juan', 'Ana','María'] la lista obtenida sería ['Juan', 'Ana'].

    function asistenteIgual(html, css) {
    let repetidos = html.filter(arreglo => css.includes(arreglo))
    return repetidos
    }
    console.log(asistenteIgual((['Pedro','Juan','Ana']),(['Luis','Juan', 'Ana','María'])))

    //OTRA ALTERNATIVA 

    let aux = []
let contador = ""
let html = ['Pedro','Juan','Ana','Luis'];
let  css = ['Luis','Juan', 'Ana','María'];
for (let i = 0; i < html.length; i++) {
  for (let j = 0; j < css.length; j++) {
if (html[i] == css[j]) {
  contador = html[i]
  aux.push(contador)
}
  }}
console.log(aux)

let html1 = ['Pedro','Juan','Ana'];
let  css1 = ['Luis','Juan', 'Ana','María'];