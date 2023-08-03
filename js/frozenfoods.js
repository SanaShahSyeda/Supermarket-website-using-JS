var slider = document.getElementById("myrange");
var div1 = document.getElementById("frozen-vegetables");
var div2 = document.getElementById("frozen-deserts");
var div3 = document.getElementById("frozen-seafood");
var div4 = document.getElementById("frozen-snacks");
var div5 = document.getElementById("frozen-fruits");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  if (slider.value > 50) {
    div1.style.display="none";
    div2.style.display="none";
    div3.style.display="none";
    div4.style.display = "inline-flex";
    div5.style.display = "inline-flex";
    div4.style.marginLeft="300px";
  }
  else{
    div1.style.display="inline-flex";
    div2.style.display="inline-flex";
    div3.style.display="inline-flex";
    div4.style.display ="none";
    div5.style.display ="none";
  }
};
