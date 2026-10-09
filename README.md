# My-ITOL-Vault-Final-Javascript-portfolio-project
A repo for my final portfolio project based around javascript

Milestone 1: The Multi-Page Skeleton (HTML & CSS)
Create three separate HTML files. Focus on the layout first—use placeholder text (hard-coded) to
make sure it looks like the design.
index.html (Home): Build the header and the grid. Manualy code 5 cards to test your CSS
spacing.
new-entry.html (Editor): Create a form with an <input> for the title and a <textarea> for the
reflection body.
vault.html (All Entries): Create a simple layout where entries appear in ful-width rows
rather than a grid.
Navigation: Ensure the "New Entry" button and the "Profile Icon" are wrapped in <a> tags to
move between these files.

Milestone 2: Capturing Input
In your JavaScript for new-entry.html:
Select the form and the "Save Entry" button using document.querySelector.
Add an event listener to the "Save" button.
Practice puling the text out of the inputs using the .value property and logging it to the
console.

Milestone 3: completed : saving to localStorage - Created an `entries` array to hold vault entries.
 Created an object for each new entry containing the title and reflection body.
 
 Used the `.push()` array method to add new entry objects to the `entries` array.
 
 Used `JSON.stringify()` to convert the entries array into a JSON string.
 
 Tested the storage using browser DevTools and confirmed that the data remains in localStorage after refreshing the page.
 -stored the JSON string in browser storage using localStorage.setItem()
 -retrieved saved data using localStorage.getItem()
 

