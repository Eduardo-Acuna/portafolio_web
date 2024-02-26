
let menuVisible=false;
//Funcion que oculta o Muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";//el responsive que esta en css
        menuVisible=true;
    }
}


function seleccionar(){
    //Oculta el menu una vez seleccionar una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//Funcion que alica ls animaciones de las habilidades


//Detecto el scrolling para aplicar la animacion dela barra de habilidades
window.onscrool=function(){
    efectoHabilidades();
}

function verCategoria(cat){
    const items = document.getElementsByClassName("disenio");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}


function descargarCV() {
    // Nombre del archivo PDF
    var pdfNombre = "Eduardo_Acuna_Gonzalez_CV-2024.pdf";

    // Crear un elemento <a> temporal
    var a = document.createElement("a");
    a.href = pdfNombre;

    // Abrir el archivo PDF en una nueva ventana o pestaña
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // Para IE
        window.navigator.msSaveOrOpenBlob(a.href);
    } else {
        // Para otros navegadores
        a.target = "_blank";
        a.download = pdfNombre;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}


//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}


