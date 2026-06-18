/* =========================
   DIFFICULTY DROPDOWN
========================= */

const dropdown = document.getElementById("difficultyDropdown");
const selected = document.getElementById("dropdownSelected");
const menu = document.getElementById("dropdownMenu");

const difficultyItems =
  menu.querySelectorAll(".dropdown-item");

const image = document.getElementById("difficultyImage");
const imageBox = document.getElementById("imageBox");

const styles = {
  C: {
    text: "Casual",
    src: "Images/Icons/Casual.png",
    bg: "linear-gradient(to bottom, #1a001a, #000000)",
    border: "1px solid #61135e"
  },

  S: {
    text: "Standard",
    src: "Images/Icons/Standard.png",
    bg: "linear-gradient(to bottom, #1a001a, #000000)",
    border: "1px solid #61135e"
  },

  E: {
    text: "Extreme",
    src: "Images/Icons/Extreme.png",
    bg: "linear-gradient(to bottom, #1a001a, #000000)",
    border: "1px solid #61135e"
  }
};

function updatedifficulty(value) {

  const s = styles[value];

  if (!s) return;

  selected.textContent = s.text;
  image.src = s.src;

  imageBox.style.background = s.bg;
  imageBox.style.border = s.border;
}

/* Open / Close Difficulty Menu */

selected.addEventListener("click", () => {

  menu.style.display =
    menu.style.display === "block"
      ? "none"
      : "block";

});

/* Difficulty Selection */

difficultyItems.forEach(item => {

  item.addEventListener("click", () => {

    const value =
      item.getAttribute("data-value");

    updatedifficulty(value);

    menu.style.display = "none";

  });

});

/* =========================
   PARTY SIZE DROPDOWN
========================= */

const partyDropdown =
  document.getElementById("partyDropdown");

const partySelected =
  document.getElementById("partySelected");

const partyMenu =
  document.getElementById("partyMenu");

const partyItems =
  partyMenu.querySelectorAll(".dropdown-item");

/* Open / Close Party Menu */

partySelected.addEventListener("click", () => {

  partyMenu.style.display =
    partyMenu.style.display === "block"
      ? "none"
      : "block";

});

/* Party Selection */

partyItems.forEach(item => {

  item.addEventListener("click", () => {

    partySelected.textContent =
      item.textContent;

    partySelected.dataset.value =
      item.dataset.value;

    partyMenu.style.display = "none";

  });

});

/* =========================
   INPUT QUALITY OF LIFE
========================= */

document.querySelectorAll("input").forEach(input => {

  input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

      e.preventDefault();

      input.blur();

    }

  });

});

/* =========================
   CLICK OUTSIDE TO CLOSE
========================= */

document.addEventListener("click", (e) => {

  if (!dropdown.contains(e.target)) {
    menu.style.display = "none";
  }

  if (!partyDropdown.contains(e.target)) {
    partyMenu.style.display = "none";
  }

});