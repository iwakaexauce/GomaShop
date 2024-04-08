let panier = []; // Tableau pour stocker les articles dans le panier

function addToCart(articleName, price) {
    panier.push({ nom: articleName, prix: price });
}

function removeFromCart(articleName) {
    panier = panier.filter(item => item.nom !== articleName);
}

function calculateTotal() {
    let total = 0;
    for (let item of panier) {
        total += item.prix;
    }
    return total;
}

function clearCart() {
    panier = [];
}

function processPurchase() {
    // Implémentez ici le traitement de l'achat, par exemple envoyer les détails du panier à un serveur
}
