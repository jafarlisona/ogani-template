const accordionHeader = document.querySelector(".accordion-header .fa-angle-down");
const accordionContent = document.querySelector(".accordion-content");

accordionHeader.addEventListener("click", () => {
  console.log("hi");
  accordionContent.classList.toggle("open");
});
