var cart= document.querySelector("#cart");

cart.addEventListener('click', checkoutMessage);
function checkoutMessage(){
    alert('Product has been added to cart. Keep shopping!');
}