'use strict';
const baseDatos = [];
const documentReady = () => {
    const formRegistro = document.getElementById('formRegistro');

    const registrar = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('regnombre').value;
        const nickName = document.getElementById('regnick').value;
        const edad = parseInt(document.getElementById('edad').value);

        console.log(nombre);
        console.log(nickName);
        console.log(edad);

        if(nombre != '' & nickName != '' & edad>0){
        function regPersonaje(nombrereg, nickreg, edadreg) {
            this.nombrereg = nombrereg;
            this.nickreg = nickreg;
            this.edadreg = edadreg;
        }
        const nuevoPersonaje = new regPersonaje(nombre, nickName, edad);
        console.log(nuevoPersonaje);
        
        baseDatos.push(nuevoPersonaje);
        console.log(baseDatos);

        document.getElementById("tabla").innerHTML += '<tr class="table-primary"><td>'+nuevoPersonaje.nombrereg+'</td><td>'+nuevoPersonaje.nickreg+'</td><td>'+nuevoPersonaje.edadreg+'</td></tr>';
        }else{
            window.alert("Ingrese Correctamente los Parametros")
        }
};

formRegistro.addEventListener('submit', registrar);

}
document.addEventListener('DOMContentLoaded', documentReady);



