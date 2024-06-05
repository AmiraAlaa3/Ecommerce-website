var currentSlide = 1;
window.addEventListener("load",function(){
    if (document.querySelectorAll(".slide-content").length > 0) {
        theChecker();
        playSlider();
    }
});

function nextSlider() {
    var btnNext = document.getElementsByClassName("next")[0];
    if (btnNext.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlider() {
    var btnPrev = document.getElementsByClassName("prev")[0];
    if (btnPrev.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    var imgSlider = document.querySelectorAll(".slide-content");
    var btnNext = document.getElementsByClassName("next")[0];
    var btnPrev = document.getElementsByClassName("prev")[0];
    imgSlider.forEach(function (img) {
        img.classList.remove('active');
    });

    imgSlider[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        btnPrev.classList.add('disabled');
    } else {
        btnPrev.classList.remove('disabled');
    }

    if (currentSlide == imgSlider.length) {
        btnNext.classList.add('disabled');
    } else {
        btnNext.classList.remove('disabled');
    }
}
function playSlider() {
   var imgSlider = document.querySelectorAll(".slide-content");
   setInterval(function() {
        if (currentSlide < imgSlider.length) {
            currentSlide++;
        } else {
            currentSlide = 1;
        }
        theChecker();
    }, 5000);
}
getTrendingProducts();
async function getTrendingProducts() {
    let response = await fetch('../json/products.json');
    let products = await response.json();
    let trendingProducts = products.filter(product => product.isTrending);
    displayTrendingProducts(trendingProducts);
}
function displayTrendingProducts(trendingProducts){
    let content = ``;
    for(let i = 0 ; i < trendingProducts.length ; i++){
        content += `
        <div class="product-card">
        <div class="card-img" onclick=displayDetails(${trendingProducts[i].id});>
            <img src=${trendingProducts[i].images[0]}>
            <a href=""  class="addToCart">
                <ion-icon name="cart-outline" class="Cart"></ion-icon>
            </a>
        </div>
        <div class="card-info">
             <h4 class="product-name" onclick=displayDetails(${trendingProducts[i].id});>${trendingProducts[i].name}</h4>
             <h5 class="product-price">${trendingProducts[i].price}</h5>
        </div>
    </div>`
    }
    document.querySelector(".top_products .products").innerHTML = content;
}

function displayDetails(productId){
    window.location.href = `ProductDetails.html?productId=${productId}`;
}