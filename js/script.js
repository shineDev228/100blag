// show and hide tarif box
const tarifButon = document.querySelector('.tarif'),
    overlayContainer= document.querySelector('.overlay'),
    close = document.querySelectorAll('.close');

    
    tarifButon.addEventListener('click',function(){
        overlayContainer.classList.remove('invisible');
        overlayContainer.style.animation = 'fadeout 0.4s'
    });

    close.forEach(element => {
        element.addEventListener('click',function(){
            overlayContainer.style.animation = 'fadein 0.4s'
                    setTimeout(()=>{
                        overlayContainer.classList.add('invisible');
                        overlayContainer.style.animation = 'none'  
                    }, 400)
                    
        });
    });



