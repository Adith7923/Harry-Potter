const darkModeButton = document.getElementById('toggleDarkMode');

darkModeButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
    darkModeButton.innerText =
        document.body.classList.contains('dark-mode') ? "Lumos" : "Nox";
});
