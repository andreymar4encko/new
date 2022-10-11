const btn = document.querySelector('.servise__button');
const flat = document.querySelector('.flat')
const back = document.querySelector('.flat-back')
const servis =document.querySelector('.servis')
const btnAll = document.querySelectorAll('.flat__btn')
const fladSum = document.querySelector('.flat__sum')
const flatArr = document.querySelectorAll('.flat')
const flaPpurchase = document.querySelector('.flat__purchase')
const flatButtons = document.querySelector('.flat__buttons')
const constact= document.querySelector('.contact')
btn.addEventListener('click',()=>{
flat.classList.remove('flat-hidden')
servis.classList.add('flat-hidden')
})


back.addEventListener('click',()=>{
    servis.classList.remove('flat-hidden')
})

function cl (col){
    btnAll.forEach(item=>{
        item.addEventListener('click',(e)=>{
         e.target.addEventListener('click',()=>{
             flat.classList.add('flat-hidden')
             fladSum.style="display: flex"
             
         })
     
        })
     })
}
for(let i=1;i<flatArr.length;i++){
    cl()
}

function sum(){
    const sum = fladSum.querySelectorAll('.flat__btn')
    
    sum.forEach(item=>{
        item.addEventListener('click',(e)=>{
            fladSum.style="display: none"
            flaPpurchase.style="display: flex"
            
        })
    })
}
function purchase(){
const purchase=flaPpurchase.querySelectorAll('.flat__btn')

purchase.forEach(item=>{
    item.addEventListener('click',(e)=>{
     e.target.addEventListener('click',()=>{
        fladSum.style="ddisplay:none"
        flaPpurchase.style="display: none"
        constact.style="display: flex"
         
     })
 
    })
 })
}


purchase()
sum()
