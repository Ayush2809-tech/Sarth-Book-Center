// ===== Smooth Scroll for Navbar Links =====
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// ===== Simple Alert on Contact Info =====
const contactSection = document.querySelector("#contact");
if (contactSection) {
  contactSection.addEventListener("mouseenter", () => {
    console.log("You’re viewing the contact section of Sarth Book Center!");
  });
}
