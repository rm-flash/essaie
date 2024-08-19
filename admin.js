
function afficherProduits() { 
    const produits = JSON.parse(localStorage.getItem("produits")) || []; 
    const produitsList = document.getElementById("produits-list"); 
    produitsList.innerHTML = ""; 
  
    produits.forEach((produit, index) => { 
        const produitElement = document.createElement("div"); 
        produitElement.className = "produit"; 
  
        produitElement.innerHTML = ` 
        <h3>${produit.nom}</h3> 
        <p>Prix: ${produit.prix} €</p> 
        <img src="${produit.image}" alt="${produit.nom}"> 
        <p>${produit.disponible ? "En stock" : "Rupture de stock"}</p> 
        <button onclick="changerDisponibilite(${index})">${produit.disponible ? "Marquer en rupture" : "Marquer en stock"}</button> 
        <button onclick="supprimerProduit(${index})">Supprimer</button> 
        `; 
        produitsList.appendChild(produitElement); 
    }); 
} 

function changerDisponibilite(index) { 
    let produits = JSON.parse(localStorage.getItem("produits")) || []; 
    produits[index].disponible = !produits[index].disponible; 
    localStorage.setItem("produits", JSON.stringify(produits)); 
    afficherProduits(); 
} 

function supprimerProduit(index) { 
    let produits = JSON.parse(localStorage.getItem("produits")) || []; 
    produits.splice(index, 1); 
    localStorage.setItem("produits", JSON.stringify(produits)); 
    afficherProduits(); 
} 

document.addEventListener("DOMContentLoaded", afficherProduits);
