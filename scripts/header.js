const header = ()=>{
    console.log('HEADER')

    const d = document
    const $header = d.getElementById('header')
    const name = d.createElement('a')
    name.setAttribute('href','http://127.0.0.1:5500/')
    name.setAttribute('class','name')
    name.textContent = 'RETO 5'

    $header.appendChild(name)

}

export default header