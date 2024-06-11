let cart = [];
let products = [];
let total = 0;
let cartCounter = document.getElementById("cart-counter");
loadCart();
getData();
async function getData() {
    let response = await fetch('../json/products.json');
    let json = await response.json();
    products = json;
}
function loadCart() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        console.log("cart = "+ cart.length) 
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId,inputQuantity = 1) {
    let product = products.find(p => p.id == productId);
    if (product) {
        let existingProduct = cart.find(p => p.id == productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            let productWithQuantity = { ...product, quantity: inputQuantity };
            cart.push(productWithQuantity);
        }
        saveCart();
        checkCart();
    }
}

function addCartToHTML() {
    let content = ``;
    cart.forEach((product, index) => {
        let price = parseFloat(product.price.replace('$', ''));
        let totalPrice = price * product.quantity;
        content += `
        <div class="cart_product">
            <div class="cart_product_img">  
                <img src=${product.images[0]}>
            </div>
            <div class="cart_product_info">  
                <div class="top_card">
                    <div class="left_card">
                        <h4 class="product_name">${product.name}</h4>
                        <span class="product_price">${product.price}</span>
                    </div>
                    <div class="remove_product" onclick="removeFromCart(${index})">
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
                <div class="buttom_card">
                    <div class="counts">
                        <button id="minus" class="counts_btns"  onclick="decreaseQuantity(${index})">-</button>
                        <input type="number" inputmode="numeric" name="productCount" min="1" step="1" max="999"
                            class="product_count" id="productCount" value=${product.quantity}>
                        <button id="plus" class="counts_btns" onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <span class="total_price">$${totalPrice}.00</span>
                </div>
            </div>
        </div>`;
    });
    document.querySelector(".cart_products").innerHTML = content;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    checkCart();
}
function increaseQuantity(index){
    cart[index].quantity += 1;
    saveCart();
    checkCart();
}
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        saveCart();
        checkCart();
    } else {
        removeFromCart(index);
    }
}
// Initial call to display the cart products on page load
let cartText = document.querySelector(".cart_products")
function checkCart(){
    if (cart.length == 0) {
        cartText.classList.add("empty");
        cartText.innerHTML = `Your cart is empty.`;
        document.querySelector(".btn_control").style.display = "none";
        cartCounter.innerHTML = 0;
    } else {
        cartText.classList.remove("empty");
        addCartToHTML();
        let totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
        cartCounter.innerHTML = totalQuantity;
        document.querySelector(".btn_control").style.display = "flex";
    }
}
checkCart();