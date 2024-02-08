let modal1 = null;
let modal2 = null;
let token;
const callApi = "http://localhost:5678/api/works";
fetch(callApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur Http");
    }
    return response.json();
  })
  .then((dataArray) => {
    // Récupération de la div avec la classe "modalWork"
    const galleryDiv = document.querySelector(".modalWork");

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

// Définissez la fonction deleteImage
function deleteImage(event) {
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
      galleryItem.remove();
    })
    .catch((error) => {
      console.error(`erreur : ${error.message}`);
    });
}
/// Rafraichit les projets sans recharger la page
async function refreshPage(i) {
  modaleProjets(); // Re lance une génération des projets dans la modale admin

  // supprime le projet de la page d'accueil
  const projet = document.querySelector(`.js-projet-${i}`);
  projet.style.display = "none";
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
    modalcloseX1
    .querySelector(".js-modal-close")
    .removeEventListener("click", closeModal);
    
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

function openModal2(e) {

  modal2 = document.querySelector("#modal2");
  modal2.style.display = null;
  const modalcloseX2 = modal2.querySelector(".js-modal-close2")
  closeModal2(modal2, modalcloseX2)
  modal1.style.display = "none";
 
}

// fermeture de la modal2
function closeModal2(modal2, modalcloseX2, modalBack) {
  
  // e.preventDefault();
  modalcloseX2.addEventListener("click", ()=> {
    modal2.style.display = "none";
    
    modalcloseX2.removeEventListener("click", closeModal2);
    modalcloseX2
    .querySelector(".js-modal-close")
    .removeEventListener("click", closeModal2);
  })
  
  modal2.addEventListener("click", (event) =>{
    if (modal2 === event.target) {
      
      modal2.style.display = "none";
    
      modal2.removeEventListener("click", closeModal2);
      modal2
      .querySelector(".js-modal-close")
      .removeEventListener("click", closeModal2);
    }
  }
   );
   function modalBack(modal2, modal1) {
     const modalArrow = modal2.querySelector(".js-modal-back")
     modalArrow.addEventListener('click', ()=> {
       console.log('click de la fleche');
       modal2.style.display = 'none';
       modal1.style.display = 'flex';
       modal2.removeEventListener("click", modalcloseX2)
      });
    }
    modalBack(modal2, modal1);
  };

document
  .querySelector(".js-modal-trigger")
  .addEventListener("click", function (e) {
    
    openModal1(e);
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
btnAjouterProjet.addEventListener("click", addWork);


// Fonction pour ajouter un projet
async function addWork(event) {
  event.preventDefault();

  const title = document.querySelector(".js-title").value;
  const categoryId = document.querySelector(".js-categoryId").value;
  const image = document.querySelector(".js-image").files[0];


  function areAllFieldsFilled() {
    return title.trim() !== "" && categoryId.trim() !== "" && image;
  }

  // Récupérez le token depuis le localStorage
  const token = localStorage.getItem("token");
  if (!areAllFieldsFilled()) {
    alert("Merci de remplir tous les champs");
    return;
  } else if (title !== "" && (categoryId === "1" || categoryId === "2" || categoryId === "3") && image) {
 
    // If conditions are met, proceed with further actions and change the button color to green
    // For demonstration purposes, I'm using a setTimeout to simulate an asynchronous action
    setTimeout(() => {
      btnAjouterProjet.style.backgroundColor = 'green';
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

      // Par exemple, pour fermer la modal2 après l'ajout du projet :
      closeModal2(event);
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

