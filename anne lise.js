document.addEventListener("DOMContentLoaded", function () {
    // Ajout d'un effet de survol sur les liens du menu
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#ffd700"; // Change la couleur au survol
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "white"; // Remet la couleur originale
        });
    });

    // Affichage dynamique d'un message de bienvenue
    let headerTitle = document.querySelector("header h1");
    headerTitle.addEventListener("click", function () {
        alert("Bienvenue au Centre Équestre !");
    });
});
