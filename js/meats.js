document.addEventListener("DOMContentLoaded", function () {
  //   var beef_q = 0;
  //   var chicken_q = 0;
  //   var mutton_q = 0;


  // get value of quantity
  //   var spans = document.getElementsByClassName("quantity");
  //   for (var i = 0; i < spans.length; i++) {
  //     var value = spans[i].textContent;
  //     console.log(value);
  //     var images = document.getElementsByClassName("image");

  //     for (var i = 0; i < images.length; i++) {
  //       images[i].addEventListener("click", function (event) {
  //         event.preventDefault();
  //       });
  //     }
  //   }

  
  //   var d = document.getElementsById("meats");

  //     for (var i = 0; i < images.length; i++) {
  //       images[i].addEventListener("click", function (event) {
  //         event.preventDefault();
  //       });

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
function add_quantity() {}
function sub_quantity() {}
function addCartStatus() {}
