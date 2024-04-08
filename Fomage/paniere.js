// Sélectionnez tous les boutons "Ajouter au panier"
let boutonsAjouter = document.querySelectorAll('.ajouter-au-panier');

boutonsAjouter.forEach(function(bouton) {
  bouton.addEventListener('click', function() {
    // Récupérez les informations de l'article à partir des attributs de données HTML
    let nomArticle = bouton.getAttribute('data-nom');
    let prixArticle = parseFloat(bouton.getAttribute('data-prix'));

    // Ajoutez l'article au panier
    ajouterAuPanier(nomArticle, prixArticle);
  });
});

// Fonction pour ajouter un article au panier
function ajouterAuPanier(nom, prix) {
  let listeArticles = document.getElementById('liste-articles');
  let total = document.getElementById('total');

  // Créez un nouvel élément de liste pour l'article
  let nouvelArticle = document.createElement('li');
  nouvelArticle.textContent = nom + ' - ' + prix + ' EUR';

  // Ajoutez l'article à la liste d'articles
  listeArticles.appendChild(nouvelArticle);

  // Mettez à jour le total
  total.textContent = parseFloat(total.textContent) + prix;
   }
   document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les paramètres de l'URL
    let params = new URLSearchParams(window.location.search);
    let articleName = params.get('articleName');
    let price = params.get('price');

    // Afficher les détails de l'article dans la page du panier
    let cartItemContainer = document.getElementById('cart-items');
    let cartItem = document.createElement('div');
    cartItem.innerHTML = `
        <p><strong>${articleName}</strong> - ${price}</p>
    `;
    cartItemContainer.appendChild(cartItem);
});
