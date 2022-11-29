# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of this application is to provide a web interface for a record store: Empire Records. With this site, users can shop for available records at Empire and filter/sort them by various categories for a more advanced search process.

### Usability Principles Considered
I made sure to use bolded text/larger font sizes for sort/filter/cart for ease in readability; I made the side section with sort/filter/cart obviously different from the item cards themselves by making the section a high-contrast color to the rest of the site for ease of navigation/learnability; I also made sure to include alt text for all images in item cards for accessibility/usability. 

### Organization of Components
I have 4 main components: AddButton, Filter, Sort, and Vinyl. AddButton is the component for the 'Add to Cart'/'Remove from Cart' button on each item card; Filter is the component that defines filtering sections (Genre, Decade) and applies the filtering functionality; Sort is the component that defines the sorting section and applies the selected sort method to the items (Vinyls); Vinyl is the component that defines a Vinyl item and creates/displays an item card. Vinyl and AddButton interact with each other in the sense that an AddButton component is part of each Vinyl component, but outside of that, none of the components really interact with each other.

### How Data is Passed Down Through Components
- Vinyl takes in a bunch of props from App.js, mostly being informational fields from the assets/vinyl-data.json file, but also the state/state setters for the shopping cart and its total price. Vinyl uses the informational fields from the json to create a card display with all the information needed to represent an item, then it creates an AddButton and passes all relevant props needed for updating the cart contents and the cart total.
- AddButton uses props passed down from Vinyl to update the cart contents and price when clicked. When 'Add to Cart' is clicked, the button also becomes a 'Remove from Cart' button, that will remove the applicable item from the cart contents and reduce the total price accordingly.
- Sort only takes the sortRecords() function from App.js, which it uses to apply the selected sort method to the Vinyl items to change the display. 
- Filter takes a filterGroup prop, which represents an object defined in the filterGroups array in App.js. Filter also takes the type of filter being applied (for the purpose of not wanting to write group.type a bunch of times), as well as the filterRecords() function defined in App.js. Filter uses these props to display the filtering categories on the side bar, as well as apply the filterRecords() function when a filter is checked. filterRecords() in App.js just applies the selected filters to the Vinyl items to display the Vinyls where all filters are true.

### How the User Triggers State Changes
- When a user clicks an 'Add to Cart' button on a Vinyl card, the state of totalPrice (App.js) is updated with the price of the Vinyl added to the current state price; the cart array (App.js) is updated with the album name added to the current cart to display the items in cart
