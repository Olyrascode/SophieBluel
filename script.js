// export async function fetchGallery() {
//   const response = await fetch('http://localhost:5678/api/works');
//   const data = await response.json();

//   // Mettre à jour la galerie avec les données mises à jour
//   updateGallery(data);
// }
// export function updateGallery(dataArray) {
//   const galleryDiv = document.querySelector(".gallery");
//         dataArray.forEach(item => {
//           const galleryItem = document.createElement("div");
//           galleryItem.classList.add("gallery-item");
//           galleryItem.dataset.id = item.category.id;
//           const imageElement = document.createElement("img");
//           imageElement.src = item.imageUrl;
//           const titleElement = document.createElement("p");
//           titleElement.textContent = item.title;
//           galleryItem.appendChild(imageElement);
//           galleryItem.appendChild(titleElement);
//           galleryDiv.appendChild(galleryItem);
//           galleryItem.addEventListener("click", () => {
        
//           });
//         });
//       }
// // function fetchDataAndCreateGallery() {
// //   const callApi = "http://localhost:5678/api/works";
// //   fetch(callApi)
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error("Erreur Http");
// //       }
// //       return response.json();
// //     })
// //     .then(dataArray => {
// //       const galleryDiv = document.querySelector(".gallery");
// //       dataArray.forEach(item => {
// //         const galleryItem = document.createElement("div");
// //         galleryItem.classList.add("gallery-item");
// //         galleryItem.dataset.id = item.category.id;
// //         const imageElement = document.createElement("img");
// //         imageElement.src = item.imageUrl;
// //         const titleElement = document.createElement("p");
// //         titleElement.textContent = item.title;
// //         galleryItem.appendChild(imageElement);
// //         galleryItem.appendChild(titleElement);
// //         galleryDiv.appendChild(galleryItem);
// //         galleryItem.addEventListener("click", () => {
      
// //         });
// //       });
// //     })
// //     .catch(error => {
// //       console.error(`Erreur lors de la récupération des données depuis l'API: ${error.message}`);
// //     });
// // }

// // fetchDataAndCreateGallery();

         
//             // button filter
//  // Créer un élément <div> avec la classe "filter"
// const filterDiv = document.createElement("div");
// filterDiv.className = "filter";

// // Créer un bouton <button> avec la classe "button"
// const button1 = document.createElement("button");
// button1.className = "button";
// button1.textContent = "Tous";

// const button2 = document.createElement("button");
// button2.className = "button";
// button2.textContent = "Objets";

// const button3 = document.createElement("button");
// button3.className = "button";
// button3.textContent = "Appartements";

// const button4 = document.createElement("button");
// button4.className = "button";
// button4.textContent = "Hôtels & restaurants";


// // Ajouter les boutons à la div "filter"
// filterDiv.appendChild(button1);
// filterDiv.appendChild(button2);
// filterDiv.appendChild(button3);
// filterDiv.appendChild(button4);

// // Ajouter la div "filter" avec les boutons au corps du document (ou à un autre élément parent)
// const portfolioSection = document.getElementById("portfolio");
// portfolioSection.appendChild(filterDiv);

// // Récupérer le deuxième élément de la section (index 1)
// const secondElement = portfolioSection.children[1];

// // Insérer la div "filter" avec les boutons avant le deuxième élément
// portfolioSection.insertBefore(filterDiv, secondElement);
 

//    // Fonction pour filtrer la galerie en fonction de la catégorie
// function filterGallery(category) {
//   const galleryItems = document.querySelectorAll(".gallery-item");

//   galleryItems.forEach(item => {
//     const itemCategory = item.getAttribute("data-id");

//     // Si la catégorie correspond à "Tous" ou à la catégorie de l'élément
//     if (category === "Tous" || category === itemCategory) {
//       item.style.display = "block"; // Afficher l'élément
//     } else {
//       item.style.display = "none"; // Masquer l'élément
//     }
//   });
// } 
// button1.addEventListener("click", () => {
//   filterGallery("Tous");
// });

// button2.addEventListener("click", () => {
//   filterGallery("1"); // Utilisez la valeur "1" pour "Objets" (ou la valeur correspondante).
// });

// button3.addEventListener("click", () => {
//   filterGallery("2"); // Utilisez la valeur "2" pour "Appartements" (ou la valeur correspondante).
// });

// button4.addEventListener("click", () => {
//   filterGallery("3"); // Utilisez la valeur "3" pour "Hôtels & restaurants" (ou la valeur correspondante).
// });

//  // Récupérez le token depuis le localStorage
//  let token = localStorage.getItem('token');
 
//  // Vérifiez si le token est présent
//  let logout = document.getElementById('authButton');
 
//  if (token) {
//    console.log(token);
//    logout.innerText = 'Logout';


// let modifierButton = document.createElement('button');
// modifierButton.className = 'js-modal js-modal-trigger';
// modifierButton.setAttribute('href', '#modal1');

// // Créer une image à l'intérieur du bouton
// const image = document.createElement('img');
// image.src = './assets/icons/modifie.png'; // Remplacez par le chemin de votre image


// // Ajouter l'image à l'intérieur du bouton
// modifierButton.appendChild(image);
// modifierButton.appendChild(document.createTextNode(' Modifier')); // Texte après l'image

// // Ajouter le bouton au document
// document.body.appendChild(modifierButton);


//  // Récupérez l'élément h2 dans la section "Portfolio"
// let h2Element = portfolioSection.querySelector('h2');

// // Insérez le bouton "Modifier" après l'élément h2
// h2Element.appendChild(modifierButton);

   
//     }
//     logout.addEventListener('click', function() {
//       // Supprimer le token du localStorage
//       localStorage.removeItem('token');
      
//       // Réalisez d'autres actions si nécessaires, par exemple, rediriger l'utilisateur vers la page de déconnexion.
      
//   }); 

 

 