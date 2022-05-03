
const victor = ()=> {

    console.log('Soy Victor')

    const d = document

    const $main = d.getElementById('main')

    const title = d.createElement('h1')
    title.textContent = 'SUMANDO Y RESTANDO'

    const texto = d.createElement('p')
    texto.style.setProperty('font-size','22px')
    texto.setAttribute('class','texto')
    
    const sumando = ()=>{
        return 5+6
    }

    texto.textContent = `5 + 6 = ${sumando()}` 

    $main.appendChild(title)
    $main.appendChild(texto)

    const texto2 = d.createElement('p')
    texto2.style.setProperty('font-size','22px')
    texto2.setAttribute('class','texto')
    
    const restando = ()=>{
        return 7-2
    }

    texto2.textContent = `7 - 2 = ${restando()}` 

    $main.appendChild(texto2)

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

export default victor