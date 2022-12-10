/* Dark mode */

// Capture current theme from local storage and adjust page to use the current theme.
const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

// When the user changes the theme, save the new value on local storage
const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
    localStorage.setItem('theme', theme);
}
/* /// */

// Header Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}

// Sidebar

function sideBar() {
  var element = document.getElementById("sidebar");
  element.classList.toggle("sidebar-enabled");
}

function backgroundDim() {
  var element = document.getElementById("background-dim");
  element.classList.toggle("dim-enabled");
}

// Store warning popup

function storeWarning() {
  var element = document.getElementById("warning-container");
  element.classList.toggle("warning-shown");
}

// Toast

function toastMessage() {
  // Get the snackbar DIV
  var x = document.getElementById("toast");

  // Add the "show" class to DIV
  x.className = "toast-shown";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("toast-shown", ""); }, 3000);
}

// QR IDS

  // Reev Pro
function reev_qr() {
  var element = document.getElementById("reev_qr");
  element.classList.toggle("reev_qr_enabled");
}

  // Reev Dark
function reevdark_qr() {
  var element = document.getElementById("reevdark_qr");
  element.classList.toggle("reevdark_qr_enabled");
}

  // DashCards
function dashcards_qr() {
  var element = document.getElementById("dashcards_qr");
  element.classList.toggle("dashcards_qr_enabled");
}

  // Gradjent
function gradjent_qr() {
  var element = document.getElementById("gradjent_qr");
  element.classList.toggle("gradjent_qr_enabled");
}

  // Minimus
function minimus_qr() {
  var element = document.getElementById("minimus_qr");
  element.classList.toggle("minimus_qr_enabled");
}

  // Catalyst
  function catalyst_qr() {
    var element = document.getElementById("catalyst_qr");
    element.classList.toggle("catalyst_qr_enabled");
  }
  
