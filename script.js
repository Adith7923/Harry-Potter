const darkModeButton = document.getElementById('darkMode');
darkModeButton.addEventListener("click", () => {
    console.log("Working")
    document.body.classList.toggle('dark-mode');
    darkModeButton.innerText =
        document.body.classList.contains('dark-mode') ? "Lumos" : "Nox";
});