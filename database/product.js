let path = "../backend/db.json";

let obj;
fetchData();

async function fetchData() {
  try {
    let data = await fetch(path);
    let response = await data.json();
    obj = response;
    console.log(obj);
  } catch (error) {
    console.log("error is:", error);
  }
}

// console.log(obj);
