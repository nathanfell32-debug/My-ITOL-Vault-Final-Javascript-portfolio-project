// select the form elements
//these IDs let JS connect to the HTML fields
const titleInput = document.querySelector('#entryTitle');
const bodyInput = document.querySelector('#entryBody');
const saveButton = document.querySelector('#saveEntryButton');

// listen for the save button clicks
// this waits for the user to press save before running the code
saveButton.addEventListener('click', () => {
    const title = titleInput.value;
    const body = bodyInput.value;

    console.log('Title', title);
    console.log('Body', body);
});