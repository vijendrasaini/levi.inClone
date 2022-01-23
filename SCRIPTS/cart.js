let currentUser
fetchDataFromServer();
async function fetchDataFromServer() {
  const url = "http://127.0.0.1:7000/api/allusers/2";
  const response = await fetch(url);
  const result = await response.json();
  let currentUser = result.currentuser;
  console.log(result.currentuser);

  let cartContent = currentUser.cart;
  let cart1 = JSON.parse(localStorage.getItem("cart"));

  cart1.map((el) => {
    cartContent.push(el);
  });
  const r = {
    id: 2,
    currentuser: currentUser,
  };
  console.log("here");
  const arg = {
    method: "PUT",
    body: JSON.stringify(r),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, arg);
  const re = await res.json();
  cart1 = [];
  localStorage.setItem("cart", JSON.stringify(cart1));

  //   console.log(cartContent);

  var arr = [];
  cartContent.map(function (el, index) {
    var obj = {
      imgUrl: el.highresImage[0],
      prodhead: el.title,
      prodprice: el.price.price,
      count: 1,
    };
    arr.push(obj);
  });
  //   display(arr);
  

  updateCheckoutSection(arr);
}
async function updataData(){
    
  const url = "http://127.0.0.1:7000/api/allusers/2";
}
// var cart =JSON.parse(localStorage.getItem('cart'))||[]
// console.log(cart)

async function display(arr) {
  document.querySelector(".product_container").textContent = "";
  if (arr.length == 0) {
    document.querySelector(".product_container").innerHTML =
      "<p> You have no items in your shopping.<br>Click here to continue shopping.</p>";
    document.querySelector(".order_summary").textContent = "";
  } else {
    arr.map(function (el, index) {
      var div = document.createElement("div");

      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      var div4 = document.createElement("div");
      var div5 = document.createElement("div");

      var div1_img = document.createElement("img");
      var div2_p = document.createElement("p");
      var div3_div = document.createElement("div");

      var div3_div_button1 = document.createElement("button");
      var div3_div_span = document.createElement("span");
      var div3_div_button2 = document.createElement("button");

      var div4_span = document.createElement("span");
      var div5_span = document.createElement("span");

      div1_img.setAttribute("src", el.imgUrl);
      div1_img.setAttribute("class", "cartImage");
      div1.append(div1_img);
      div2_p.textContent = el.prodhead;
      div2.append(div2_p);
      div4_span.textContent = el.prodprice;
      div4.append(div4_span);
      div5_span.textContent = "X";
      div5_span.setAttribute("class", "remove_from_cart");
      div5_span.addEventListener("click", function () {
        remove(index, arr);
      });
      div5.append(div5_span);

      div3_div.setAttribute("class", "up_and_down");
      div3_div_button1.textContent = "+";
      div3_div_button2.textContent = "-";
      div3_div_span.textContent = el.count;
      div3_div_span.setAttribute("class", "no_of_product");

      div3_div_button1.addEventListener("click", function () {
        increment(index, arr);
      });
      div3_div_button2.addEventListener("click", function () {
        decrement(index, arr);
      });
      div3_div.append(div3_div_button1, div3_div_span, div3_div_button2);
      div3.append(div3_div);

      div.append(div1, div2, div3, div4, div5);
      document.querySelector(".product_container").append(div);
    });
  }
}

function updateCheckoutSection(arr) {
  var total_price_without_delivery = arr.reduce(function (ac, el) {
    var price = el.prodprice;
    if (price[0] == "₹") price = price.slice(1);
    else price = el.prodprice;
    count = el.count;
    return ac + Number(price) * Number(count);
  }, 0);
  var delivery_charges = 0;
  var total_price_of_cart_items_with_delivery_charges =
    total_price_without_delivery + delivery_charges;
  document.querySelector("#total_number_of_cart_items").textContent = "";
  document.querySelector("#total_number_of_cart_items").textContent =
    arr.length + " x items";

  document.querySelector(
    "#total_price_of_cart_items_without_delivery_charges"
  ).textContent = "";
  document.querySelector(
    "#total_price_of_cart_items_without_delivery_charges"
  ).textContent = "₹" + total_price_without_delivery;

  document.querySelector("#delivery_charges").textContent = "";
  document.querySelector("#delivery_charges").textContent =
    "₹" + delivery_charges;

  document.querySelector(
    "#total_price_of_cart_items_with_delivery_charges"
  ).textContent = "";
  document.querySelector(
    "#total_price_of_cart_items_with_delivery_charges"
  ).textContent =
    "₹" + (total_price_of_cart_items_with_delivery_charges + delivery_charges);
}
function increment(index, arr) {
  arr[index].count++;
  display(arr);
  updateCheckoutSection(arr);
}
function decrement(index, arr) {
  if (arr[index].count > 1) {
    arr[index].count--;
    display(arr);
    updateCheckoutSection(arr);
  }
}
function remove(index, arr) {
  arr.splice(index, 1);
  display(arr);
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCheckoutSection(arr);
}
function checkout_button() {
  window.loction.href = "payment_gateway.html";
}