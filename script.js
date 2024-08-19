document.addEventListener('DOMContentLoaded', () => { 
    const menuToggle = document.querySelector('.menu-toggle'); 
    const sidebar = document.querySelector('.sidebar'); 
    
    menuToggle.addEventListener('click', () => { 
        sidebar.classList.toggle('open'); 
    }); 
});


function scrollCatalog(direction) { 
    const wrapper = document.querySelector('.product-wrapper'); 
    const scrollAmount = wrapper.clientWidth * direction; // Définit de combien faire défiler 
    
    wrapper.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
    }); 
} 

function openPage(pageName, element) { 
    var i, tabcontent, tablink; 
    
    // Cacher tous les éléments avec la classe "tabcontent" 
    tabcontent = document.getElementsByClassName("tabcontent"); 
    for (i = 0; i < tabcontent.length; i++) { 
        tabcontent[i].style.display = "none"; 
    } 
    
    // Supprimer la classe "active" de tous les boutons 
    tablink = document.getElementsByClassName("tablink"); 
    for (i = 0; i < tablink.length; i++) { 
        tablink[i].classList.remove("active"); 
    } 
    
    // Afficher la page en question et ajouter une classe "active" au bouton cliqué 
    document.getElementById(pageName).style.display = "block"; 
    element.classList.add("active"); 
} 

