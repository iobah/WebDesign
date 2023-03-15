let box = document.querySelector("#box");
let isShown = false;

function showBox() {
  if (isShown) {
    box.style.display = "none";
    isShown = false;
  } else {
    box.style.display = "block";
    isShown = true;
  }
}