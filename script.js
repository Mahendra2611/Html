document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const headerWrapper = document.querySelector(".header-wrapper");
  const body = document.body;
  let lastScrollY = window.scrollY;

  // Dropdown hover behavior
  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      body.classList.add("no-scroll");
    });

    item.addEventListener("mouseleave", () => {
      body.classList.remove("no-scroll");
    });
  });

  // Show/hide header on scroll direction
  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 50) {
      // Scroll down - header hide
      headerWrapper.style.transform = "translateY(-100%)";
    } else {
      // Scroll up - header show
      headerWrapper.style.transform = "translateY(0)";
    }

    lastScrollY = currentScroll;
  });
});
