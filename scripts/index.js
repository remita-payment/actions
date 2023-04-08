let form = document.getElementById("form");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let select = document.getElementById('payment')
let selected = document.getElementById('selected')



    window.addEventListener('DOMContentLoaded', () => {
        document.getElementById('NTR').innerText = String(JSON.parse(localStorage?.getItem('NTR'))?.length || 0) 
        document.getElementById('RTR').innerText = String(JSON.parse(localStorage?.getItem('RTR'))?.length || 0) 
        document.getElementById('NTO').innerText = String(JSON.parse(localStorage?.getItem('NTO'))?.length || 0) 
        document.getElementById('RTO').innerText = String(JSON.parse(localStorage?.getItem('RTO'))?.length || 0) 
    })


    form?.addEventListener('submit', e => {
        e.preventDefault();
        let pins = document.getElementById("pins").value;
        let select = document.getElementById('payment');

        let selectValue = select.options[select.selectedIndex].value;
        let getValue = localStorage.getItem(selectValue)

        const values = pins.split(' ').filter(x => Boolean(x))

        if(String(pins).length < 5 ) return alert('Invalid Pins');

        if(!selectValue) return alert('Choose an option to save pins');
           
            
        localStorage.setItem(selectValue,JSON.stringify(values))
        
        document.getElementById('NTR').innerText = String(JSON.parse(localStorage.getItem('NTR'))?.length || 0) 
        document.getElementById('RTR').innerText = String(JSON.parse(localStorage.getItem('RTR'))?.length || 0) 
        document.getElementById('NTO').innerText = String(JSON.parse(localStorage.getItem('NTO'))?.length || 0) 
        document.getElementById('RTO').innerText = String(JSON.parse(localStorage.getItem('RTO'))?.length || 0) 

        alert('Information saved')
    })


    select?.addEventListener('change', (e) => {

        let getValue = localStorage.getItem(e.target.value)
        let pins = document.getElementById("pins");

        pins.value = String(JSON.parse(getValue)).replaceAll(',', ' ');

        if(!getValue) pins.value = '';

        if(e.target.value){
           localStorage.getItem(e.target.value)
        }

    })
