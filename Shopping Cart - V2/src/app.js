let products = document.querySelector(".products");
let totalProducts = document.querySelector("#total-products");
let cart = [];

function generateStore() {
    products.innerHTML = Products.map((p) => {
            return `
            <div class="product ${p.id}">
                <div class="product-img">
                    <img src="${p.img}">
                </div>
                <div class="desc">${p.description}</div>
                <div class="price">$${p.price}</div>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div id="${p.id}">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
            `
        }).join("")
}
generateStore();

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
function updateCartIcon() {
    totalProducts.innerHTML = cart.map((x) => {
        return x.quantity;
    }).reduce((x,y) => x+y,0)
    
}