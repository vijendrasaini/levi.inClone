var count=1;
setInterval(function(){
    document.getElementById('pbtn'+count).checked=true;
    count++;
    if(count>3){
        count=1;
    }
},3000);

function object(){
    var buttonm=document.getElementById("ponclick");
    var more=document.getElementById("pmore");
    var dots=document.getElementById("pdots");
    if(dots.style.display==="none"){
        dots.style.display="inline";
        more.style.display="none";
        buttonm.innerHTML="Read More";
    }
    else{
        dots.style.display="none";
        more.style.display="inline";
        buttonm.innerHTML="Read Less";
    }
}