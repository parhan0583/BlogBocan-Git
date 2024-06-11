let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("learnMoreBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
