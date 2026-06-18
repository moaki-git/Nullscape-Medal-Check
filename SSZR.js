/* Difficulty Stylizer Function */
const difficulty = document.getElementById("difficulty");
const image = document.getElementById("difficultyImage");
const imageBox = document.getElementById("imageBox");

difficulty.addEventListener("change", () => {
    switch (difficulty.value) {
        case "C":
            image.src = "Images/Icons/Casual.png";
            imageBox.style.background = "linear-gradient(to bottom, #0f757a, #000000)";
            imageBox.style.border = "1px solid #10E9F5"
            break;

        case "S":
            image.src = "Images/Icons/Standard.png";
            imageBox.style.background = "linear-gradient(to bottom, #6d0d6e, #000000)";
            imageBox.style.border = "1px solid #F816FB"
            break;

        case "E":
            image.src = "Images/Icons/Extreme.png";
            imageBox.style.background = "linear-gradient(to bottom, #700a08, #000000)";
            imageBox.style.border = "1px solid #F50400"
            break;

        default:
            image.src = "Images/Icons/Orb.png";
            imageBox.style.background = "linear-gradient(to bottom, #61135e, #000000)";
            imageBox.style.border = "1px solid #61135e"
    }
});