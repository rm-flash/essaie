document.addEventListener("DOMContentLoaded", function () {
    const produitsContainer = document.getElementById("produits-container");
    const searchBar = document.getElementById('search-bar');
    const clearButton = document.getElementById('clear-button');
    const searchButton = document.getElementById('search-button');
    const categoryFilter = document.getElementById('category-filter');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');

    // Fonction pour charger et afficher les produits
    function loadProducts() {
        const produits = JSON.parse(localStorage.getItem("produits")) || [];
        produitsContainer.innerHTML = "";
        produits.forEach(produit => {
            const produitElement = document.createElement("div");
            produitElement.className = "product";
            produitElement.setAttribute("data-category", produit.categorie || ''); // Assurez-vous que chaque produit a une catégorie
            produitElement.innerHTML = `
                <img src="${produit.image}" alt="${produit.nom}"> 
                <h2>${produit.nom}</h2>
                <p>Prix : ${produit.prix} €</p>
                <span class="status ${produit.disponible ? 'en-stock' : 'en-rupture'}">
                    ${produit.disponible ? 'En Stock' : 'Rupture de Stock'}
                </span>
            `;
            produitsContainer.appendChild(produitElement);
        });
        filterByCategory();
    }

    // Fonction de filtrage par catégorie
    function filterByCategory() {
        const selectedCategory = categoryFilter.value;
        const products = produitsContainer.querySelectorAll('.product');
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            if (selectedCategory === '' || productCategory === selectedCategory) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Fonction de filtrage par recherche
    function filterProducts() {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedCategory = categoryFilter ? categoryFilter.value : '';
        const products = produitsContainer.querySelectorAll('.product');
        products.forEach(product => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            const productCategory = product.getAttribute('data-category');
            const matchesSearch = productName.includes(searchTerm);
            const matchesCategory = !selectedCategory || selectedCategory === productCategory;
            if (matchesSearch && matchesCategory) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Fonction de défilement des produits horizontalement
    function scrollProducts(direction) {
        const wrapper = document.querySelector('.product-wrapper');
        const scrollAmount = 300; // Ajustez cette valeur pour changer la distance de défilement
        wrapper.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }

    // Événements pour le menu de la barre latérale
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Événements pour les boutons de défilement
    if (leftButton && rightButton) {
        leftButton.addEventListener('click', () => scrollProducts(-1));
        rightButton.addEventListener('click', () => scrollProducts(1));
    }

    // Attacher la fonctionnalité de filtrage aux boutons et à la barre de recherche
    searchButton.addEventListener('click', filterProducts);
    searchBar.addEventListener('input', filterProducts);
    searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            filterProducts();
        }
    });

    // Effacer la barre de recherche
    clearButton.addEventListener('click', () => {
        searchBar.value = '';
        filterProducts();
    });

    // Charger les produits au démarrage
    loadProducts();
    categoryFilter.addEventListener('change', filterByCategory);
});