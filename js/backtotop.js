var button = document.getElementById("backtotop");
button.style.display = "none";

const thresh = 50; // px of scroll after which to display button

window.onscroll = function() {displaybutton()};

function displaybutton() {
  if (document.body.scrollTop > thresh || document.documentElement.scrollTop > thresh) {
    button.style.display = "";
  } else {
    button.style.display = "none";
  }
}

function backtotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}