let totalProducts = document.querySelector("#total-products");
let summaryContainer = document.querySelector(".summary-container");
let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let orderTotal = document.querySelector(".order-total");

function generateOrderSummary() { 
    summaryContainer.innerHTML = cart.map((p) => {
        product = Products.find((x) => x.id === p.id)
        return `
        <div class="order-item ${p.id}">
                <div class="order-img">
                    <img src="${product.img}">
                </div>
                <div class="order-price">Price per unit: $${product.price}</div>
                <div class="order-buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div id="${p.id}">${p.quantity}</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        `
    }).join("")
}

generateOrderSummary();

function updateCartIcon() {
    totalProducts.innerHTML = cart.map((x) => {
        return x.quantity;
    }).reduce((x,y) => x+y,0)
    
}
updateCartIcon();

document.querySelectorAll(".bi-plus-lg").forEach((plus) => {
    plus.addEventListener("click",increaseCart)
})

document.querySelectorAll(".bi-dash-lg").forEach((minus) => {
    minus.addEventListener("click",reduceCart)
})

function increaseCart(e) {
    t = e.target.previousElementSibling.getAttribute("id")
    check = cart.find((p) => p.id === t)
    if (check === undefined) {
        cart.push({id:t, quantity: 1})
    } else {
        check.quantity += 1;
    }
    localStorage.setItem("cartData",JSON.stringify(cart))
    updatePage(t);
    updateCartIcon();
    calculateOrderTotal();
}
function reduceCart(e) {
    t = e.target.nextElementSibling.getAttribute("id").toString()
    check = cart.find((p) => p.id === t)
    if (check) {
        if (check.quantity > 1) {
            check.quantity -= 1;
        } else {
            cart = cart.filter((x) => x.id !== t) //DEVUELVE LOS ELEMENTOS, POR ESO TENGO QUE GUARDARLO!!!!
        }
    } else {
        return
    }
    localStorage.setItem("cartData",JSON.stringify(cart))
    updatePage(t);
    updateCartIcon();
    calculateOrderTotal();
}
function updatePage(id) {
    let inCart = document.getElementById(id);
    let addedToCart = cart.find((p) => p.id === id);

    if (addedToCart) {
        inCart.innerHTML = addedToCart.quantity
    } else {
        inCart.innerHTML = 0
    }
}

function calculateOrderTotal() {
    totalPrice = cart.map((x) => {
        productPrice = Products.find((p) => p.id === x.id).price
        return x.quantity * productPrice
    }).reduce((x,y) => x+y,0)

    orderTotal.innerHTML = `Your order sums up to: $${totalPrice}`;
}
calculateOrderTotal();