const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e)
        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor=e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor=e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor=e.target.id;
                break;
            case 'aqua':
                body.style.backgroundColor=e.target.id;
                break;
        }
    })
});