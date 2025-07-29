let button=document.getElementById("change_color");
let title=document.getElementById("title");
let body=document.getElementById("body");


console.log("button",button);

let click=0;
button.addEventListener("click",function(){
    click++;
    if(click===1){
        button.style.backgroundColor ="blue";
        button.innerText="button";
        button.style.color="white";
        title.style.color="blue";
        body.style.backgroundColor="red";
    }else if(click===2){
        button.style.backgroundColor ="red";
        button.innerText="button";
        button.style.color="white";
        title.style.color="red";
        body.style.backgroundColor="yellow";


    }else if(click===3){
        button.style.backgroundColor ="green";
        button.innerText="button";
        button.style.color="white";
        title.style.color="green";
        body.style.backgroundColor="blue";


    }

    
})

