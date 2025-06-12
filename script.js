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


  // Top section

  const bannerTexts = [
    "Free Shipping on All Orders Above 100 USD",
    "Subscribe now for Exclusive Offers",
    'Enjoy 15% Discount on your First order Use code : "NEW15"'
  ];

  let currentIndex = 0;
  const bannerSpan = document.getElementById("banner-text");

  function updateBanner(index) {
    bannerSpan.textContent = bannerTexts[index];
  }

  function nextBanner() {
    currentIndex = (currentIndex + 1) % bannerTexts.length;
    updateBanner(currentIndex);
  }

  function prevBanner() {
    currentIndex = (currentIndex - 1 + bannerTexts.length) % bannerTexts.length;
    updateBanner(currentIndex);
  }

  document.querySelector(".banner-next").addEventListener("click", () => {
    nextBanner();
    resetTimer();
  });

  document.querySelector(".banner-prev").addEventListener("click", () => {
    prevBanner();
    resetTimer();
  });

  let intervalId = setInterval(nextBanner, 2000);

  function resetTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(nextBanner, 2000);
  }



  // Country Selection
   const selector = document.querySelector(".country-selector");
  const selectedBtn = selector.querySelector(".selected-country");
  const list = selector.querySelector(".country-list");

  selectedBtn.addEventListener("click", () => {
    selector.classList.toggle("open");
  });

  list.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const flagCode = item.dataset.flag;
      const currencyCode = item.dataset.code;
      selectedBtn.innerHTML = `<img src="https://flagcdn.com/24x18/${flagCode}.png" /> <span>${currencyCode} ▼</span>`;
      selector.classList.remove("open");
    });
  });

  
  document.addEventListener("click", (e) => {
    if (!selector.contains(e.target)) {
      selector.classList.remove("open");
    }
  });
