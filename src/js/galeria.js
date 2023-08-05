document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    
    for(let i = 1; i<=12; i++){
        const imagen = document.createElement('img');
        const div = document.createElement('div');
        div.classList.add('tamano');
        imagen.src = `build/img/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i; //crea un atributo en el elemento imagen llamado data-imagen-id

        const lista = document.createElement('li');

        div.appendChild(imagen)
        lista.appendChild(div);

        galeria.appendChild(lista);
    }
}

const galery = document.querySelector('.galeria-imagenes');

galery.addEventListener('click', function(e){

    if(e.target.tagName === 'IMG'){
        // console.log(e.target.dataset.imagenId); //retorna el atributo data-imagen-id de la imagen clickeada
        const id = parseInt(e.target.dataset.imagenId);
        
        //Generar la imagen
        const imagen = document.createElement('img');
        imagen.src = `build/img/img/thumb/${id}.webp`; //identifica la img clickeada
        // console.log(imagen);

        const overlay = document.createElement('div');
        overlay.appendChild(imagen);
        overlay.classList.add('overl');

        //cuando se da click cierra la imagen   
        overlay.onclick = function(){
            overlay.remove();
        }

        //boton para cerrar la imagen
        const cerrarImagen = document.createElement('p');
        cerrarImagen.textContent = 'X';
        cerrarImagen.classList.add('btn-cerrar');
        overlay.appendChild(cerrarImagen);
        //para cerrar la imagen al pulsar la x
        cerrarImagen.onclick = function(){
            overlay.remove();
        };

        //mostrar en el html
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body'); //para fijar la imagen
        
    }
});


