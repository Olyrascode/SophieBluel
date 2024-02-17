let modal1 = null;
let modal2 = null;
let modalArrow;
let modalcloseX1;
let modalcloseX2;
let modalBack;

function fetchDataAndCreateGallery() {
  const callApi = "http://localhost:5678/api/works";
  fetch(callApi)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur Http");
      }
      return response.json();
    })
    .then(dataArray => {
      const galleryDiv = document.querySelector(".gallery");
      galleryDiv.innerHTML = "";
      dataArray.forEach(item => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        galleryItem.dataset.id = item.category.id;
        const imageElement = document.createElement("img");
        imageElement.src = item.imageUrl;
        const titleElement = document.createElement("p");
        titleElement.textContent = item.title;
        galleryItem.appendChild(imageElement);
        galleryItem.appendChild(titleElement);
        galleryDiv.appendChild(galleryItem);
        galleryItem.addEventListener("click", () => {
      
        });
      });
    })
    .catch(error => {
      console.error(`Erreur lors de la récupération des données depuis l'API: ${error.message}`);
    });
}

fetchDataAndCreateGallery();

         
            // button filter
 // Créer un élément <div> avec la classe "filter"
const filterDiv = document.createElement("div");
filterDiv.className = "filter";

// Créer un bouton <button> avec la classe "button"
const button1 = document.createElement("button");
button1.className = "button";
button1.textContent = "Tous";

const button2 = document.createElement("button");
button2.className = "button";
button2.textContent = "Objets";

const button3 = document.createElement("button");
button3.className = "button";
button3.textContent = "Appartements";

const button4 = document.createElement("button");
button4.className = "button";
button4.textContent = "Hôtels & restaurants";


// Ajouter les boutons à la div "filter"
filterDiv.appendChild(button1);
filterDiv.appendChild(button2);
filterDiv.appendChild(button3);
filterDiv.appendChild(button4);

// Ajouter la div "filter" avec les boutons au corps du document (ou à un autre élément parent)
const portfolioSection = document.getElementById("portfolio");
portfolioSection.appendChild(filterDiv);

// Récupérer le deuxième élément de la section (index 1)
const secondElement = portfolioSection.children[1];

// Insérer la div "filter" avec les boutons avant le deuxième élément
portfolioSection.insertBefore(filterDiv, secondElement);
 

   // Fonction pour filtrer la galerie en fonction de la catégorie
function filterGallery(category) {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(item => {
    const itemCategory = item.getAttribute("data-id");

    // Si la catégorie correspond à "Tous" ou à la catégorie de l'élément
    if (category === "Tous" || category === itemCategory) {
      item.style.display = "block"; // Afficher l'élément
    } else {
      item.style.display = "none"; // Masquer l'élément
    }
  });
} 
button1.addEventListener("click", () => {
  filterGallery("Tous");
});

button2.addEventListener("click", () => {
  filterGallery("1"); // Utilisez la valeur "1" pour "Objets" (ou la valeur correspondante).
});

button3.addEventListener("click", () => {
  filterGallery("2"); // Utilisez la valeur "2" pour "Appartements" (ou la valeur correspondante).
});

button4.addEventListener("click", () => {
  filterGallery("3"); // Utilisez la valeur "3" pour "Hôtels & restaurants" (ou la valeur correspondante).
});

 // Récupérez le token depuis le localStorage
 let token = localStorage.getItem('token');
 
 // Vérifiez si le token est présent
 let logout = document.getElementById('authButton');
 
 if (token) {
   console.log(token);
   logout.innerText = 'Logout';


let modifierButton = document.createElement('button');
modifierButton.className = 'js-modal js-modal-trigger';
modifierButton.setAttribute('href', '#modal1');

// Créer une image à l'intérieur du bouton
const image = document.createElement('img');
image.src = './assets/icons/modifie.png'; // Remplacez par le chemin de votre image


// Ajouter l'image à l'intérieur du bouton
modifierButton.appendChild(image);
modifierButton.appendChild(document.createTextNode(' Modifier')); // Texte après l'image

// Ajouter le bouton au document
document.body.appendChild(modifierButton);


 // Récupérez l'élément h2 dans la section "Portfolio"
let h2Element = portfolioSection.querySelector('h2');

// Insérez le bouton "Modifier" après l'élément h2
h2Element.appendChild(modifierButton);

   
    }
    logout.addEventListener('click', function() {
      // Supprimer le token du localStorage
      localStorage.removeItem('token');
      
      // Réalisez d'autres actions si nécessaires, par exemple, rediriger l'utilisateur vers la page de déconnexion.
      
  }); 

 

 function modalFetch() {

   const callApiModal = "http://localhost:5678/api/works";
   fetch(callApiModal)
   .then((response) => {
     if (!response.ok) {
       throw new Error("Erreur Http");
      }
      return response.json();
    })
    .then((dataArray) => {
      // Récupération de la div avec la classe "modalWork"
      const galleryDiv = document.querySelector(".modalWork");
      galleryDiv.innerHTML = "";
      
      // forEach parcourt les éléments de dataArray
      dataArray.forEach((item) => {
        // Créer un élément <div> pour chaque élément du tableau
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        galleryItem.dataset.id = item.id;
        
        // Créer un élément <img> pour l'image de suppression (icône "delete")
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "./assets/icons/delete.png";
        deleteIcon.classList.add("deleteIcon");
        
        // Ajoutez l'icône "delete" (image) à l'élément de la galerie
        galleryItem.appendChild(deleteIcon);
        
        // Créer un élément <img> pour l'image
        const imageElement = document.createElement("img");
        imageElement.src = item.imageUrl;
        
        // Ajouter l'image et le titre à l'élément de la galerie
        galleryItem.appendChild(imageElement);
        
        // Ajouter l'élément de la galerie à la div "modalWork"
        galleryDiv.appendChild(galleryItem);
        
        // Ajoutez un gestionnaire d'événements "click" pour supprimer l'image
        deleteIcon.addEventListener("click", function (event) {
          deleteImage(event);
        });
      });
    })
    .catch((error) => {
      console.error(
        `Erreur lors de la récupération des données depuis l'API: ${error.message}`
        );
      });
    }
      
      function updateGallery() {
        
      }
      
      // Définissez la fonction deleteImage
async function deleteImage(event) {
  const id = event.target.closest(".gallery-item").dataset.id; // Obtenez l'ID de l'élément à supprimer
  const galleryItem = event.target.closest(".gallery-item"); // Trouvez l'élément parent .gallery-item

  // recuperation token
  const token = localStorage.getItem("token");
  // Envoyez une requête DELETE à l'API pour supprimer l'image
  fetch(`http://localhost:5678/api/works/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`, // Utilisation de l'en-tête d'authentification
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression");
      }
      // Supprimez l'élément de la galerie du DOM
      // galleryItem.remove();
      fetchDataAndCreateGallery();
      modalFetch();
      
    })
    .catch((error) => {
      console.error(`erreur : ${error.message}`);
    });
}

function openModal1(e) {
 
  modal1 = document.querySelector("#modal1");
  modal1.style.display = null;
  const modalcloseX1 = modal1.querySelector(".js-modal-close1")
  closeModal(modal1, modalcloseX1)
  // closemodalX1(modalcloseX1) 
}



// fermeture de la modal1
function closeModal(modal1, modalcloseX1) {
  // e.preventDefault();
  modalcloseX1.addEventListener("click", ()=> {
    modal1.style.display = "none";
    modalcloseX1.removeEventListener("click", closeModal);
    // modalcloseX1
    // .querySelector(".js-modal-close")
    // .removeEventListener("click", closeModal);
    
    
  })
  
  modal1.addEventListener("click", (event) =>{
    if (modal1 === event.target) {
      
      modal1.style.display = "none";
    
      modal1.removeEventListener("click", closeModal);
      modal1
      .querySelector(".js-modal-close")
      .removeEventListener("click", closeModal);
      
      
    }
  }
   );
  };

function openModal2() {

 modal2 = document.querySelector("#modal2");
 modalcloseX2 = modal2.querySelector(".js-modal-close2")
 modalArrow = modal2.querySelector(".js-modal-back")
 modal2.style.display = 'flex';
 modal1.style.display = "none";
 modal2Events();
}

function modal2Events() {
  modalcloseX2.addEventListener('click', modalCloseX2)
  modal2.addEventListener("click",modalCloseX2) 
  modalArrow.addEventListener('click', modal2BackFnc)
};
function modal2RmvEvents() {
  modalcloseX2.removeEventListener("click", modalCloseX2)
  modal2.removeEventListener("click", modalCloseX2)
  modalArrow.removeEventListener('click', modal2BackFnc)
  
}


function modal2BackFnc() {
  modal2.style.display = "none";
  console.log('click de la fleche');
  modal1.style.display = 'flex';
  modal2RmvEvents();
};

function modalCloseX2(event) {
  if (modal2 === event.target || modalcloseX2 === event.target || btnAjouterProjet === event.target) {
    modal2.style.display = 'none'
    modal2RmvEvents();
  }

}


document
  .querySelector(".js-modal-trigger")
  .addEventListener("click", function (e) {
    
    openModal1(e);
    modalFetch();
  });

// Gérez l'ouverture de la modal2 (après avoir cliqué sur "Ajouter une photo" dans la modal1)
document
  .querySelector(".js-modal-trigger2")
  .addEventListener("click", openModal2);
  



// Ajoutez un gestionnaire d'événements aux icônes "delete"
document.querySelectorAll(".deleteIcon").forEach((deleteIcon) => {
  deleteIcon.addEventListener("click", deleteImage);
});

const btnAjouterProjet = document.querySelector(".js-add-work");

btnAjouterProjet.addEventListener("click",(event) =>{
  addWork(event)
});

function areAllFieldsFilled() {
  const title = document.querySelector(".js-title").value;
  const categoryId = document.querySelector(".js-categoryId").value;
  const image = document.querySelector(".js-image").value.trim();
  
  return title !== "" && categoryId !== "" && image !== '';
}

document.querySelectorAll(".js-title, .js-categoryId, .js-image").forEach(element => {
  element.addEventListener("input", () => {
    if (areAllFieldsFilled()) {
      btnAjouterProjet.style.backgroundColor = 'green';
    } else {
      btnAjouterProjet.style.backgroundColor = '';
    }
  })
});

function imageReader() {
  document.querySelector("#photo").addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.querySelector('#photo-preview').src = e.target.result;
    }

    reader.readAsDataURL(e.target.files[0]);
  });
}
// Appeler imageReader une fois que le DOM est entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
  imageReader();
  console.log();
});


// Fonction pour ajouter un projet
async function addWork(event) {
  //empeche le rechargement de la page uniquement en site hebergé//
  event.preventDefault();
  

  const title = document.querySelector(".js-title").value;
  const categoryId = document.querySelector(".js-categoryId").value;
  const image = document.querySelector(".js-image").files[0];


  

  // Récupérez le token depuis le localStorage
  const token = localStorage.getItem("token");
  if (!areAllFieldsFilled()) {
    alert("Merci de remplir tous les champs");
    return;
  } else if (title !== "" && (categoryId === "1" || categoryId === "2" || categoryId === "3") && image) {
 
    // If conditions are met, proceed with further actions and change the button color to green
    // For demonstration purposes, I'm using a setTimeout to simulate an asynchronous action
    setTimeout(() => {
      btnAjouterProjet.style.backgroundColor = '#1d6154';
    }, 0);
  } else if (categoryId !== "1" && categoryId !== "2" && categoryId !== "3") {
    alert("Merci de remplir tous les champs et de choisir une catégorie valide");
    return;
  }


  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", categoryId);
    formData.append("image", image);

    const response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, // Utilisez formData pour envoyer le fichier
    });

    if (response.status === 201) {
      alert("Projet ajouté avec succès :)");
      // Vous pouvez effectuer des actions supplémentaires après l'ajout du projet ici
console.log(event);
      // Par exemple, pour fermer la modal2 après l'ajout du projet :
      modalCloseX2(event);
      fetchDataAndCreateGallery();
      modalFetch();
    } else if (response.status === 400) {
      alert("Merci de remplir tous les champs");
    } else if (response.status === 500) {
      alert("Erreur serveur");
    } else if (response.status === 401) {
      alert("Vous n'êtes pas autorisé à ajouter un projet");
      window.location.href = "login.html";
    }
  } catch (error) {
    console.log(error);
  }
  
}

