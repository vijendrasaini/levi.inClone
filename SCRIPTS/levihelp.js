const lazyPersonInwrittingCode = ()=>{
    for(let i=0;i<36;i++)
    {
        const id = i+1
        document.getElementById("ponclick"+id).style.cursor = "pointer"
        document.getElementById("ponclick"+id).style.display.fontWeight = "bold"
        const fa = "&#8853"
        const content = document.getElementById("ponclick"+id).textContent 
        document.getElementById("ponclick"+id).innerHTML = fa + " " + content
        document.getElementById("ponclick"+id).addEventListener('click',()=>{
            generalFunc(id, content)
        })
    }
}
const havefunINlife = () =>{
    for(let i=0;i<36;i++)
    {
        const id = (i+1)
        document.getElementById('pmore'+id).style.display = "none"
    }
}
function generalFunc(id,content)
{
    const buttonm=document.getElementById("ponclick"+id);
    const more=document.getElementById("pmore"+id);
    if(more.style.display==="none"){
        more.style.display="inline";
        buttonm.innerHTML="&#8861 "+content;
    }
    else{
        more.style.display="none";
        buttonm.innerHTML="&#8853 "+content;
    }
}
havefunINlife()
lazyPersonInwrittingCode()