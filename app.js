window.onscroll = function () {
  myFunction();
};

const header = document.getElementById("myHeader");

const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const site = document.querySelector(".site");

const footer = document.querySelector("footer");

if (site.offsetHeight >= window.innerHeight - 100) {
  footer.classList.add("relative");
} else {
  footer.classList.remove("relative");
}
