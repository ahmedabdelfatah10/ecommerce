let btns=document.querySelectorAll('a button')
let plus=document.querySelector('.plus');
let minus=document.querySelector('.minus');
let value=document.querySelector('.value')
let smallpics=document.querySelectorAll('.smallpics img')
let smallpicsincontainer=document.querySelectorAll('.displaypic1 img')
let cart=document.querySelector('.cart');
let displayproduct=document.querySelector('.displayproduct')
let close=document.querySelector('.close')
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let big1=document.querySelector('.displaypic');
let btn=document.querySelector('.btn1');
let shoppingcart=document.querySelector('.shoppingcart')
let div=document.querySelector('.shoppingcart div')
let h4=document.querySelector('.content h4')
let avatar=document.querySelector('.avatar')
let style=document.createElement('style');

smallpics=Array.from(smallpics);

let bigpic=document.querySelector('.big')
 

btns=Array.from(btns);

document.addEventListener('DOMContentLoaded',()=>{
  if(localStorage.getItem("countitem") !== "0"){

    avatar.classList.add('borderorange');
    cart.classList.add('borderorange');
          style.innerText=`.cart+span::after{
        content:'${localStorage.getItem("countitem") || 0}';
        background-color: rgb(255, 0, 0);
        color:white;
        font-weight: bold;
        width: 15px;
        height: 15px;
        position: absolute;
        z-index: 10;
        font-size: .75rem;
        line-height: 15px;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
    
       }`
       document.body.appendChild(style)
  }else{
    avatar.classList.remove('borderorange')
    cart.classList.remove('borderorange');
    style.remove();
  }
})
btns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
       btns.forEach((btn)=>{
        btn.style.paddingBottom=''
        btn.style.borderBottom='';
       })

     btn.style.paddingBottom='18px'
     btn.style.borderBottom='solid 3px orange';

  })
})

plus.addEventListener('click',()=>{
     let v=parseInt(value.textContent);
      v++;
      value.textContent=v;
})

minus.addEventListener('click',()=>{
    let v=parseInt(value.textContent);
     v--;
    if(v<=0){
        v=0;
    }
     value.textContent=v;
})


  smallpics.forEach((pic)=>{
    
    pic.addEventListener('click',clickonlargescreens)
})
if(window.innerWidth>'600'){
  console.log('hello')
bigpic.addEventListener('click',bigpicclick)
}

window.addEventListener('resize',events)
function clickonlargescreens(){

    smallpics.forEach((pic)=>{
        pic.classList.remove('blur');
        pic.classList.remove('selected');
    })
       let src=this.getAttribute('src');
    let s1=  src.replace("-thumbnail.jpg","");
      s1=s1+".jpg"
        bigpic.setAttribute('src',s1)
         this.classList.add('blur');
         this.classList.add('selected');
    
}
function bigpicclick(){


    displayproduct.classList.remove('none');
  
}

function events(){
  if(window.innerWidth>600){
    smallpics.forEach((pic)=>{
      pic.addEventListener('click',clickonlargescreens)
  })

  bigpic.addEventListener('click',bigpicclick)
  }else{
    smallpics.forEach((pic)=>{
      pic.removeEventListener('click',clickonlargescreens)
  })

  bigpic.removeEventListener('click',bigpicclick)
  }
}

close.addEventListener('click',()=>{
  displayproduct.classList.add('none');
})

smallpicsincontainer=Array.from(smallpicsincontainer);

smallpicsincontainer.forEach((pic)=>{
  pic.addEventListener('click',()=>{
    smallpicsincontainer.forEach((pic)=>{
        pic.classList.remove('blur');
        pic.classList.remove('selected');
    })
       let src=pic.getAttribute('src');
    let s1=  src.replace("-thumbnail.jpg","");
      s1=s1+".jpg"
        big1.setAttribute('src',s1)
         pic.classList.add('blur');
         pic.classList.add('selected');
    })
  
})
let j=0;
let images=['./images/image-product-1.jpg','./images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg']
next.addEventListener('click',()=>{
  j++;
  if(j>images.length-1){
    j=0;
  }
  smallpicsincontainer.forEach((pic)=>{
    pic.classList.remove('blur');
    pic.classList.remove('selected');
  }
  )
 smallpicsincontainer[j].classList.add('blur');
 smallpicsincontainer[j].classList.add('selected');
   big1.setAttribute('src',images[j])
})

prev.addEventListener('click',()=>{
  j--;
  if(j<0){
    j=images.length-1;
  }
  smallpicsincontainer.forEach((pic)=>{
    pic.classList.remove('blur');
    pic.classList.remove('selected');
  }
  )
 smallpicsincontainer[j].classList.add('blur');
 smallpicsincontainer[j].classList.add('selected');
   big1.setAttribute('src',images[j])
})


// responsive design

let n=document.querySelector('.n');
let p=document.querySelector('.p')
let menu=document.querySelector('.menu');
let menuinsmallscreen=document.querySelector('.menuinsmallscreen')
let close1=document.querySelector('.close1');
let themenu=document.querySelector('.themenu');

n.addEventListener('click',()=>{
  j++;
  if(j>images.length-1){
    j=0;
  }

  bigpic.setAttribute('src',images[j])
})

p.addEventListener('click',()=>{
  j--;
  if(j<0){
    j=images.length-1;
  }
  bigpic.setAttribute('src',images[j])
})

menu.addEventListener('click',()=>{
  menuinsmallscreen.classList.remove('hide');
  themenu.classList.remove('hide');


  menuinsmallscreen.classList.add('show');
 themenu.classList.add('show');
})
close1.addEventListener('click',()=>{
  menuinsmallscreen.classList.remove('show');
 themenu.classList.remove('show');

 menuinsmallscreen.classList.add('hide');
 themenu.classList.add('hide');
})

btn.addEventListener('click',()=>{
    localStorage.setItem('countitem',value.textContent);
    if(localStorage.getItem("countitem")!=="0"){
      avatar.classList.add('borderorange');
      cart.classList.add('borderorange');
      style.innerText=`.cart+span::after{
        content:'${value.textContent || 0}';
        background-color: rgb(255, 0, 0);
        color:white;
        font-weight: bold;
        width: 15px;
        height: 15px;
        position: absolute;
        z-index: 10;
        font-size: .75rem;
        line-height: 15px;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
    
       }`
       document.body.appendChild(style)
      
    }
   
 
  
})
cart.addEventListener('click',()=>{
    
    shoppingcart.classList.toggle('none')
  if(localStorage.getItem("countitem")!=="0"){
    let value=parseInt(h4.textContent.replace('$',''))
     let checkout = document.createElement("button");
     let del=document.createElement("button");
     checkout.textContent='checkout'
  del.innerHTML=`
  <img src="./images/icon-delete.svg"/>`
       div.innerHTML=`
       <img style="margin-top:0px; " width="50px" height="50px" src="./images/image-product-1-thumbnail.jpg"/>
       <p style="margin-left:25px; margin-top:0px;font-size:1rem;vertical-align:top; display:inline-block;">autumn limited Edition...</p>
       <p  style="margin-left:80px; margin-top:-50px; font-size:1rem;vertical-align:middle; display:inline-block;">${h4.textContent}*${localStorage.getItem("countitem")}  <b>$${value*localStorage.getItem("countitem")}</b></p>
 
       `
       div.appendChild(del)
       div.appendChild(checkout)
del.classList.add('delete')
checkout.classList.add('checkout')
       del.addEventListener('click',()=>{
        localStorage.setItem("countitem","0");
        div.innerHTML=`your cart is empty`;
        avatar.classList.remove('borderorange');
        cart.classList.remove('borderorange');
        style.innerText=`.cart+span::after{}`
        shoppingcart.classList.add('none');
      })

      checkout.addEventListener('click',()=>{
        div.innerHTML=`thank you for ordering
        your order will be delivered in two days
        `
        localStorage.setItem("countitem","0")
        avatar.classList.remove('borderorange');
        cart.classList.remove('borderorange');
        style.innerText=`.cart+span::after{}`

      })

      
  }
   

  
})

