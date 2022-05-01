const alex = ()=> {

    const d = document
    const $main = d.getElementById('main')

    const title = d.createElement('h1')
    title.setAttribute('class','title')
    title.style.setProperty('color','yellow')
    title.textContent = 'Deportes que me gustan'
    $main.appendChild(title)

    const lista = d.createElement('p')
    lista.setAttribute('type','text')
    lista.style.setProperty('text-align','center')
    lista.style.setProperty('font-size','25px')
    lista.style.setProperty('line-height','1.5')
    lista.setAttribute('id','lista')
    $main.appendChild(lista)

    const cars = ["Tenis de mesa", "Voley", "Soccer", "Tenis", "Natación", "Ajedrez", "Golf", "Rugby","Baseball","Skate"];

    let sport = "";
    for (let i = 0; i < cars.length; i++) {
      sport += cars[i] + "<br>";
    }
    
    document.getElementById("lista").innerHTML = sport;

    const button = d.createElement('button')
    button.style.setProperty('text-align','center')
    button.style.setProperty('font-size','20px')
    button.style.setProperty('margin','auto')
    button.style.setProperty('padding','15px')
    button.setAttribute('id','lista')
    button.setAttribute('class','button')
    button.textContent = 'Atrás'
    $main.appendChild(button)

    button.addEventListener('click', ()=>{
        location.pathname='/'
    })
}

export default alex