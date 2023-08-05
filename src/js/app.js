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