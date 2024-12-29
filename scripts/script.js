let $ = document;
let navbar = $.querySelector(".navbar");

$.addEventListener("scroll", function (e) {
  console.log(document.documentElement.scrollTop);
  if ($.documentElement.scrollTop >= 30) {
    navbar.style.height = "70px";
    navbar.style.backgroundColor = "#000";
    navbar.style.color = "#fff";
  } else {
    navbar.style.height = "90px";
    navbar.style.backgroundColor = "#fff";
    navbar.style.color = "#000";
  }
});
