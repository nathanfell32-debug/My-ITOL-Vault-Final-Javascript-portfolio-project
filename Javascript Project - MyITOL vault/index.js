// retrieve saved vault entries from localStorage
const storedEntries = localStorage.getItem('vaultEntries');
//convert stored data back into a JavaScript array, or create an empty array if none exist
const entries = storedEntries ? JSON.parse(storedEntries) : [];
// select the grid container where entry cards will be displayed
const entryGrid = document.querySelector('#entryGrid');
// get the first five entries to display on the homepage
const recentEntries = entries.slice(0, 5);
// loop through each recent entry and create a card element for it
recentEntries.forEach((entry) => {
    // create a new div element to act as a card
    const card = document.createElement('div');
    // add the card class so the CSS styling is applied
    card.classList.add('card');
    // add the entry title and body to the card
    card.innerHTML = `
    <h3>${entry.title}</h3>
    <p>${entry.body}</p>`;
    // add the completed card to the grid on the homepage
    entryGrid.appendChild(card);
});