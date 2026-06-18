const levelInput = document.getElementById("level");

function updateLevelAvailability() {

    const playerLevel =
        parseInt(levelInput.value) || 0;

    const cards =
        document.querySelectorAll(
            ".enemy-card, .gc-card"
        );

    cards.forEach(card => {

        const requiredLevel =
            Number(card.dataset.level);

        if (playerLevel < requiredLevel) {

            card.classList.add(
                "level-locked"
            );

        } else {

            card.classList.remove(
                "level-locked"
            );

        }

    });

}

levelInput.addEventListener(
    "input",
    updateLevelAvailability
);

document.addEventListener(
    "DOMContentLoaded",
    updateLevelAvailability
);