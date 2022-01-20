let url = "http://localhost:3000/db/";

let obj;
fetchData();

async function fetchData() {
  try {
    let data = await fetch(url);
    let response = await data.json();
    obj = response.products;
    // console.log(obj);
    let single = [];
    single = obj[0];
    console.log(single);
    singleProd(single);
  } catch (error) {
    console.log("error is:", error);
  }
}

function singleProd(single) {
  let pro_path = document.getElementById("pro_path");

  pro_path.textContent =
    single.gender + "/ " + single.category + "/ " + single.type;

  let preview = document.getElementById("preview");
  let preview_img = document.createElement("img");

  preview_img.src = single.image[0];

  preview.append(preview_img);
  let primary = document.getElementById("primary");
  let image_section = document.getElementById("image_section");
  let mini_preview = document.getElementById("mini_preview");

  for (let i = 0; i < single.image.length; i++) {
    let mini_image = document.createElement("img");
    mini_image.src = single.image[i];
    mini_image.setAttribute("id", "mini_image");
    mini_image.addEventListener("mouseover", changePreview);
    function changePreview() {
      preview_img.src = single.image[i];
    }
    mini_preview.append(mini_image);
  }

  let prod_details = document.getElementById("product_details");

  let pname = document.createElement("h1");
  pname.innerHTML = single.title;
  pname.setAttribute("id", "p_name");

  let pnum = document.createElement("p");
  // console.log(single.item_no);
  pnum.textContent = "Item Number:" + single.item_no.toString();

  let price_sec = document.createElement("div");
  price_sec.setAttribute("id", "price_sec");

  let mrp = document.createElement("span");
  mrp.setAttribute("id", "mrp");
  mrp.innerHTML = " ₹" + single.price.mrp + ".00 ";
  mrp.style.textDecoration = "line-through";

  let price = document.createElement("span");
  price.setAttribute("id", "price");
  price.innerHTML = " ₹" + single.price.price + ".00 ";

  let disc = document.createElement("span");
  disc.setAttribute("id", "disc");
  disc.innerHTML = "(" + single.price.disc + "% off)";

  let inc_taxes = document.createElement("p");
  inc_taxes.innerHTML = "Inclusive of all taxes";

  let color_text = document.createElement("span");
  color_text.textContent = "Color";

  let sel_color = document.createElement("span");
  sel_color = "     " + single.color[0];

  let color_array = single.color;

  let colors = document.createElement("div");
  colors.setAttribute("id", "colors_row");

  for (let j = 0; j < color_array.length; j++) {
    let color_block = document.createElement("div");
    color_block.setAttribute("class", "color_block");
    color_block.style.backgroundColor = color_array[j];
    colors.append(color_block);
  }

  // console.log(color_array);

  let line = document.createElement("hr");
  line.setAttribute("width", "100%");

  let size_text = document.createElement("h3");
  size_text.innerText = "Size";

  let size_row = document.createElement("div");

  price_sec.append(mrp, price, disc);
  prod_details.append(
    pname,
    pnum,
    price_sec,
    inc_taxes,
    color_text,
    sel_color,
    colors,
    line
  );
}
