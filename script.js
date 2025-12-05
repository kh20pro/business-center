// Exemple : Message automatique
console.log("Bienvenue sur votre site professionnel !");

// =========================
// 1. Système de recherche
// =========================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        let services = document.querySelectorAll(".service-card");

        services.forEach(service => {
            let text = service.textContent.toLowerCase();
            service.style.display = text.includes(filter) ? "block" : "none";
        });
    });
}

// =========================
// 2. Formulaire WhatsApp
// =========================
function envoyerWhatsApp() {
    let nom = document.getElementById("nom").value;
    let service = document.getElementById("service").value;

    if (nom === "" || service === "") {
        alert("Veuillez compléter tous les champs !");
        return;
    }

    let numero = "22870470107"; // <-- Remplace par ton numéro
    let message = `Bonjour, je suis ${nom}. Je souhaite faire : ${service}.`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}
