document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les boutons "Acheter"
    let buyButtons = document.querySelectorAll('.btn-buy');

    // Ajouter un événement de clic à chaque bouton "Acheter"
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            // Récupérer les détails de l'article
            let articleName = this.getAttribute('data-article-name');
            let price = this.getAttribute('data-price');

            // Rediriger vers la page du panier avec les détails de l'article
            window.location.href = 'panier.html?articleName=' + encodeURIComponent(articleName) + '&price=' + encodeURIComponent(price);
        });
    });
});
