// select the form elements
//these IDs let JS connect to the HTML fields
const titleInput = document.querySelector('#entryTitle');
const bodyInput = document.querySelector('#entryBody');
const saveButton = document.querySelector('#saveEntryButton');

// create an empty array to store each new vault entry
const entries = [];

// listen for the save button clicks
// this waits for the user to press save before running the code
saveButton.addEventListener('click', () => {
    const title = titleInput.value;
    const body = bodyInput.value;
// create an object to group the title and body together as one entry
    const newEntry = {
        title: title,
        body: body
    };
// add the new entry object to the entries array
    entries.push(newEntry);
// convert the entries array into JSON string so it can be stored
    const entriesJSON = JSON.stringify(entries);
// save the JSON string in localStorage so the entries remain after a page refresh
    localStorage.setItem('vaultEntries', entriesJSON);

    console.log(entries);
    console.log(entriesJSON);
    console.log('Title', title);
    console.log('Body', body);
});