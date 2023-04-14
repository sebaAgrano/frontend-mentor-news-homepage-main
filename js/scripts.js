const buttonOpen = document.getElementById("open-menu");
const buttonClose = document.getElementById("close-menu");
const menu = document.getElementById("menu");

const disableScroll = () => {
  window.scrollTo(0, 0);
};

const openMenu = () => {
  buttonOpen.classList.add("hide");
  menu.classList.add("show");
  window.addEventListener("scroll", disableScroll);
};

const closeMenu = () => {
  menu.classList.remove("show");
  buttonOpen.classList.remove("hide");
  window.removeEventListener("scroll", disableScroll);
};

buttonOpen.addEventListener("click", openMenu);
buttonClose.addEventListener("click", closeMenu);
