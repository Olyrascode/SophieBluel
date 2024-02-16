document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer les valeurs de l'e-mail et du mot de passe saisis par l'utilisateur
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        const token = data.token; // Récupérez le token depuis la réponse du serveur
        if (token) {
            alert("Connexion réussie !");
            
            // Stockez le token dans le localStorage
            localStorage.setItem('token', token);
            // Redirigez l'utilisateur vers une autre page
            window.location.href = "index.html";
            
        } else {
            alert("E-mail ou mot de passe incorrect.");
        }
    })
    .catch(error => console.error('Erreur : ', error));
});