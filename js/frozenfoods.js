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
var v_q=0;
var d_q=0;
var s_q=0;
var sn_q=0;
var f_q=0;
var v_p=0;
var v_p=0;
var d_p=0;
var s_p=0;
var sn_p=0;
var f_p=0;

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

  function add_vegetable_quantity(event){
    event.preventDefault();
    // cart_value += 1;
    const div = document.getElementById("frozen-vegetables");
    const price= div.querySelector("h4");
    const span = div.querySelector("span");
    v_p = parseFloat(price.textContent);
    v_q = parseInt(span.textContent);
    span.textContent = v_q + 1;
    price.textContent= v_p*2;
  }

  function sub_vegetable_quantity(event){
    event.preventDefault();
    const div = document.getElementById("frozen-vegetables");
    const price= div.querySelector("h4");
    const span = div.querySelector("span");
    v_p = parseFloat(price.textContent);
    v_q = parseInt(span.textContent);
    if (v_q > 1) {
      // cart_value = cart_value - 1;
      span.textContent = v_q - 1;
      price.textContent= v_p/2;
    }
  }