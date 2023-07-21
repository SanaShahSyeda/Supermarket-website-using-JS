document.addEventListener("DOMContentLoaded", function () {
  // get value of search-bar and scroll to intended portion.
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      var input = document.getElementById("searchBar");
      var value = input.value;
      console.log(value);
      var categories = document.querySelectorAll("#buy-fruits > div div");
      var found = false;
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        console.log(categories[i]);
        var categoryName = category.getAttribute("id");
        if (
          categoryName == "apples" ||
          categoryName == "bananas" ||
          categoryName == "oranges" ||
          categoryName == "grapes" ||
          categoryName == "apricots" ||
          categoryName == "watermelon" ||
          categoryName == "strawberries" ||
          categoryName == "pomegranate"
        ) {
          if (categoryName.includes(value)) {
            category.scrollIntoView({ behavior: "smooth" });
            found = true;
            break;
          }
        }
      }
      if (!found) {
        alert("Category not found.");
      }
    });
});

var cart_value = 1;

document
  .getElementById("apple-plus")
  .addEventListener("click", add_apple_quantity);
document
  .getElementById("apple-minus")
  .addEventListener("click", sub_apple_quantity);
document
  .getElementById("orange-plus")
  .addEventListener("click", add_orange_quantity);
document
  .getElementById("orange-minus")
  .addEventListener("click", sub_orange_quantity);
document
  .getElementById("grape-plus")
  .addEventListener("click", add_grape_quantity);
document
  .getElementById("grape-minus")
  .addEventListener("click", sub_grape_quantity);
document
  .getElementById("banana-minus")
  .addEventListener("click", sub_banana_quantity);
document
  .getElementById("banana-plus")
  .addEventListener("click", add_banana_quantity);
document
  .getElementById("apricot-minus")
  .addEventListener("click", sub_apricot_quantity);
document
  .getElementById("apricot-plus")
  .addEventListener("click", add_apricot_quantity);
document
  .getElementById("watermelon-minus")
  .addEventListener("click", sub_watermelon_quantity);
document
  .getElementById("watermelon-plus")
  .addEventListener("click", add_watermelon_quantity);
document
  .getElementById("pomegranate-minus")
  .addEventListener("click", sub_pomegranate_quantity);
document
  .getElementById("pomegranate-plus")
  .addEventListener("click", add_pomegranate_quantity);
document
  .getElementById("strawberrie-minus")
  .addEventListener("click", sub_strawberrie_quantity);
document
  .getElementById("strawberrie-plus")
  .addEventListener("click", add_strawberrie_quantity);

function add_banana_quantity(event) {
  //prevents loading of page
  event.preventDefault();
  cart_value += 1;
  var span = document.querySelector("#bananas .quantity");
  banana_q = parseInt(span.textContent);
  span.textContent = banana_q + 1;
}

function sub_banana_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#bananas .quantity");
  banana_q = parseInt(span.textContent);
  if (banana_q > 1) {
    cart_value = cart_value - 1;
    span.textContent = banana_q - 1;
  }
}

function add_apple_quantity(event) {
  //prevents loading of page
  event.preventDefault();
  cart_value += 1;
  var span = document.querySelector("#apples div .quantity");
  var apple_q = parseInt(span.textContent);
  span.textContent = apple_q + 1;
}
function sub_apple_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#apples div .quantity");
  var apple_q = parseInt(span.textContent);
  if (apple_q > 1) {
    cart_value = cart_value - 1;
    span.textContent = apple_q - 1;
  }
}
function add_grape_quantity(event) {
  //prevents loading of page
  event.preventDefault();
  cart_value += 1;
  var span = document.querySelector("#grapes div .quantity");
  var grape_q = parseInt(span.textContent);
  span.textContent = grape_q + 1;
}
function sub_grape_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#grapes  div .quantity");
  var grape_q = parseInt(span.textContent);
  if (grape_q > 1) {
    cart_value = cart_value - 1;
    span.textContent = grape_q - 1;
  }
}
function add_orange_quantity(event) {
    //prevents loading of page
    event.preventDefault();
    cart_value += 1;
    var span = document.querySelector("#oranges div .quantity");
    var orange_q = parseInt(span.textContent);
    span.textContent = orange_q + 1;
  }
  function sub_orange_quantity(event) {
    //prevents loading of page
    event.preventDefault();
  
    var span = document.querySelector("#oranges  div .quantity");
    var orange_q = parseInt(span.textContent);
    if (orange_q > 1) {
      cart_value = cart_value - 1;
      span.textContent = orange_q - 1;
    }
  }

  function add_apricot_quantity(event) {
    //prevents loading of page
    event.preventDefault();
    cart_value += 1;
    var span = document.querySelector("#apricots div .quantity");
    var apricot_q = parseInt(span.textContent);
    span.textContent = apricot_q + 1;
  }
  function sub_apricot_quantity(event) {
    //prevents loading of page
    event.preventDefault();
  
    var span = document.querySelector("#apricots  div .quantity");
    var apricot_q = parseInt(span.textContent);
    if (orange_q > 1) {
      cart_value = cart_value - 1;
      span.textContent = apricot_q - 1;
    }
  }

  function add_watermelon_quantity(event) {
    //prevents loading of page
    event.preventDefault();
    cart_value += 1;
    var span = document.querySelector("#watermelon div .quantity");
    var watermelon_q = parseInt(span.textContent);
    span.textContent = watermelon_q + 1;
  }
  function sub_watermelon_quantity(event) {
    //prevents loading of page
    event.preventDefault();
  
    var span = document.querySelector("#apricots  div .quantity");
    var watermelon_q = parseInt(span.textContent);
    if (orange_q > 1) {
      cart_value = cart_value - 1;
      span.textContent = watermelon_q - 1;
    }
  }

  function add_pomegranate_quantity(event) {
    //prevents loading of page
    event.preventDefault();
    cart_value += 1;
    var span = document.querySelector("#pomegranate div .quantity");
    var pomegranate_q = parseInt(span.textContent);
    span.textContent = pomegranate_q + 1;
  }
  function sub_pomegranate_quantity(event) {
    //prevents loading of page
    event.preventDefault();
  
    var span = document.querySelector("#pomegranate  div .quantity");
    var pomegranate_q = parseInt(span.textContent);
    if (pomegranate_q > 1) {
      cart_value = cart_value - 1;
      span.textContent = pomegranate_q - 1;
    }
  }

  function add_strawberrie_quantity(event) {
    //prevents loading of page
    event.preventDefault();
    cart_value += 1;
    var span = document.querySelector("#strawberries div .quantity");
    var strawberrie_q = parseInt(span.textContent);
    span.textContent =strawberrie_q + 1;
  }
  function sub_strawberrie_quantity(event) {
    //prevents loading of page
    event.preventDefault();
  
    var span = document.querySelector("#strawberries div .quantity");
    var strawberrie_q = parseInt(span.textContent);
    if (strawberrie_q > 1) {
      cart_value = cart_value - 1;
      span.textContent = strawberrie_q - 1;
    }
  }

function addCart(event, id) {
  event.preventDefault();
  var cart_status = document.querySelector("#cart .cart-status");
  if (cart_status) {
    cart_value = parseInt(cart_status.textContent) + 1;
    cart_status.textContent = cart_value;
  } else {
    var newElement = document.createElement("span");
    newElement.textContent = cart_value;
    newElement.classList.add("cart-status");
    var container = document.getElementById("cart");
    container.appendChild(newElement);
  }
}
