// Get DOM elements
const moreBtn = document.getElementById("more-btn");
const arrow = document.getElementById("arrow");
const dropdown = document.getElementById("dropdown");
const menuIcon = document.getElementById("menu-icon");
const exitBtn = document.getElementById("exit");
const hiddenMenu = document.getElementById("hidden-menu");
const laptopHeader = document.getElementById("laptop-header");
const hiddenHeader = document.getElementById("hidden-header");

// Ensure overlay exists once
let overlay = document.querySelector(".overlay");
if (!overlay) {
  overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
}

// Toggle dropdown menu function
function toggleDropdown(event) {
  event.stopPropagation(); // Prevent event bubbling
  dropdown.classList.toggle("active");
  arrow.classList.toggle("arrow-rotate");

  // Make sure dropdown is visible when active
  if (dropdown.classList.contains("active")) {
    dropdown.style.display = "block";
  }
}
// Close dropdown when clicking outside
function closeDropdownOnClickOutside(event) {
  if (!moreBtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
    arrow.classList.remove("arrow-rotate");
  }
}

// Toggle mobile menu function
function toggleMobileMenu() {
  const isActive = hiddenMenu.classList.contains("active");
  hiddenMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = isActive ? "auto" : "hidden"; // Prevent scrolling when open
}

// Handle responsive layout based on screen size
function handleResponsiveLayout() {
  if (window.innerWidth < 768) {
    // Mobile view
    if (laptopHeader) laptopHeader.style.display = "none";
    if (hiddenHeader) hiddenHeader.style.display = "flex";

    // Ensure dropdown is properly styled for  if (dropdown) dropdown.style.display = "none";
  } else {
    // Desktop view
    if (laptopHeader) laptopHeader.style.display = "flex";
    if (hiddenHeader) hiddenHeader.style.display = "none";

    // Reset dropdown styles for desktop
    if (dropdown) {
      dropdown.style.display = dropdown.classList.contains("active")
        ? "block"
        : "none";
    }
  }
}

// Event listeners
if (moreBtn) {
  moreBtn.addEventListener("click", toggleDropdown);
}

document.addEventListener("click", closeDropdownOnClickOutside);
document.addEventListener("touchstart", closeDropdownOnClickOutside); // Support for mobile

if (menuIcon) {
  menuIcon.addEventListener("click", toggleMobileMenu);
}

if (exitBtn) {
  exitBtn.addEventListener("click", toggleMobileMenu);
}

overlay.addEventListener("click", toggleMobileMenu);
// Run responsive layout handler on load and resize
window.addEventListener("load", handleResponsiveLayout);
window.addEventListener("resize", handleResponsiveLayout);

// Mobile Menu Handling for Phones
document.addEventListener("DOMContentLoaded", function () {
  // Initial responsive setup
  handleResponsiveLayout();

  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      hiddenMenu.style.display = "block"; // Ensure menu is visible
      hiddenMenu.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (exitBtn) {
    exitBtn.addEventListener("click", () => {
      hiddenMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }
  // Prevent menu flickering on fast clicks
  let isMenuOpen = false;
  if (menuIcon) {
    menuIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!isMenuOpen) {
        isMenuOpen = true;
        setTimeout(() => (isMenuOpen = false), 500); // Prevent multiple clicks in 500ms
      }
    });
  }

  // Make sure dropdown menu items work properly on mobile
  const menuItems = document.querySelectorAll(".menu-item a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      hiddenMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
});
