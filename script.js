const publicaciones = document.getElementById("publicaciones");
const formulario = document.getElementById("formulario");
const botonparapublicar = document.getElementById("botonPublicar");

botonparapublicar.addEventListener("click", function(){

    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const imagen = document.getElementById("imagen");
    const imagenURL = URL.createObjectURL(imagen.files[0]);

    const card = document.createElement("div");
    card.classList.add("col-md-4");
    
    card.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <h2 class="card-title">${titulo}</h2>
                <h5 class="card-text">${descripcion}</h5>
            </div>
        <img src="${imagenURL}" class="">
        <button id="meGusta" type="button" class="btn btn-primary btnMeGusta">Me Gusta 👍🏻</button>
        <span class="ms-2 contador">0 Me Gusta</span>
        </div>
    `;

    publicaciones.prepend(card);

const botonMeGusta = card.querySelector(".btnMeGusta");
const cont = card.querySelector(".contador");

botonMeGusta.addEventListener("click",function(){
    let cantidad = parseInt(cont.textContent)
    cont.textContent = (cantidad+1)+" Me gusta"
});
});
    formulario.reset(); // limpia el formulario

