let p=document.querySelector('p');
let pl=document.getElementById('pl');
let mi=document.getElementById('mi');
let i=0;
pl.addEventListener('click',()=>{
    let c='#'+9000;  
    i++;
    c+=i;    
    if(c.length==6){
        c+=i;
    }
    document.body.style.backgroundColor=c;
  p.innerHTML=i;    
})
mi.addEventListener('click',()=>{
    let c='#'+9000;  
   
    if(i>0){
    i--;
    c+=i;
    if(c.length==6){
        c+=i;
    }
    document.body.style.backgroundColor=c;
  p.innerHTML=i;
    }
})