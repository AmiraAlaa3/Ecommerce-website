window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

document.getElementById("scrollBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});
let closeCart = document.querySelector('.closeCart');
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

function viewCart(){
    window.location.href = "cartPage.html"
}