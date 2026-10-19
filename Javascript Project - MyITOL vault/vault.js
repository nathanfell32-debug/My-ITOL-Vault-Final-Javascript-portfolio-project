// retrieve saved vault entries from localStorage
const storedEntries = localStorage.getItem('vaultEntries');
// convert stored data back into a JavaScript array, or create an empty array if none exist
const entries = storedEntries ? JSON.parse(storedEntries) : [];
// select the vault section where all entries will be displayed
const vaultContainer = document.querySelector('#vaultContainer');

// loop through all saved entries and create a card for each one 
entries.forEach((entry) =>
{
// create a new div element to act as a card 
const card = document.createElement('div');
// add the card class so existing styling is applied
card.classList.add('card');
// add the entry title and body to the card
card.innerHTML = `<h3>${entry.title}</h3>
                 <p>${entry.body}</p>`;
// add the completed card to the vault page
                 vaultContainer.appendChild(card);    
});