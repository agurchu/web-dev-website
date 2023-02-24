const collapsibleEl = document.querySelectorAll(".collapsible");

collapsibleEl.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  });
});
