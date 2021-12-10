// const cards = document.querySelector(".cards");

// const placeToEat = [
//   {
//     placeImage: "https://images3.bovpg.net/fw/media/1/5/2/3/8/52383.jpg",
//     placeName: "Le Bustronome",
//     placeLink: "https://www.kigard.fr/"
//   },
//   {
//     placeImage: "https://arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/4FK6MBVZ6CTLG7J5Z5W5OZQUZM.jpg",
//     placeName: "Dans le noir ?",
//   },
//   {
//     placeImage: "https://arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/4FK6MBVZ6CTLG7J5Z5W5OZQUZM.jpg",
//     placeName: "Dans le noir ?",
//   },
//   {
//     placeImage: "https://arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/4FK6MBVZ6CTLG7J5Z5W5OZQUZM.jpg",
//     placeName: "Dans le noir ?",
//   },
//   {
//     placeImage: "https://images3.bovpg.net/fw/media/1/5/2/3/8/52383.jpg",
//     placeName: "Le Bustronome",
//   },
// ];

// function createCard(imageUrl, name) {
  
//   const card = document.createElement("div");
//   card.classList.add("card");
//   cards.appendChild(card);

//   const cardHeader = document.createElement("div");
//   cardHeader.classList.add("card-header");
//   card.appendChild(cardHeader);

//   const cardImage = document.createElement("div");
//   cardImage.classList.add("card-image");
//   cardImage.style.backgroundImage = `url(${imageUrl})`;
//   cardHeader.appendChild(cardImage);

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");
//   card.appendChild(cardBody);

//   const cardName = document.createElement("button");
//   cardName.classList.add("card-name");
//   cardName.innerHTML = `${name}`
//   cardBody.appendChild(cardName);
// }

// for (let i = 0; i < placeToEat.length; i++) {
//   createCard(placeToEat[i].placeImage, placeToEat[i].placeName);
// }