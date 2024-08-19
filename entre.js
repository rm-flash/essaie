document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const adminContent = document.getElementById('admin-content');
    const verifyCodeButton = document.getElementById('verifyCode');
    const adminCodeInput = document.getElementById('adminCode');
    const errorMessage = document.getElementById('error-message');
    const logoutButton = document.getElementById('logout');

    // Vérification du code d'accès
    verifyCodeButton.addEventListener('click', () => {
        const code = adminCodeInput.value;
        if (code === 'tyser') { // Remplacez 'votre-code-secret' par le code secret
            loginSection.style.display = 'none';
            adminContent.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Déconnexion
    logoutButton.addEventListener('click', () => {
        adminContent.style.display = 'none';
        loginSection.style.display = 'block';
        adminCodeInput.value = '';
        errorMessage.style.display = 'none';
    });
});