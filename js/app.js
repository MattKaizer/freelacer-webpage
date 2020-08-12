document.addEventListener('DOMContentLoaded', function() {
     cargarPortafolio();
});


function cargarPortafolio() {
    fetch('datos.json')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {
        let html = ''
        datos.portafolio.forEach( portafolio => {
            // crear el template
            html += `   
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>
            `;            
        });
        // we go through the arrangement and inject it
        document.querySelector('#listado').innerHTML = html;
    })
    .catch(function(error) {
        console.log(error);
    });
}
