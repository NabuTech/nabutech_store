document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const slides = document.querySelectorAll(".carousel-slide");

    let currentIndex = 0;

    // Function to update the active slide
    function updateCarousel() {
      carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listener for Previous button
    prevButton.addEventListener("click", function () {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateCarousel();
    });

    // Event listener for Next button
    nextButton.addEventListener("click", function () {
      currentIndex = Math.min(currentIndex + 1, slides.length - 1);
      updateCarousel();
    });
  });