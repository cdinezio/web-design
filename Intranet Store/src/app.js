let productsContainer = document.querySelector("#products");

// localStorage.setItem("computersData",JSON.stringify(Products))

function generateProducts() {
    // let productsData = JSON.parse(localStorage.getItem("computersData"))
    productsContainer.innerHTML = Products.map((p) => {
        return `
        <div class="product-card">
                <div class="product-description">${p.description}</div>
                <img src=${p.img} alt="pc photo" srcset="">
                <div class="product-price">$${p.price}</div>
                <div class="cta-cart">Add to Cart</div>
            </div>
            `
    }).join("")
}

generateProducts();