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

const appendDataonResult = async ()=>{
    const url = `http://127.0.0.1:7000/api/homePageproducts`
    const response = await fetch(url)
    const data = await response.json()
    appendDataonResultNow(data)
}
appendDataonResult()

const appendDataonResultNow = (arr)=>{
    arr.map(el=>{
        const {title, imgUrl:{front,back} , price:{mrp, priceWithDisc, disc}} = el
        console.log(title)


        const div = document.createElement('div')
        const img = document.createElement('img')
        const h5 = document.createElement('h3')
        const chhotadiv = document.createElement('div')
            const mrpValue = document.createElement('span')
            const priceWithDiscValue = document.createElement('span')
            const priceValue = document.createElement('span')
            img.src = front
            h5.textContent = title
            mrpValue.textContent = mrp
            priceWithDiscValue.textContent = priceWithDisc
            priceValue.textContent = `(${disc} %)`

            chhotadiv.append(mrpValue,priceWithDiscValue,priceValue)
        div.append(img,h5,chhotadiv)
        document.querySelector('#result').append(div)
    })
}