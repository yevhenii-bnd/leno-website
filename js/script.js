document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Video Modal
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-play-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");

  // Open modal on click
  videoButton.addEventListener("click", function () {
    // Show modal
    modal.style.display = "block";

    // Replace the src attribute with the video URL
    videoPlayer.src = "https://www.youtube.com/embed/s-CTkbHnpNQ";

    // Close modal on click
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
      videoPlayer.src = "";
    });

    // Close modal on outter click
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  });
});

// Navigation background on scroll
window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".navbar");

  if (this.window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
