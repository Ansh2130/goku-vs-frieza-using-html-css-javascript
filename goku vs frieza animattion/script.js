const launchButton = document.getElementById("launch-button");
const spiritBomb = document.querySelector(".spirit-bomb");
const explosionSound = document.getElementById("explosion-sound");
const friezaHealth = document.getElementById("frieza-fill");
const battleText = document.getElementById("battle-text");
const victoryMessage = document.getElementById("victory-message");
const scene = document.querySelector(".scene");

launchButton.addEventListener("click", () => {
  battleText.classList.remove("hidden");

  // Launch the spirit bomb
  spiritBomb.classList.remove("hidden");
  spiritBomb.style.opacity = 1;

  spiritBomb.animate([{ left: "80px", bottom: "50px" }, { left: "1045px", top: "80px" }], { duration: 2000, fill: "forwards" });

  setTimeout(() => {
    explosionSound.play(); // Play explosion sound
    spiritBomb.classList.add("explosion");
    friezaHealth.style.width = "0%"; // Drain health
    scene.classList.add("shake");

    setTimeout(() => {
      scene.classList.remove("shake");
      victoryMessage.classList.remove("hidden");
    }, 500);
  }, 2000);
});
