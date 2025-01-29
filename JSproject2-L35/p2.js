const form=document.querySelector('form')
//this usecase will give you empty
//const height=parseInt(document.querySelector('#height').value)
// console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML=`<span>${bmi}</span>`
    }
});
