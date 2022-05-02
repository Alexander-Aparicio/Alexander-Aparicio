const giancarlo = () => {
  const d = document
  const $main = d.getElementById('main')
  const form = d.getElementById('paciente-form')

  //-----------
  class Paciente {
    constructor(nombre, dni, telefono, hijos) {
      this.nombre = nombre
      this.dni = dni
      this.telefono = telefono
      this.hijos = hijos
    }
    afiliar() {
      console.log('Ha sido afiliado al seguro')
    }
  }  
  const pac1 = new Paciente('Raul Chambilla', '48712548', '925148745', 2);
  const pac2 = new Paciente('Jaime Laura', '84125698', '932587456', 3);
  const pac3 = new Paciente('Alessandro Escobar', '87458412', '932548745', 0);

  class UI{
      addPaciente(paciente){
          const pacienteLista=document.getElementById('paciente-lista');
          const elemento=document.createElement('div');
          elemento.innerHTML=`
          <div class="card text-center mt-2 bg-warning">
            <div class="card-body text-dark">
            <strong>Nombre</strong>: ${paciente.nombre}&nbsp;
            <strong>DNI</strong>: ${paciente.dni}&nbsp;
            <strong>Teléfono</strong>: ${paciente.telefono}&nbsp;
            <strong>Hijos</strong>: ${paciente.hijos}&nbsp;
            <a href="#" class="btn btn-danger">Eliminar</a>
            </div>
          </div>
          `;
          pacienteLista.appendChild(elemento);
      }
  }

  //------------

  const button = d.createElement('button');  
  button.style.setProperty('text-align', 'center')
  button.style.setProperty('font-size', '20px')
  button.style.setProperty('margin-top', '30px')
  button.style.setProperty('padding', '15px')
  button.setAttribute('id', 'lista')
  button.setAttribute('class', 'button')
  button.textContent = 'Atrás'
  $main.appendChild(button)

  button.addEventListener('click', () => {
    location.pathname = '/'
  });
  form.addEventListener('submit', (e) => {
    const nombre=document.getElementById('nombre').value;
    const dni=document.getElementById('dni').value;
    const telefono=document.getElementById('telefono').value;
    const hijos=document.getElementById('hijos').value;    
  
    const paciente=new Paciente(nombre,dni,telefono,hijos);
    const ui=new UI();
    ui.addPaciente(paciente);
    console.log(paciente);
    if (hijos>0) {
        console.log('Usted recibirá mensualmente un bono de S/50.00 por cada hijo');
    } else {
        console.log('No rebibirá ningún bono por hijos');
    }        
    e.preventDefault();    
  });
}

export default giancarlo
