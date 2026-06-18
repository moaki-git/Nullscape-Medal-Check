/* Selection Stylizer / Custom Dropdown Logic where my sunglasses at bro*/
const dropdown = document.getElementById("difficultyDropdown");
const selected = document.getElementById("dropdownSelected");
const menu = document.getElementById("dropdownMenu");
const items = document.querySelectorAll(".dropdown-item");

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
  },
};

function updatedifficulty(value) {
  const s = styles[value] || styles.default;

  selected.textContent = s.text;
  image.src = s.src;
  imageBox.style.background = s.bg;
  imageBox.style.border = s.border;
}

/* open-close menu */
selected.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

/* item selection thing*/
items.forEach(item => {
  item.addEventListener("click", () => {
    const value = item.getAttribute("data-value");

    updatedifficulty(value);
    menu.style.display = "none";
  });
});

/* close when clicking outside yes */
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    menu.style.display = "none";
  }
});