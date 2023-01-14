/*

 function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");

    window.onclick = function(event) {
    if (!event.target.matches('.click-button1')) {
      let dropdowns1 = document.getElementsByClassName("nav-content1");
      let i;
      for (i = 0; i < dropdowns1.length; i++) {
        let openDropdown1 = dropdowns1[i];
        if (openDropdown1.classList.contains('show')) {
          openDropdown1.classList.remove('show');
        }
      }
    }
  }
  }

  function myFunction3() {
    document.getElementById("myDropdown2").classList.toggle("show");

    window.onclick = function(event) {
    if (!event.target.matches('.click-button2')) {
      let dropdowns3 = document.getElementsByClassName("nav-content2");
      let i;
      for (i = 0; i < dropdowns3.length; i++) {
        let openDropdown3 = dropdowns3[i];
        if (openDropdown3.classList.contains('show')) {
          openDropdown3.classList.remove('show');
        }
      }
    }
  }
  }


  function myFunction2() {
    document.getElementById("submenu").classList.toggle("show");
}


*/





var y = document.getElementById("myDropdown2");
var x = document.getElementById("myDropdown");
var dropBut1 = document.getElementsByClassName("click-button1");
var dropBut2 = document.getElementsByClassName("click-button2");



  function myFunction1() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if(y.style.display === "block"){
      y.style.display = "none";

  }
 
}
  
  function myFunction3() {
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if(x.style.display === "block"){
      x.style.display = "none";

  }
 
}
  

