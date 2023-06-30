'use strict'

const tabsContent = document.querySelectorAll('.tabs-content');
const tabsHeader = document.querySelectorAll('.heading');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');





// The logic for the tab


tabsHeader.forEach((head,i)=>{
   
    head.addEventListener('click', ()=>{
        logic(i);
        
        }
        )
    
})

var logic=(index)=>{
  
       
    tabsHeader.forEach((head)=>{
        head.classList.remove("active-head");
    })

    
    tabsContent.forEach((content)=>{
        content.classList.remove("active-tab");
    })
    
    tabsHeader[index].classList.add("active-head") ;
    tabsContent[index].classList.add('active-tab');
         
}


// light/dark mode switch


let getMode = localStorage.getItem('mode');

if(getMode && getMode === 'dark'){
    body.classList.add('dark');
    toggle.classList.toggle('fa-moon');
    toggle.classList.toggle('fa-sun');

}

toggle.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    toggle.classList.toggle('fa-moon');
    toggle.classList.toggle('fa-sun');

    if(!body.classList.contains('dark')){
        return localStorage.setItem('mode', 'light');
    }
    return localStorage.setItem('mode', 'dark');
});

