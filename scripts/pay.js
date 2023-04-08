let storage = localStorage.getItem('PAY');
let header = document.getElementById('header')

//form inpus
let form = document.getElementById('form')
let firstName = document.getElementById('first_name')
let lastName = document.getElementById('last_name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')

form?.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.setItem('form', JSON.stringify({
        'first_name': firstName.value,
        'last_name': lastName.value,
        'email': email.value,
        'phone': phone.value
    }))

    setTimeout(() => {
        window.location = 'success.html'
    }, 1000)
   
})

switch(storage){
    case 'NTR':
        if(header) header.innerHTML = 'NEW TRICYCLE REGISTRATION <br />(N1,500.00) RIDER'
        break;
    case 'NTO':
        if(header) header.innerHTML = 'NEW TRICYCLE REGISTRATION <br />(N10,000.00) OWNER'
        break;
    case 'RTO':
        if(header) header.innerHTML = 'RENEWAL TRICYCLE REGISTRATION <br />(N5,000.00) OWNER'
        break;
    case 'RTR':
        if(header) header.innerHTML = 'RENEWAL TRICYCLE REGISTRATION <br />(N1,500.00) RIDER'
        break;
    default:
        ''
    
}
