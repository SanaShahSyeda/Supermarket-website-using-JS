var slider = document.getElementById("myrange");
var div1 = document.getElementById("frozen-vegetables");
var div2 = document.getElementById("frozen-deserts");
var div3 = document.getElementById("frozen-seafood");
var div4 = document.getElementById("frozen-snacks");
var div5 = document.getElementById("frozen-fruits");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  if (slider.value > 50) {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "inline-flex";
    div5.style.display = "inline-flex";
    div4.style.marginLeft = "300px";
  } else {
    div1.style.display = "inline-flex";
    div2.style.display = "inline-flex";
    div3.style.display = "inline-flex";
    div4.style.display = "none";
    div5.style.display = "none";
  }
};

function submitForm(event, id) {
  event.preventDefault();
  alert("form submitted succesfully !!");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var freetext = document.getElementById("freetext");
  name.value = "";
  email.value = "";
  freetext.value = "";
}

var cart_value = 1;
var v_q = 0;
var d_q = 0;
var s_q = 0;
var sn_q = 0;
var f_q = 0;
var v_p = 0;
var v_p = 0;
var d_p = 0;
var s_p = 0;
var sn_p = 0;
var f_p = 0;

document
  .getElementById("v-plus")
  .addEventListener("click", add_vegetable_quantity);
document
  .getElementById("v-minus")
  .addEventListener("click", sub_vegetable_quantity);
document
  .getElementById("d-plus")
  .addEventListener("click", add_desert_quantity);
document
  .getElementById("d-minus")
  .addEventListener("click", sub_desert_quantity);
document
  .getElementById("s-plus")
  .addEventListener("click", add_seafood_quantity);
document
  .getElementById("s-minus")
  .addEventListener("click", sub_seafood_quantity);
document
  .getElementById("sn-plus")
  .addEventListener("click", add_snacks_quantity);
document
  .getElementById("sn-minus")
  .addEventListener("click", sub_snacks_quantity);
document
  .getElementById("f-plus")
  .addEventListener("click", add_fruits_quantity);
document
  .getElementById("f-minus")
  .addEventListener("click", sub_fruits_quantity);

function add_vegetable_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("frozen-vegetables");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  v_p = parseFloat(price.textContent);
  v_q = parseInt(span.textContent);
  span.textContent = v_q + 1;
  price.textContent = v_p * 2;
}

function sub_vegetable_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("frozen-vegetables");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  v_p = parseFloat(price.textContent);
  v_q = parseInt(span.textContent);
  if (v_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = v_q - 1;
    price.textContent = v_p / 2;
  }
}

function add_desert_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("frozen-deserts");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  d_p = parseFloat(price.textContent);
  d_q = parseInt(span.textContent);
  span.textContent = d_q + 1;
  price.textContent = d_p * 2;
}

function sub_desert_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("frozen-deserts");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  d_p = parseFloat(price.textContent);
  d_q = parseInt(span.textContent);
  if (d_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = d_q - 1;
    price.textContent = d_p / 2;
  }
}

function add_seafood_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("frozen-seafood");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  s_p = parseFloat(price.textContent);
  s_q = parseInt(span.textContent);
  span.textContent = s_q + 1;
  price.textContent = s_p * 2;
}

function sub_seafood_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("frozen-seafood");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  s_p = parseFloat(price.textContent);
  s_q = parseInt(span.textContent);
  if (s_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = s_q - 1;
    price.textContent = s_p / 2;
  }
}

function add_snacks_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("frozen-snacks");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  sn_p = parseFloat(price.textContent);
  sn_q = parseInt(span.textContent);
  span.textContent = sn_q + 1;
  price.textContent = sn_p * 2;
}

function sub_snacks_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("frozen-snacks");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  sn_p = parseFloat(price.textContent);
  sn_q = parseInt(span.textContent);
  if (sn_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = sn_q - 1;
    price.textContent = sn_p / 2;
  }
}

function add_fruits_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("frozen-fruits");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  f_p = parseFloat(price.textContent);
  f_q = parseInt(span.textContent);
  span.textContent = f_q + 1;
  price.textContent = f_p * 2;
}

function sub_fruits_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("frozen-fruits");
  const price = div.querySelector("h4");
  const span = div.querySelector("span");
  f_p = parseFloat(price.textContent);
  f_q = parseInt(span.textContent);
  if (f_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = f_q - 1;
    price.textContent = f_p / 2;
  }
}

function addCart(event, id) {
  event.preventDefault();
  var cart_status = document.querySelector("#cart .cart-status");
  var targetId = document.getElementById(id);
  var span = targetId.querySelector("span");
  if (cart_status) {
    var val = parseInt(span.textContent);
    cart_status.textContent = parseInt(cart_status.textContent) + val;
  } else {
    var newElement = document.createElement("span");
    var val = parseInt(span.textContent);
    newElement.textContent = val;
    newElement.classList.add("cart-status");
    var container = document.getElementById("cart");
    container.appendChild(newElement);
  }
}
