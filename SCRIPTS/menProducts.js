let data
async function getProductData() {
    try {
        let res = await fetch(`http://127.0.0.1:7000/api/men`);
        let data1 = await res.json();
        data = data1
        appendMenData(data1);
    } catch (err) {
        console.log(err);
    }
}
getProductData();
let appendMenData = (arr) => {
    document.getElementById("menProductDiv").innerHTML = null
    document.getElementById('totalProductsIn').textContent = arr.length
    arr.map((elems,index) => {
        let menDiv = document.createElement("div");
        menDiv.setAttribute("class", "menDiv");

        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "priceDiv");

        let image = document.createElement("img");
        image.src = elems.highresImage[0];
        image.setAttribute("class", "menImg");

        let title = document.createElement("p");
        title.innerText = "Levi's® " + elems.title;
        title.setAttribute("class", "menTitle");

        let mrpp = document.createElement("p");
        mrpp.innerText = "₹" + elems.price.mrp;
        mrpp.setAttribute("class", "mrpp");

        let pricee = document.createElement("p");
        pricee.innerText = "₹" + elems.price.price;
        pricee.setAttribute("class", "pricee");

        let dis = document.createElement("p");
        dis.innerText = "(" + elems.price.disc + "% off)";
        dis.setAttribute("class", "dis");

        priceDiv.append(mrpp, pricee, dis);
        menDiv.append(image, title, priceDiv);

        menDiv.addEventListener('click',(e)=>{
            showfullDetails(data,index)
        })
        document.getElementById("menProductDiv").append(menDiv);

        
    });
}
async function showfullDetails(dataArr,index){
    let obj = dataArr[index]
    obj.id = "1"
    try {
    const url = `http://127.0.0.1:7000/api/showfullDetails/1`
    const arg = {
        method:"PUT",
        body : JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }
    const response = await fetch(url,arg)
    const result = await response.json()
    window.location.href = "./product.html"
    } catch (error) {
    console.log(error)
    }
}

const priceRadioInputClasses = document.getElementsByClassName('priceRadioInputClass')
for(let i=0;i<priceRadioInputClasses.length;i++)
{
    priceRadioInputClasses[i].addEventListener('click',()=>{
        sort1(i)
    })
}
function sort1(i){
    console.log((i+1)+" is checked.")
    const arr = []
        if(priceRadioInputClasses[0].checked){
            for(let j=0;j<data.length;j++){
                const el = data[j].price.price
                if(el<=1000)
                    arr.push(data[j])
            }
        }
    
        else if(priceRadioInputClasses[1].checked){
            for(let j=0;j<data.length;j++){
                const el = data[j].price.price
                if(1001<= el && el<=3000)
                    arr.push(data[j])
            }
        }
    
        else if(priceRadioInputClasses[2].checked){
            for(let j=0;j<data.length;j++){
                const el = data[j].price.price
                if(3001<= el && el<=5000)
                    arr.push(data[j])
            }
        }
    
        else if(priceRadioInputClasses[3].checked){
            for(let j=0;j<data.length;j++){
                const el = data[j].price.price
                if(5001<= el)
                    arr.push(data[j])
            }
        }
    console.log(arr)
    appendMenData(arr)
}