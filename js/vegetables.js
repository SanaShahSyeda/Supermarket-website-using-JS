let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

var cart_value = 1;
var c_q = 0;
var p_q = 0;
var l_q = 0;
var to_q = 0;
var b_q = 0;
var br_q = 0;
var a_q = 0;
var cu_q = 0;
var s_q = 0;
var r_q = 0;
var k_q = 0;
var le_q = 0;
var e_q = 0;
var y_q = 0;
var ce_q = 0;
var t_q = 0;

document
  .getElementById("c-plus")
  .addEventListener("click", add_carrot_quantity);
document
  .getElementById("c-minus")
  .addEventListener("click", sub_carrot_quantity);
document
  .getElementById("p-plus")
  .addEventListener("click", add_potato_quantity);
document
  .getElementById("p-minus")
  .addEventListener("click", sub_potato_quantity);
document
  .getElementById("t-plus")
  .addEventListener("click", add_turnip_quantity);
document
  .getElementById("t-minus")
  .addEventListener("click", sub_turnip_quantity);
document.getElementById("b-plus").addEventListener("click", add_beet_quantity);
document.getElementById("b-minus").addEventListener("click", sub_beet_quantity);
document.getElementById("y-plus").addEventListener("click", add_yam_quantity);
document.getElementById("y-minus").addEventListener("click", sub_yam_quantity);
document
  .getElementById("r-plus")
  .addEventListener("click", add_raddish_quantity);
document
  .getElementById("r-minus")
  .addEventListener("click", sub_raddish_quantity);
document.getElementById("k-plus").addEventListener("click", add_kale_quantity);
document.getElementById("k-minus").addEventListener("click", sub_kale_quantity);
document
  .getElementById("le-plus")
  .addEventListener("click", add_lettuce_quantity);
document
  .getElementById("le-minus")
  .addEventListener("click", sub_lettuce_quantity);
document
  .getElementById("s-plus")
  .addEventListener("click", add_spinach_quantity);
document
  .getElementById("s-minus")
  .addEventListener("click", sub_spinach_quantity);
document
  .getElementById("ce-plus")
  .addEventListener("click", add_celery_quantity);
document
  .getElementById("ce-minus")
  .addEventListener("click", sub_celery_quantity);
document
  .getElementById("a-plus")
  .addEventListener("click", add_asparagus_quantity);
document
  .getElementById("a-minus")
  .addEventListener("click", sub_asparagus_quantity);
document
  .getElementById("br-plus")
  .addEventListener("click", add_brocolli_quantity);
document
  .getElementById("br-minus")
  .addEventListener("click", sub_brocolli_quantity);
document
  .getElementById("to-plus")
  .addEventListener("click", add_tomato_quantity);
document
  .getElementById("to-minus")
  .addEventListener("click", sub_tomato_quantity);
document
  .getElementById("cu-plus")
  .addEventListener("click", add_cucumbur_quantity);
document
  .getElementById("cu-minus")
  .addEventListener("click", sub_cucumbur_quantity);
document
  .getElementById("e-plus")
  .addEventListener("click", add_eggplant_quantity);
document
  .getElementById("e-minus")
  .addEventListener("click", sub_eggplant_quantity);

function add_carrot_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("carrot");
  console.log(div);
  const span = div.querySelector("span");
  console.log(span);
  c_q = parseInt(span.textContent);
  span.textContent = c_q + 1;
}

function sub_carrot_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("carrot");
  const span = div.querySelector("span");
  c_q = parseInt(span.textContent);
  if (c_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = c_q - 1;
  }
}

function add_potato_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("potato");
  const span = div.querySelector("span");
  p_q = parseInt(span.textContent);
  span.textContent = p_q + 1;
}

function sub_potato_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("potato");
  const span = div.querySelector("span");
  p_q = parseInt(span.textContent);
  if (p_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = p_q - 1;
  }
}

function add_turnip_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("turnip");
  const span = div.querySelector("span");
  t_q = parseInt(span.textContent);
  span.textContent = t_q + 1;
}

function sub_turnip_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("turnip");
  const span = div.querySelector("span");
  t_q = parseInt(span.textContent);
  if (t_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = t_q - 1;
  }
}

function add_beet_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("beet");
  const span = div.querySelector("span");
  b_q = parseInt(span.textContent);
  span.textContent = b_q + 1;
}

function sub_beet_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("beet");
  const span = div.querySelector("span");
  b_q = parseInt(span.textContent);
  if (b_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = b_q - 1;
  }
}

function add_yam_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("yam");
  const span = div.querySelector("span");
  y_q = parseInt(span.textContent);
  span.textContent = y_q + 1;
}

function sub_yam_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("yam");
  const span = div.querySelector("span");
  y_q = parseInt(span.textContent);
  if (y_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = y_q - 1;
  }
}

function add_raddish_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("raddish");
  const span = div.querySelector("span");
  r_q = parseInt(span.textContent);
  span.textContent = r_q + 1;
}

function sub_raddish_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("raddish");
  const span = div.querySelector("span");
  r_q = parseInt(span.textContent);
  if (r_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = r_q - 1;
  }
}

function add_kale_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("kale");
  const span = div.querySelector("span");
  k_q = parseInt(span.textContent);
  span.textContent = k_q + 1;
}

function sub_kale_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("kale");
  const span = div.querySelector("span");
  k_q = parseInt(span.textContent);
  if (k_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = k_q - 1;
  }
}
function add_lettuce_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("lettuce");
  const span = div.querySelector("span");
  le_q = parseInt(span.textContent);
  span.textContent = le_q + 1;
}

function sub_lettuce_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("lettuce");
  const span = div.querySelector("span");
  le_q = parseInt(span.textContent);
  if (le_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = le_q - 1;
  }
}
function add_spinach_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("spinach");
  const span = div.querySelector("span");
  s_q = parseInt(span.textContent);
  span.textContent = s_q + 1;
}

function sub_spinach_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("spinach");
  const span = div.querySelector("span");
  s_q = parseInt(span.textContent);
  if (s_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = s_q - 1;
  }
}
function add_celery_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("celery");
  const span = div.querySelector("span");
  ce_q = parseInt(span.textContent);
  span.textContent = ce_q + 1;
}

function sub_celery_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("celery");
  const span = div.querySelector("span");
  ce_q = parseInt(span.textContent);
  if (ce_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = ce_q - 1;
  }
}
function add_asparagus_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("asparagus");
  const span = div.querySelector("span");
  a_q = parseInt(span.textContent);
  span.textContent = a_q + 1;
}

function sub_asparagus_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("asparagus");
  const span = div.querySelector("span");
  a_q = parseInt(span.textContent);
  if (a_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = a_q - 1;
  }
}
function add_brocolli_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("brocolli");
  const span = div.querySelector("span");
  br_q = parseInt(span.textContent);
  span.textContent = br_q + 1;
}

function sub_brocolli_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("brocolli");
  const span = div.querySelector("span");
  br_q = parseInt(span.textContent);
  if (br_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = br_q - 1;
  }
}

function add_tomato_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("tomato");
  const span = div.querySelector("span");
  to_q = parseInt(span.textContent);
  span.textContent = to_q + 1;
}

function sub_tomato_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("tomato");
  const span = div.querySelector("span");
  to_q = parseInt(span.textContent);
  if (to_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = to_q - 1;
  }
}

function add_cucumbur_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("cucumbur");
  const span = div.querySelector("span");
  cu_q = parseInt(span.textContent);
  span.textContent = cu_q + 1;
}

function sub_cucumbur_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("cucumbur");
  const span = div.querySelector("span");
  cu_q = parseInt(span.textContent);
  if (cu_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = cu_q - 1;
  }
}

function add_eggplant_quantity(event) {
  event.preventDefault();
  // cart_value += 1;
  const div = document.getElementById("eggplant");
  const span = div.querySelector("span");
  e_q = parseInt(span.textContent);
  span.textContent = e_q + 1;
}

function sub_eggplant_quantity(event) {
  event.preventDefault();
  const div = document.getElementById("eggplant");
  const span = div.querySelector("span");
  e_q = parseInt(span.textContent);
  if (e_q > 1) {
    // cart_value = cart_value - 1;
    span.textContent = e_q - 1;
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
