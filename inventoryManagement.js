// Write your code here
const products = ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Smartwatch'];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(Name) {
  products.push(Name);
}

function updateProductName(position, newName) {
  products[position] = newName;
}

function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
