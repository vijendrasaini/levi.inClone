let url = "http://127.0.0.1:7000/api/products";

let obj;
fetchData();

async function fetchData() {
  try {
    let data = await fetch(url);
    let response = await data.json();
    obj = response;
    console.log(obj);
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

  let high_res = single.highresImage;
  preview_img.src = high_res[0];

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
      preview_img.src = high_res[i];
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
  mrp.innerHTML = " ₹" + single.price.mrp + ".00";
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

  let size_text = document.createElement("h4");
  size_text.innerText = "Size";

  let sizes = single.size;

  let size_row = document.createElement("div");
  size_row.setAttribute("id", "size_row");
  for (var x in sizes) {
    let size_box = document.createElement("div");
    size_box.setAttribute("id", "size_box");
    size_box.textContent = x;
    size_row.append(size_box);
  }
  let line1 = document.createElement("hr");
  line1.setAttribute("width", "100%");

  let del_text = document.createElement("h4");
  del_text.innerText = "Delivery Eligibility";

  let del_div = document.createElement("div");
  del_div.setAttribute("id", "del_div");

  let enter_pin = document.createElement("input");
  enter_pin.setAttribute("placeholder", "Enter Pincode");

  let check_btn = document.createElement("button");
  check_btn.setAttribute("id", "check_pin");
  check_btn.textContent = "CHECK";
  check_btn.onclick = validatePin;

  function validatePin() {
    let pin = +enter_pin.value;
    if (pin < 100000 || pin > 999999) {
      alert("enter valid pin");
    }
  }

  del_div.append(enter_pin, check_btn);

  let buy_div = document.createElement("div");
  buy_div.setAttribute("id", "buy_div");

  let qty_text = document.createElement("div");
  qty_text.setAttribute("id", "qty_text");
  qty_text.textContent = "QTY";

  let qty_sel = document.createElement("select");
  qty_sel.setAttribute("id", "qty_sel");
  let option1 = document.createElement("option");
  option1.setAttribute("id", "qty_opt");
  option1.innerText = "1";

  qty_sel.append(option1);

  let add_cart_btn = document.createElement("button");
  add_cart_btn.setAttribute("id", "add_cart_btn");
  add_cart_btn.innerText = "ADD TO CART";
  // add_cart_btn.onclick = addCart;

  let buy_now = document.createElement("button");
  buy_now.setAttribute("id", "buy_now");
  buy_now.innerText = "BUY NOW";
  // buy_now.onclick = buyNow;

  // let qty_text = document.createElement('div');
  // let qty_text = document.createElement('div');

  buy_div.append(qty_text, qty_sel, add_cart_btn, buy_now);
  price_sec.append(mrp, price, disc);
  prod_details.append(
    pname,
    pnum,
    price_sec,
    inc_taxes,
    color_text,
    sel_color,
    colors,
    line,
    size_text,
    size_row,
    line1,
    del_text,
    del_div,
    buy_div
  );

  let pro_info = document.getElementsByClassName("pro_info");

  let pro_desc = document.getElementById("desc");
  let desc = document.createElement("p");
  desc.textContent = single.description;
  pro_desc.append(desc);

  let fit_sec = document.getElementById("fit");
  let fit = single.fit;
  for (let k = 0; k < fit.length; k++) {
    let bullet = document.createElement("li");
    bullet.textContent = fit[k];
    fit_sec.append(bullet);
  }

  let materials = document.getElementById("material");
  let mat = single.material;
  for (let k = 0; k < mat.length; k++) {
    let mat1 = document.createElement("li");
    mat1.textContent = mat[k];
    materials.append(mat1);
  }
}
