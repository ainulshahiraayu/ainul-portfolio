// DARK MODE TOGGLE
const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Tukar label button ikut mode semasa
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});

// EXPLORE MORE BUTTON SCROLL
const exploreBtn = document.getElementById("explore-btn");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    const portfolioSection = document.querySelector("#portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
}
