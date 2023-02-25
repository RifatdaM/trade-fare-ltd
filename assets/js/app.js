// Nav scroll shadow
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".navbar");
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});

// img model
document.querySelectorAll(".manufacture__img--group img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".img__popup").style.display = "block";
    document.querySelector(".img__popup img").src = image.getAttribute("src");
  };
  document.querySelector(".img__popup span").onclick = () => {
    document.querySelector(".img__popup").style.display = "none";
  };
});

// btn toggle
function tabBtn(evt, tabName) {
  var i, product__details__infos, btn__toggle;
  product__details__infos = document.getElementsByClassName("product__details--info");
  for (i = 0; i < product__details__infos.length; i++) {
    product__details__infos[i].style.display = "none";
  }
  btn__toggle = document.getElementsByClassName("btn-toggle");
  for (i = 0; i < btn__toggle.length; i++) {
    btn__toggle[i].className = btn__toggle[i].className.replace(" btn-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " btn-active";
}