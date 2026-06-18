const levelInput = document.getElementById("level");

let selectedDifficulty = null;

document.querySelectorAll("#dropdownMenu .dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
        selectedDifficulty = this.dataset.value;
        updateLevelAvailability();
    });
});

function getRequiredLevel(card) {
    const baseLevel = Number(card.dataset.level);

    if (card.classList.contains("gc-card")) {
        if (selectedDifficulty === "S" || selectedDifficulty === "E") {
            return 10;
        }
        return baseLevel;
    }

    return baseLevel;
}

function updateLevelAvailability() {
    const playerLevel = parseInt(levelInput.value) || 0;

    const cards = document.querySelectorAll(".enemy-card, .gc-card");

    cards.forEach(card => {
        const requiredLevel = getRequiredLevel(card);

        // Update the displayed level text on gc-cards
        if (card.classList.contains("gc-card")) {
            const label = card.querySelector(".level-text");
            if (label) label.textContent = "Level: " + requiredLevel;
        }

        if (playerLevel < requiredLevel) {
            card.classList.add("level-locked");
        } else {
            card.classList.remove("level-locked");
        }
    });
}

levelInput.addEventListener("input", updateLevelAvailability);

document.addEventListener("DOMContentLoaded", updateLevelAvailability);