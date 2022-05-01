const footer = ()=>{
    console.log('FOOTER')

    const d = document
    const $header = d.getElementById('footer')
    const year = d.createElement('p')
    year.setAttribute('class','year')
    year.textContent = '2022'

    $header.appendChild(year)
}

export default footer