document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle'); 
    const sidebar = document.querySelector('.sidebar'); 
    const adminMenuItem = document.getElementById('adminMenuItem');
    const showAdminAccessButton = document.getElementById('showAdminAccess');
    const verifyCodeButton = document.getElementById('verifyCode');
    const adminSection = document.getElementById('adminSection');

    // Toggle menu
    menuToggle.addEventListener('click', () => { 
        sidebar.classList.toggle('open'); 
    }); 

    // Vérifier le code d'accès pour afficher le lien d'administration
    if (showAdminAccessButton && verifyCodeButton) {
        showAdminAccessButton.addEventListener('click', () => {
            adminSection.style.display = 'block';
        });

        verifyCodeButton.addEventListener('click', () => {
            const code = document.getElementById('adminCode').value;
            if (code === 'votre-code-secret') { // Remplacez par votre code secret
                adminMenuItem.style.display = 'block'; // Affiche le lien admin
                adminSection.style.display = 'none'; // Cache la section de vérification
            } else {
                alert('Code incorrect');
            }
        });
    }

    // Scroll Catalog
    function scrollCatalog(direction) { 
        const wrapper = document.querySelector('.product-wrapper'); 
        const scrollAmount = wrapper.clientWidth * direction; // Définit de combien faire défiler 

        wrapper.scrollBy({ 
            left: scrollAmount, 
            behavior: 'smooth' 
        }); 
    } 

    // Open Page Function
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

    // Slideshow
    const slides = document.querySelectorAll('.slide'); 
    const slideTrack = document.querySelector('.slide-track'); 
    let currentIndex = 0; 
    const slideWidth = slides[0].offsetWidth; 
    const totalSlides = slides.length; 

    function updateSlidePosition() { 
        const offset = -currentIndex * slideWidth; 
        slideTrack.style.transform = `translateX(${offset}px)`; 
    } 

    setInterval(() => { 
        currentIndex = (currentIndex + 1) % totalSlides; 
        updateSlidePosition(); 
    }, 3000); // Temps de chaque slide avant de passer au suivant (3 secondes) 

    // Update Opening Status
    const status = document.getElementById('status'); 
    const currentTime = new Date(); 
    const currentHour = currentTime.getHours(); 
    const currentMinute = currentTime.getMinutes(); 

    // Opening hours logic 
    if (currentTime.getDay() === 0 || currentTime.getDay() === 1 || (currentHour < 14 || (currentHour === 14 && currentMinute < 30)) || 
    currentHour >= 18) { 
        status.textContent = "Nous sommes actuellement Fermé"; 
        status.classList.add('closed'); 
    } else { 
        status.textContent = "Nous sommes actuellement Ouvert"; 
        status.classList.add('open'); 
    } 
});