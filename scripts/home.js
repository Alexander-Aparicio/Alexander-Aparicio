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
            href:''
        },
        {
            name: 'Victor',
            color: '#03e9f4',
            id: 'button-3',
            href:''
        },
        {
            name: 'Giancarlo',
            color: '#03e9f4',
            id: 'button-4',
            href:''
        },
    ]

    buttons.forEach((el)=>{

        const button = d.createElement('a')
        button.setAttribute('href',`http://127.0.0.1:5500/${el.href}.html`)
        button.setAttribute('class','button')
        button.setAttribute('id', `${el.id}`)

        button.innerHTML = `<span></span><span></span><span></span><span></span>${el.name}`
        buttonsBox.appendChild(button)

    })

}

export default home