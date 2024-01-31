//!---------------------------------
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Adjust this value based on when you want the color to change
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//!---------------------------------
const textContainer = document.getElementById("textContainer");
const text = "steaKHouse";

function animateText() {
  let index = 0;

  function animateCharacter() {
    textContainer.innerText = text.substring(0, index);
    index++;

    if (index > text.length) {
      index = 0;
    }

    setTimeout(animateCharacter, 300);
  }

  animateCharacter();
}

animateText();

//!---------------------------------
const clear = document.querySelector(".clear-form-btn");

clear.addEventListener("click", function () {
  document.querySelector("form").reset();

  const alert = document.createElement("div");
  alert.className = "alert alert-success mt-3";
  alert.textContent = "Formulir telah berhasil direset!";

  document.querySelector(".modal-body").appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
});
