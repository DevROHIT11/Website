document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("topBtn");
  
    window.addEventListener("scroll", function () {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      btn.style.display = scrollY > 50 ? "block" : "none";
    });
  
    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });