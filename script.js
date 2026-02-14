// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Animate skill bars on scroll
window.addEventListener("scroll", () => {
  const skills = document.getElementById("skills");
  const position = skills.getBoundingClientRect().top;
  if (position < window.innerHeight - 100) {
    document.querySelectorAll(".progress")
      .forEach(bar => bar.style.width = bar.classList.contains("java") ? "90%" : bar.style.width);
  }
});