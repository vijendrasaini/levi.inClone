async function getProductData() {
    try {
        let res = await fetch(`http://127.0.0.1:7000/api/women`);
        let data = await res.json();
        appendMenData(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
getProductData();
let appendMenData = (data) => {
    data.map((elems,index) => {
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