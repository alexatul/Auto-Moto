// dropdown menu

const dropdowns = document.getElementsByClassName("dropdown");
const dropdownsContent = document.getElementsByClassName("nav-dropdown");

function initDropdowns() {
  for (let dropdownContent of dropdownsContent) {
    dropdownContent.style.display = "none";
    initSecondaryDropdownsListener(dropdownContent);
  }
}

function initMainDropdownsListener() {
  for (let dropdown of dropdowns) {
    dropdown.addEventListener("click", () => {
      const dropdownContent =
        dropdown.parentNode.querySelector(".nav-dropdown");

      if (dropdownContent.style.display === "none") {
        initDropdowns();
      }

      dropdownContent.style.display =
        dropdownContent.style.display === "none" ? "block" : "none";
    });
  }
}

function initSecondaryDropdownsListener(parentDropdown) {
  const secondaryDropdowns = parentDropdown.querySelectorAll(".dropdown-link");

  for (let secondaryDropdown of secondaryDropdowns) {
    secondaryDropdown.addEventListener("mouseover", () => {
      const dropdownContent =
        secondaryDropdown.parentNode.querySelector(".nav-dropdown-link");

      dropdownContent.style.display = "block";
    });

    secondaryDropdown.addEventListener("mouseout", () => {
      const dropdownContent =
        secondaryDropdown.parentNode.querySelector(".nav-dropdown-link");

      dropdownContent.style.display = "none";
    });
  }
}

initDropdowns();
initMainDropdownsListener();

// menu bar responsive

document.querySelector(".nav-mobile").addEventListener("click", abc);
function abc() {
  document.querySelector(".navbar-left").classList.toggle("show");
}

// login
// onclick="document.getElementById('id01').style.display='none'"
// let loginForm = document.getElementById("id01");
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
// if (event.target == modal) {
//    modal.style.display = "none";
//  }
//};

function loginFormOpen() {
  const loginButtons = document.getElementsByClassName("button-login");
  const loginForm = document.getElementById("login-form");
  for (let loginButton of loginButtons) {
    loginButton.addEventListener("click", () => {
      loginForm.style.display = "block";
    });
  }
}
loginFormOpen();

function loginFormClose() {
  const loginCloseButtons = document.getElementsByClassName("close");
  const loginForm = document.getElementById("login-form");
  for (let loginCloseButton of loginCloseButtons) {
    loginCloseButton.addEventListener("click", () => {
      loginForm.style.display = "none";
    });
  }
}
loginFormClose();

function loginCancelButton() {
  const loginCancelButtons = document.getElementsByClassName("cancel-button");
  const loginForm = document.getElementById("login-form");
  for (let loginCancelButton of loginCancelButtons) {
    loginCancelButton.addEventListener("click", () => {
      loginForm.style.display = "none";
    });
  }
}
loginCancelButton();

// selected
function selection() {
  let modelBrand = {
    Electrice: {
      "Peugeot 208": [],
      "Peugeot e-Boxer": [],
      "Opel Corsa-e": [],
    },
    Hybrid: {
      "Lexus ES": [],
      "Suzuki Vitara": [],
    },
    SUV: {
      "Volvo XC40": [],
      "Skoda Kodiaq": [],
      "Range Rover Evoque": [],
    },
  };
  window.onload = function () {
    let selectModel = document.getElementById("select-model");
    let selectBrand = document.getElementById("select-brand");
    for (let x in modelBrand) {
      selectModel.options[selectModel.options.length] = new Option(x, x);
    }
    selectModel.onchange = function () {
      //empty Chapters- and Topics- dropdowns
      selectBrand.length = 1;
      //display correct values
      for (let y in modelBrand[this.value]) {
        selectBrand.options[selectBrand.options.length] = new Option(y, y);
      }
    };
  };
}
selection();

/*
function showDivPeugeot208() {
  document.getElementById("Cpeugeot208").style.display = "block";
}
function showDivPeugeotBoxer() {
  document.getElementById("Cpeugeotboxer").style.display = "block";
}

function myFunction() {
  document.getElementById("myDIV").style.display = "none";
}
*/
