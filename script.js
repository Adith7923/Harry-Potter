const darkModeButton = document.getElementById('darkMode');
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
    darkModeButton.innerText =
        document.body.classList.contains('dark-mode') ? "Lumos" : "Nox";
});