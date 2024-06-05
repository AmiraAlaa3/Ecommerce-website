const params = new URL(location.href).searchParams;
const productId = params.get('productId');

getData()
async function getData(){
    try {
        let response = await fetch('../json/products.json');
        let json = await response.json();
        let product = json.find(item => item.id == productId); 

        if (product) {
            displayDetails(product);
        } else {
            console.error('Product not found');
        }
    } catch (error) {
        console.error('Error fetching the data', error);
    }
}
function displayDetails(product){
    document.getElementById("product_image").src = product.images[0];
    document.querySelector(".category_name").innerHTML = product.category;
    document.querySelector(".product_name").innerHTML = product.name;
    document.querySelector(".product_price").innerHTML = product.price;
    document.querySelector(".product_des").innerHTML = product.description;
}
let quantity = document.getElementById("productCount");

  document.getElementById("minus").addEventListener("click", function() {
    let value = parseInt(quantity.value) || 1; 
    if (value > 1) {
      quantity.value = value - 1;
    }
  });

  document.getElementById("plus").addEventListener("click", function() {
    let value = parseInt(quantity.value) || 1; 
    if (value < 999) {
      quantity.value = value + 1;
    }
  });