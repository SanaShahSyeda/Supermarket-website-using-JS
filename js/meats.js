document.addEventListener("DOMContentLoaded", function () {
  var beef_q = 0;
  var chicken_q = 0;
  var mutton_q = 0;

  // get value of search-bar and scroll to intended portion.
  document
    .getElementById("form-search")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      var input = document.getElementById("search-bar");
      var value = input.value;
      var categories = document.querySelectorAll("#meats > div");
      var found = false;
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        var categoryName = category.getAttribute("id");
        if (categoryName.includes(value)) {
          category.scrollIntoView({ behavior: "smooth" });
          found = true;
          break;
        }
        if (!found) {
          alert("Category not found.");
        }
      }
    });
});

document
  .getElementById("c-plus")
  .addEventListener("click", add_chicken_quantity);
document
  .getElementById("c-minus")
  .addEventListener("click", sub_chicken_quantity);
document.getElementById("b-plus").addEventListener("click", add_beef_quantity);
document.getElementById("b-minus").addEventListener("click", sub_beef_quantity);
document
  .getElementById("m-plus")
  .addEventListener("click", add_mutton_quantity);
document
  .getElementById("m-minus")
  .addEventListener("click", sub_mutton_quantity);

function add_chicken_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#chicken .quantity");
  chicken_q = parseInt(span.textContent);
  span.textContent = chicken_q + 1;
}

function sub_chicken_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#chicken .quantity");
  chicken_q = parseInt(span.textContent);
  if (chicken_q > 1) {
    span.textContent = chicken_q - 1;
  }
}

function add_beef_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#beef .quantity");
  var beef_q = parseInt(span.textContent);
  span.textContent = beef_q + 1;
}
function sub_beef_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#beef .quantity");
  var beef_q = parseInt(span.textContent);
  if (beef_q > 1) {
    span.textContent = beef_q - 1;
  }
}
function add_mutton_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#mutton .quantity");
  var mutton_q = parseInt(span.textContent);
  span.textContent = mutton_q + 1;
}
function sub_mutton_quantity(event) {
  //prevents loading of page
  event.preventDefault();

  var span = document.querySelector("#mutton .quantity");
  var mutton_q = parseInt(span.textContent);
  if (mutton_q > 1) {
    span.textContent = mutton_q - 1;
  }
}

document.getElementById("c-plus").addEventListener("click", createElement);
// document
// .getElementById("b-plus")
// .addEventListener("click", createElement);
// document
// .getElementById("m-plus")
// .addEventListener("click", createElement);

function createElement(event) {
  event.preventDefault();

  var c = document.querySelectorAll("#form-search > a");
  console.log(c);
  for (var i = 0; i < c.length; i++) {
    var category = c[i];
    console.log(category);
    var categoryName = category.getAttribute("class");

    if (categoryName.includes("cart-status")) {
      break;
    } else {
      var newElement = document.createElement("span");
      newElement.textContent += " " + 1;

      //add classname to the new element
      newElement.classList.add("cart-status");

      // Add the new element to the container
      var container = document.getElementById("cart");
      container.appendChild(newElement);
      document
        .getElementById("c-plus")
        .removeEventListener("click", createElement);
      break;
    }
  }
}
function addCartStatus() {}
