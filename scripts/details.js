
let selected = document.getElementById('selected')


selected.addEventListener('change', e => {
    let value = selected.options[selected.selectedIndex].getAttribute('data-reg')
    
    if(value){
        localStorage.setItem('PAY', value)
        window.location = 'details.html'
    }
})