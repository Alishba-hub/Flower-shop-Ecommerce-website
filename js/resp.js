src="https://cdn.emailjs.com/dist/email.min.js";
src="https://smtpjs.com/v3/smtp.js";

// Burger menu toggle
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.right-nav');
navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
   rightnav.classList.toggle('v-class-resp');
   navList.classList.toggle('v-class-resp');
   navbar.classList.toggle('h-nav-resp');
});

// Cart interactions
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let viewcart = document.getElementById('view-cart');
let closecart = document.querySelector('.close');
let viewbutton = document.getElementById('viewcartbutton');

closecart.addEventListener('click', () => {
   body.classList.toggle('showCart');
});

iconCart.addEventListener('click', () => {
   body.classList.toggle('showCart');
});

viewcart.addEventListener('click', (event) => {
   body.classList.toggle('showCart');
});
if(viewbutton){
   viewbutton.addEventListener('click', () => {
      body.classList.toggle('showCart');
   });
}


// Function to toggle cart and redirect
function toggleCartAndRedirect() {
   document.body.classList.toggle('showCart');
}

// Add products to HTML
let listProductHTML = document.querySelector('.listProduct');
let listProduct = [];

const addDataToHTML = () => {
   listProductHTML.innerHTML = '';
   if (listProduct.length > 0) {
       listProduct.forEach(product => {
           let newProduct = document.createElement('div');
           newProduct.classList.add('items');
           newProduct.innerHTML = `
            <img src="${product.image}" alt="Sunflower Bouquet">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addCart">Add To Cart</button>
            `;

           listProductHTML.appendChild(newProduct);
       });
   }
}


// Event listener for adding items to cart
listProductHTML.addEventListener('click', (event) => {
   let positionClick = event.target;
   if (positionClick.classList.contains('addCart')) {
      alert('Item added to cart');
      // Add functionality to add the product to the cart here
   }
});

// Initialize app and fetch product data
const initApp = () => {
   fetch('prods.json')
   .then(response => response.json())
   .then(data => {
      listProduct = data;
      addDataToHTML();
   })
   .catch(error => {
      console.error('Error fetching product data:', error);
   });
}

initApp();
