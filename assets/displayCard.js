function createCard(card, i) {
    const html = `
    <article class="temp${i + 1}">
    
    <img class="grid-photo" src="${card.img}" alt="">
 
        <div class="card display">
            <h2 class="margin-0">${card.name}</h2>
            <p class="age margin-0">${card.age}</p>
            <p class= "cit margin-0">${card.citation}</p>
            <h3>${card.objectif}</h3>
            <p class= "hobbies" margin-0>${card.hobby1}</p>
            <p class= "hobbies" margin-0>${card.hobby2}</p> 
            <p class= "hobbies" margin-0>${card.hobby3}</p> 
            <p class= "hobbies" margin-0>${card.hobby4}</p> 
            <div class = "grid-icons-container margin-0">
                <a href="${card.instagram}"><img src="./assets/instagram.svg" alt="" class="grid-icon"></a>
                <a href="${card.linkedin}"><img src="./assets/linkedin.svg" alt="" class="grid-icon"></a>
                <a href="${card.email}"><img src="./assets/envelope-solid.svg" alt="" class="grid-icon"></a>
                <a href="${card.github}"><img src="./assets/github.svg" alt="" class="grid-icon"></a>
            </div>
        </div>
    </article>
 `;
    return html
}

function displayHTML(arrayOfUsers) {
    let grid = '';
    // ici, breakLoop permet d'arreter la boucle au bout de x fois pour 
    // avoir l'interface grid qui fonctionne correctement.
    const breakLoop = arrayOfUsers.length < 7 ? arrayOfUsers.length : 7;
    for (let i = 0; i < breakLoop; i++) {
        grid += createCard(arrayOfUsers[i], i)
    }
    return grid;
}


export { displayHTML, createCard };