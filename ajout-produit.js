document.getElementById("ajout-produit-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const nom = document.getElementById("nom").value;
    const prix = parseFloat(document.getElementById("prix").value).toFixed(2);
    const image = document.getElementById("image").value;
    const categorie = document.getElementById("categorie").value; // Récupère la catégorie sélectionnée
    
    const produit = { nom, prix, image, categorie, disponible: true };
    
    let produits = JSON.parse(localStorage.getItem("produits")) || [];
    produits.push(produit);
    localStorage.setItem("produits", JSON.stringify(produits));
    
    window.location.href = "admin-produits.html"; // Redirige vers la page des produits après ajout
});