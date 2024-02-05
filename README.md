# OnlineShop Frontend Documentation

## Requirements

In the project directory, you can run:

### `npm install` to install the package. 

then 
### `npm start` to run the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Files Documentation


### App
This file sets up the routing for the application using react-router-dom, mapping various paths to their respective components. This allows the application to display different pages based on the URL path, enabling navigation through the application.

### Home
This file defines the `Home` component of the application. It sets up a home page with three clickable icons for seller login, customer login, and registration. The `Home` component is exported for use in other parts of the application.

### Register
This file defines the `Register` component of the application. It sets up a registration form with fields for username, password, email, phone number, first name, last name, and user type. The form data is managed using React's `useState` hook and submitted to a server endpoint using `axios`. Upon successful registration, the user is redirected to the appropriate login page based on their user type. The component also handles and displays any error messages received from the server.

### CustomerLogin, SellerLogin
These files create a login interface with username and password fields. The form data is managed using the `useState` hook from React and is sent to a server endpoint via `axios`. If the login is successful, the access and refresh tokens are saved in local storage and the user is navigated to the seller and customer home pages.

### Navbar
Navbar creates a navigation bar with links to the Home, About, and Contact pages. The `useNavigate` hook from `react-router-dom` is used to programmatically navigate to the About page when its link is clicked.

### CustomerHome, SellerHome
`CustomerHome` displays a list of all selling products and provides a search functionality to filter products by name. Each product in the list has an `AddToCart` component associated with it. `SellerHome` sets up a seller homepage with buttons to navigate to the Create Product View, Products, and Selling Products pages.

### CreateProduct
This file sets up a product creation form with fields for product name and image. When the form is submitted, it sends a POST request to the server with the form data to create a new product. The component also handles and logs any errors that occur during the product creation process.

### Products
`Products` file displays a list of all products and provides a search functionality to filter products by name. Each product in the list has a button to create a selling product. When this button is clicked, the `CreateSellingProduct` component is rendered for the selected product. The list of products is fetched from a server endpoint using `axios`, and the component handles and logs any errors that occur during the fetching process.

### SellingProducts
`SellingProducts` displays a list of all selling products and provides a search functionality to filter products by name. Each product in the list has an `EditSellingProduct` component associated with it.

### Cart
`Cart` file displays a list of all products in the cart. Each product in the list has `DeleteFromCart`, `EditCartProduct`, and `Buy` components associated with it. The component also provides the functionality to view the deposit history and buy history.

