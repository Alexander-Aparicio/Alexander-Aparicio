console.log('Soy Victor')

    const d = document

    const $main = d.getElementById('main')

    const title = d.createElement('h1')
    title.textContent = 'SUMANDO, RESTANDO Y COMPARANDO'

    const texto = d.createElement('p')
    texto.style.setProperty('font-size','22px')
    texto.setAttribute('class','texto')
    
    const sumando = ()=>{
        return 5+6
    }

    texto.textContent = `5 + 6 = ${sumando()}` 

    $main.appendChild(title)
    $main.appendChild(texto)



export default victor