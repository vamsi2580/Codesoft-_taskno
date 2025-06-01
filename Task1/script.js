let btns=document.querySelectorAll("button");
let display=document.querySelector("#display");
btns.forEach(btn => {
    btn.addEventListener("click",() =>{
        if (btn.innerText==="="){
            display.value=eval(display.value);
        }
        else if(btn.innerText==="C"){
            display.value="";
        }
        else if(btn.innerText==="√"){
            display.value=Math.sqrt(display.value);
        }
        else if(btn.innerText==="←"){
                display.value=display.value.slice(0,-1);
        }
        else if(btn.innerText==="%"){
            display.value=display.value/100;
        }
        else{
        display.value+=btn.innerText;
        }
        
    })
})
