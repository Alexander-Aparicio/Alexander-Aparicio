const home = ()=>{

    const d = document
    const $main = d.getElementById('main')

    const title = d.createElement('h1')
    title.setAttribute('class','title')
    title.textContent = 'RETO 5 - JAVASCRIPT'
    $main.appendChild(title)

    const buttonsBox = d.createElement('div')
    buttonsBox.setAttribute('class','buttons-box')

    $main.appendChild(buttonsBox)

    const buttons = [
        {
            name: 'Alexander',
            color: '#03e9f4',
            id: 'button-1',
            href:'alex'
        },
        {
            name: 'Brian',
            color: '#03e9f4',
            id: 'button-2',
            href:'brian'
        },
        {
            name: 'Victor',
            color: '#03e9f4',
            id: 'button-3',
            href:'victor'
        },
        {
            name: 'Giancarlo',
            color: '#03e9f4',
            id: 'button-4',
            href:'giancarlo'
        },
    ]

    buttons.forEach((el)=>{

        const button = d.createElement('a')
        button.setAttribute('href',`https://alexander-aparicio.github.io/${el.href}.html`)
        button.setAttribute('class','button')
        button.setAttribute('id', `${el.id}`)

        button.innerHTML = `<span></span><span></span><span></span><span></span>${el.name}`
        buttonsBox.appendChild(button)

    })
    
        const title2 = d.createElement('a')
        title2.setAttribute('class','title enlace-reto6')
        title2.textContent = 'RETO 6 - JAVASCRIPT'
        $main.appendChild(title2)

}

export default home
