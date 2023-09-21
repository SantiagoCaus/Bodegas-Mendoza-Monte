const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')

    document.body.classList.contains('dark')? localStorage.setItem('darkMode','true') : localStorage.setItem('darkMode', 'false')
})


if(localStorage.getItem('darkMode') === 'true'){

    document.body.classList.add('dark')
        btnSwitch.classList.add('active')  
}else{
    document.body.classList.remove('dark')
    btnSwitch.classList.remove('active')
} 