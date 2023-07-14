var beef_q = 0;
var chicken_q = 0;
var mutton_q = 0;

document
  .getElementById("form-search")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var input = document.getElementById("search-bar");
    var value = input.value;
    var categories = document.querySelectorAll("#meats > div");
    var found=false;
    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      var categoryName = category.getAttribute("id");
      if (categoryName.includes(value)) {
        category.scrollIntoView({ behavior: "smooth" });
        found=true;
        break;
      }
      if (!found) {
        alert("Category not found.");
      }
    }
  });

function add_quantity() {}

function sub_quantity() {}

function addCartStatus() {}
