var productsContainer=[];
let linkName=document.getElementsByClassName("categories_link");
getData()
async function getData(category = null){
    let response = await  fetch('../json/products.json');
    let json=await response.json();
    productsContainer=json;
    if (category) {
        productsContainer = productsContainer.filter(product => product.category === category);
    }
    displayProducts();
}
function displayProducts(){
    let container=``;
    for(let i=0;i<productsContainer.length;i++ ){
        container+=`
        <div class="product-card">
        <div class="card-img">
            <img src=${productsContainer[i].images[0]}>
            <a href=""  class="addToCart">
                <ion-icon name="cart-outline" class="Cart"></ion-icon>
            </a>
        </div>
        <div class="card-info">
             <h4 class="product-name">${productsContainer[i].name}</h4>
             <h5 class="product-price">${productsContainer[i].price}</h5>
        </div>
    </div>`
    }
    document.getElementById("productCount").innerHTML = `${productsContainer.length} Products`;
    document.querySelector('.products .content').innerHTML = container;
}
function getCategory(e){
    category = e.target.getAttribute('productCategory');
    setActiveLink(e.target)
    getData(category);
    if (window.innerWidth <= 768) {
        // to close when use select category
        toggleSidebar();
    }
}
function setActiveLink(activeLink) {
    Array.from(linkName).forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

Array.from(linkName).forEach(function(element){
    element.addEventListener('click',getCategory);
})

function toggleSidebar() {
    var sidebar = document.querySelector(".aside");
    sidebar.classList.toggle("open");
}
