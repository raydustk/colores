document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById("id1");
  
    function pintar(element, color = 'green') {
      element.style.backgroundColor = color;
    }
  
    ele.addEventListener("click", function() {
      pintar(ele, 'yellow');
    });
  });
  