const footer = ()=>{
    console.log('FOOTER')

    const d = document
    const $footer = d.getElementById('footer')

    const year = d.createElement('p')
    year.setAttribute('class','year')
    year.textContent = '2022'

    $footer.appendChild(year)
}

export default footer