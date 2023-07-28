// Hero Swiper

const heroSwiper = new Swiper(".hero-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hero-nav-next",
    prevEl: ".hero-nav-prev",
  },
});

// Offer Swiper

const offerSwiper = new Swiper(".offer-slider", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: ".offer-pagination",
    clickable: true,
  },
});

// Tablet Swiper

const tabletSwiper = new Swiper(".tablet-swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".vertical-pagination",
    clickable: true,
  },
});

// New Arrivals Swiper

const naSwiper = new Swiper(".new-arrivals-swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".na-nextt",
    prevEl: ".na-prevv",
  },
});

// Articles Swiper

const articlesSwiper = new Swiper(".articles-swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Tab Panels

const newProductsTab = document.querySelector(".trending-items-tab");

const tabButtons = newProductsTab.querySelectorAll(".np-btn");

const tabPanels = document.querySelectorAll(".tab-panel");

function showTab(tabId) {
  tabPanels.forEach((panel) => {
    panel.style.display = "none";
    panel.classList.remove("show");
  });

  const selectedPanel = document.getElementById(tabId);
  if (selectedPanel) {
    selectedPanel.style.display = "block";
    selectedPanel.classList.add("show");
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    const targetTab = this.getAttribute("aria-controls");

    showTab(targetTab);
  });
});

if (tabButtons.length > 0) {
  const firstButton = tabButtons[0];
  const firstTab = firstButton.getAttribute("aria-controls");
  showTab(firstTab);
  firstButton.classList.add("active");
}
