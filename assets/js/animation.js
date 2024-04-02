document.querySelector(".return_icon").addEventListener("click", () => {
  document.querySelector(".return_icon").classList.toggle("return_icon_trans");
  setTimeout(() => {
    document.querySelector(".return_icon").classList.remove("return_icon_trans");
  }, 1300);
});
