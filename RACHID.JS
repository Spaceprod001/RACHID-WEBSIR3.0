document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
  
    button.addEventListener("click", function() {
      const prizeImages = document.querySelectorAll(".prize-images img");
      const randomIndex = Math.floor(Math.random() * prizeImages.length);
      const winnerImage = prizeImages[randomIndex];
      const prizeName = winnerImage.alt;
      
      alert(`Congratulations! You've won a ${prizeName}!`);
    });
  });
  