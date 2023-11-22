      // SLIDES

      const sliderContent = document.querySelector(".slider-content");
      let slideIndex = 0;

      function showSlides() {
        slideIndex++;
        if (slideIndex > 3) {
          slideIndex = 0;
        }
        const translationValue = -slideIndex * 100;
        sliderContent.style.transform = `translateX(${translationValue}%)`;
      }

      // Change slides on mouse click
      document.addEventListener("click", showSlides);

      function toggleLoginPopup() {
        const popup = document.getElementById("loginPopup");
        popup.style.display =
          popup.style.display === "none" || popup.style.display === ""
            ? "block"
            : "none";
      }

      function toggleMenu() {
        const menu = document.getElementById("myMenu");
        menu.style.display =
          menu.style.display === "none" || menu.style.display === ""
            ? "block"
            : "none";
      }

      function toggleMenu2() {
        const menu = document.getElementById("myMenu2");
        menu.style.display =
          menu.style.display === "none" || menu.style.display === ""
            ? "block"
            : "none";
      }
