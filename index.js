let nav = document.getElementById("nav");
let a;
function show_nav() {
  if (a == 1) {
    nav.style.transition = "all 1s";
    nav.style.display = "block";

    return (a = 0);
  } else {
    nav.style.transition = "all 1s";
    nav.style.display = "none";

    return (a = 1);
  }
}
