const timediv=document.querySelector('#center')
setInterval(function(){
    const date=new Date()
    timediv.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)