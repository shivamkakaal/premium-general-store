
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

function filterCategory(category) {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    product.style.display = category === "all" || product.classList.contains(category) ? "block" : "none";
  });
}
