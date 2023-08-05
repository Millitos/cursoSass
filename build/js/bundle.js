//smooth scroll
document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
})

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();

            // console.log(e.target.attributes.href.value);
            //Almacena la seccion a la cual le estamos dando click
            const seccion = document.querySelector(e.target.attributes.href.value);
            
            seccion.scrollIntoView({
                behavior:'smooth',
            });
        })
    });
}

function navegacionFija(){

    const barra = document.querySelector('.header'); //atrapa el elemento header del html

    //registrar el intersection oberserver -api de js
    //revisa los elementos que estan visibles en la ventana del navegador   
    const observer = new IntersectionObserver( function(entries){ //el entries toma el elemento a observar
        if(entries[0].isIntersecting){ //isIntersecting es un atributo del obj Iobserver, es true or false
            barra.classList.remove('fijo');
            // console.log('elemento visible');
        }else{
            barra.classList.add('fijo');
        }
        // console.log(entries[0]);
    });
        //elemento a observar
        observer.observe(document.querySelector('.info-principal'));


}
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


