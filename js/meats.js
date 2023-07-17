document.addEventListener("DOMContentLoaded", function () {
  //   var beef_q = 0;
  //   var chicken_q = 0;
  //   var mutton_q = 0;

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


document.getElementById("c-plus").addEventListener("click", add_chicken_quantity);
document.getElementById("c-minus").addEventListener("click", sub_chicken_quantity);
document.getElementById("b-plus").addEventListener("click", add_beef_quantity);
document.getElementById("b-minus").addEventListener("click", sub_beef_quantity);
document.getElementById("m-plus").addEventListener("click", add_mutton_quantity);
document.getElementById("m-minus").addEventListener("click", sub_mutton_quantity);

function add_chicken_quantity(event) {
  //prevents loading of page 
  event.preventDefault();

  var categorie = document.getElementById("chicken");
  var span = categorie.getElementsByClassName("quantity");
  var value = span[0].textContent;
  span[0].textContent = parseInt(value) + 1;
}

function sub_chicken_quantity(event) {
  //prevents loading of page 
  event.preventDefault();

  var categorie = document.getElementById("chicken");
  var span = categorie.getElementsByClassName("quantity");
  console.log("abcdefgh");
  var value = span[0].textContent;
  if (parseInt(value) > 1) {
    span[0].textContent = parseInt(value) - 1;
  }
}

function add_beef_quantity(event) {
   //prevents loading of page 
  event.preventDefault();

  var categorie = document.getElementById("beef");
  var span = categorie.getElementsByClassName("quantity");
  var value = span[0].textContent;
  span[0].textContent = parseInt(value) + 1;
}
function sub_beef_quantity(event) {
    //prevents loading of page 
  event.preventDefault();

  var categorie = document.getElementById("beef");
  var span = categorie.getElementsByClassName("quantity");
  var value = span[0].textContent;
  if (parseInt(value) > 1) {
    span[0].textContent = parseInt(value)-1;
  }
}
function add_mutton_quantity(event) {
     //prevents loading of page 
     event.preventDefault();

  var categorie = document.getElementById("mutton");
  var span = categorie.getElementsByClassName("quantity");
  var value = span[0].textContent;
  span[0].textContent = parseInt(value) + 1;
}
function sub_mutton_quantity(event) {
    //prevents loading of page 
    event.preventDefault();

  var categorie = document.getElementById("mutton");
  var span = categorie.getElementsByClassName("quantity");
  var value = span[0].textContent;
  if (parseInt(value) > 1) {
    span[0].textContent = parseInt(value)-1;
  }
}
function addCartStatus() {}
