const productList = document.getElementById("product-list");

fetch("https://fakestoreapi.com/products?limit=8")
.then(response => response.json())
.then(products => {

    let output = "";

    products.forEach(product => {

        output += `
        <div class="product">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title.substring(0,25)}...</h3>
            <p><strong>₹ ${Math.round(product.price=1)}</strong></p>
            <button onclick="addCart()">Add to Cart</button>
        </div>
        `;

    });

    productList.innerHTML = output;

});

function addCart(){
    alert("Product added to cart!");
}

document.querySelector(".hero button").addEventListener("click", function(){
    document.getElementById("products").scrollIntoView({
        behavior:"smooth"
    });
});