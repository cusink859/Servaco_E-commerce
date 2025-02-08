// Get the elements
const nav = document.querySelector('nav');
const hero = document.querySelector('.hero');
const products = document.querySelector('.products');
const categories = document.querySelector('.categories');
const cart = document.querySelector('.cart');

// Add event listeners
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    // Navigate to the corresponding page
  }
});

// Product grid
const productGrid = products.querySelector('ul');
const productsData = [
  { id: 1, name: 'Product 1', description: 'Description of product 1', price: 10.99 },
  { id: 2, name: 'Product 2', description: 'Description of product 2', price: 9.99 },
  { id: 3, name: 'Product 3', description: 'Description of product 3', price: 12.99 },
  // ...
];

// Render the product grid
productGrid.innerHTML = '';
productsData.forEach((product) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <img src="product${product.id}.jpg" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <button Add to Cart</button>
  `;
  productGrid.appendChild(li);
});

// Category filtering
const categoryLinks = categories.querySelectorAll('a');
categoryLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.textContent;
    // Filter the products by category
    const filteredProducts = productsData.filter((product) => product.category === category);
    // Render the filtered product grid
    productGrid.innerHTML = '';
    filteredProducts.forEach((product) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="product${product.id}.jpg" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button Add to Cart</button>
      `;
      productGrid.appendChild(li);
    });
  });
});

// Cart functionality
const cartButton = document.querySelector('.cart button');
cartButton.addEventListener('click', () => {
  // Add the product to the cart
  const productId = cartButton.dataset.productId;
  const product = productsData.find((product) => product.id === parseInt(productId));
  // Update the cart total
  const cartTotal = document.querySelector('.cart .total');
  cartTotal.textContent = `Total: $${product.price}`;
  // Update the cart contents
  const cartContents = document.querySelector('.cart .contents');
  cartContents.innerHTML = `
    <p>Product: ${product.name}</p>
    <p>Quantity: 1</p>
    <p>Subtotal: $${product.price}</p>
  `;
});