document.addEventListener("DOMContentLoaded", function () {
  // get value of search-bar and scroll to intended portion.
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      var input = document.getElementById("searchBar");
      var value = input.value;
      console.log(value);
      var categories = document.querySelectorAll(
        "#buy-fruits > div div"
      );
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

