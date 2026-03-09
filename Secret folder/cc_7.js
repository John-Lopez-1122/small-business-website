const headLineInput = document.getElementById("headLineInput")
const updateButton = document.getElementById("updateButton")
const ctaHeadline = document.querySelector("h2")

updateButton.addEventListener("click", function() {
    ctaHeadline.textContent = headLineInput.value;
}
);

alert("Congrats you found it!")