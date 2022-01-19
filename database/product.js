let url = "http://localhost:3000/db/";

let obj;
fetchData();

async function fetchData() {
  try {
    let data = await fetch(url);
    let response = await data.json();
    obj = response.products;
    console.log(obj);
    singleProd(obj);
  } catch (error) {
    console.log("error is:", error);
  }
}

function singleProd(array) {
  let pro_path = document.getElementById("pro_path");

  pro_path.textContent =
    array[0].gender + "/ " + array[0].category + "/ " + array[0].type;
}
