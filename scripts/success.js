let header = document.getElementById('name-header')
let firstName = document.getElementById('first-name')
let full_Name = document.getElementById('full_name')
let lastName = document.getElementById('last-name')
let email = document.getElementById('email')
let generatedCode= document.getElementById('code')
let phone = document.getElementById('phone')
let amount = document.getElementById('amount')
let paidFor = document.getElementById('paidFor')
let reference = document.getElementById('reference')

let paymentNumber= document.getElementById('small')

let formData = JSON.parse(localStorage.getItem('form'));

let storage = localStorage.getItem('PAY');



switch(storage){
    case 'NTR':
        if(header) {

            let data = localStorage.getItem('PAY');
            let record = JSON.parse(localStorage.getItem(data));

            let referenceCode;

            if(record){
                referenceCode = record.shift();
                localStorage.setItem(storage, JSON.stringify(record))
            }

            let code = Math.floor(Math.random()*(999-100+1)+100)
            
            header.innerHTML = 'NEW RIDER TRICYCLE REGISTRATION';
            firstName.innerText = `First Name : ${formData['first_name']} ` 
            lastName.innerText = `Last Name : ${formData['last_name']} ` 
            email.innerText = `Email : ${formData['email']} ` 
            phone.innerText = `Phone : ${formData['phone']} ` 
            amount.innerText = 'Amount:  1500 '
            paidFor.innerText = 'Payment for :  New Rider Tricycle Registration '
            reference.innerText = `Reference Code : ${referenceCode || ''}`;
            paymentNumber.innerText = `Payment Number2${code}`

        }
             break;
    case 'NTO':
        if(header) {
            let data = localStorage.getItem('PAY');
            let record = JSON.parse(localStorage.getItem(data));

            let referenceCode;

            if(record){
                referenceCode = record.shift();
                localStorage.setItem(storage, JSON.stringify(record))
            }

            let code = Math.floor(Math.random()*(999-100+1)+100)
            
            header.innerHTML = 'NEW TRICYCLE REGISTRATION ( OWNER )';
            firstName.innerText = `First Name : ${formData['first_name']} ` 
            lastName.innerText = `Last Name : ${formData['last_name']} ` 
            email.innerText = `Email : ${formData['email']} ` 
            phone.innerText = `Phone : ${formData['phone']} ` 
            amount.innerText = 'Amount:  10000 '
            paidFor.innerText = 'Payment for :  New Tricycle Registration Owner '
            reference.innerText = `Reference Code : ${referenceCode || ''}`;
            paymentNumber.innerText = `Payment Number2${code}`
        }
        break;
    case 'RTO':
        if(header) {
            let data = localStorage.getItem('PAY');
            let record = JSON.parse(localStorage.getItem(data));

            let referenceCode;

            if(record){
                referenceCode = record.shift();
                localStorage.setItem(storage, JSON.stringify(record))
            }

            let code = Math.floor(Math.random()*(999-100+1)+100)
            
            header.innerHTML = 'RENEWAL TRICYCLE REGISTRATION (OWNER)';
            generatedCode.innerHTML = `Vehicle Registration Code : <br /> <span style='font-weight:bold'>${formData['code']}<span> ` 
            full_name.innerText = `Full Name : ${formData['full_name']} ` 
            email.innerText = `Email : ${formData['email']} ` 
            phone.innerText = `Phone : ${formData['phone']} ` 
            amount.innerText = 'Amount:  5000 '
            paidFor.innerText = 'Payment for :  Renewal Tricycle Registration Owner '
            reference.innerText = `Reference Code : ${referenceCode || ''}`;
            paymentNumber.innerText = `Payment Number2${code}`
        }
        break;
    case 'RTR':
        if(header) {
            let data = localStorage.getItem('PAY');
            let record = JSON.parse(localStorage.getItem(data));

            let referenceCode;

            if(record){
                referenceCode = record.shift();
                localStorage.setItem(storage, JSON.stringify(record))
            }

            let code = Math.floor(Math.random()*(999-100+1)+100)
            
            header.innerHTML = 'RENEWAL TRICYCLE REGISTRATION (RIDER)';
            firstName.innerText = `First Name : ${formData['first_name']} ` 
            lastName.innerText = `Last Name : ${formData['last_name']} ` 
            email.innerText = `Email : ${formData['email']} ` 
            phone.innerText = `Phone : ${formData['phone']} ` 
            amount.innerText = 'Amount:  1500 '
            paidFor.innerText = 'Payment for :  Renewal Tricycle Registration Rider'
            reference.innerText = `Reference Code : ${referenceCode || ''}`;
            paymentNumber.innerText = `Payment Number2${code}`
        }
        break;
    case 'COT':
        if(header) {

            let data = localStorage.getItem('PAY');
            let record = JSON.parse(localStorage.getItem(data));

            let referenceCode;

            if(record){
                referenceCode = record.shift();
                localStorage.setItem(storage, JSON.stringify(record))
            }

            let code = Math.floor(Math.random()*(999-100+1)+100)
            
            header.innerHTML = 'CHANGE OWNERSHIP TRICYCLE';
            firstName.innerText = `First Name : ${formData['first_name']} ` 
            lastName.innerText = `Last Name : ${formData['last_name']} ` 
            email.innerText = `Email : ${formData['email']} ` 
            phone.innerText = `Phone : ${formData['phone']} ` 
            amount.innerText = 'Amount:  2000 '
            paidFor.innerText = 'Payment for :  Change Ownership Tricycle '
            reference.innerText = `Reference Code : ${referenceCode || ''}`;
            paymentNumber.innerText = `Payment Number1${code}`

        }
             break;
    case 'TOT':
        if(header) {

            let data = localStorage.getItem('PAY');
            let record = JSON.parse(localStorage.getItem(data));

            let referenceCode;

            if(record){
                referenceCode = record.shift();
                localStorage.setItem(storage, JSON.stringify(record))
            }

            let code = Math.floor(Math.random()*(999-100+1)+100)
            
            header.innerHTML = 'OWNERSHIP TRANSFER TRICYCLE';
            firstName.innerText = `First Name : ${formData['first_name']} ` 
            lastName.innerText = `Last Name : ${formData['last_name']} ` 
            email.innerText = `Email : ${formData['email']} ` 
            phone.innerText = `Phone : ${formData['phone']} ` 
            amount.innerText = 'Amount:  2000 '
            paidFor.innerText = 'Payment for :  Ownership Transfer Tricycle '
            reference.innerText = `Reference Code : ${referenceCode || ''}`;
            paymentNumber.innerText = `Payment Number1${code}`

        }
            break;
    default:
    
}
