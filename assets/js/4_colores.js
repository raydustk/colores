document.addEventListener('DOMContentLoaded', function () {
    const blueDiv = document.getElementById("blue");
    const redDiv = document.getElementById("red");
    const greenDiv = document.getElementById("green");
    const yellowDiv = document.getElementById("yellow");
  
    function cambiarColorNegro(element) {
      element.style.backgroundColor = 'black';
    }
  
    azulDiv.addEventListener("click", function() {
      cambiarColorNegro(blueDiv);
    });
  
    rojoDiv.addEventListener("click", function() {
      cambiarColorNegro(redDiv);
    });
  
    verdeDiv.addEventListener("click", function() {
      cambiarColorNegro(greenDiv);
    });
  
    amarilloDiv.addEventListener("click", function() {
      cambiarColorNegro(yellowDiv);
    });
  });
  