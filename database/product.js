let url = "http://localhost:3000/db/";

let obj;
fetchData();

async function fetchData() {
  try {
    let data = await fetch(url);
    let response = await data.json();
    obj = response;
    console.log(obj);
  } catch (error) {
    console.log("error is:", error);
  }
}

// console.log(obj);
