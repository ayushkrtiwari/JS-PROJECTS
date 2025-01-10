/**

    const buttons=document.querySelectorAll('.button')
    // console.log(buttons)
    const body=document.querySelector('body')
    buttons.forEach(function(button){
        // console.log(button)
        button.addEventListener('click',function(e){
            console.log(e)
            // console.log(e.target.id)
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
    // document.querySelector('.defaultbtn').addEventListener('click',function(e){
    //     document.body.style.backgroundColor=e.target.className;
    // });

*/
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('#body'); // Corrected to select the body by ID

// Event listener for color buttons
buttons.forEach(button => {
    button.addEventListener('click', e => {
        body.style.backgroundColor = e.target.id; // Use the button's ID for the color
    });
});

// Event listener for default button
document.querySelector('#defaultbtn').addEventListener('click', () => {
    const defaultColor = document.querySelector('#defaultbtn').getAttribute('data-color'); // Get the data-color attribute
    body.style.backgroundColor = defaultColor || 'aliceblue'; // Set default color
});