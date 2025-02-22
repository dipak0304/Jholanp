
/*document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function addToCart(name, price, image) {
        let existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");
            let image = this.getAttribute("data-image");
            addToCart(name, price, image);
        });
    });
});




//for added to cart
document.addEventListener("DOMContentLoaded", function () {
    let cartTable = document.querySelector("#cart tbody");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let subtotal = 0;

    function updateCartDisplay() {
        cartTable.innerHTML = "";
        cart.forEach((item, index) => {
            let itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;

            let row = `
                <tr>
                    <td><button class="remove-item" data-index="${index}">X</button></td>
                    <td><img src="${item.image}" width="50"></td>
                    <td>${item.name}</td>
                    <td>NPR ${item.price}</td>
                    <td><input type="number" class="quantity" data-index="${index}" value="${item.quantity}" min="1"></td>
                    <td>NPR ${itemSubtotal}</td>
                </tr>
            `;
            cartTable.innerHTML += row;
        });

        document.getElementById("cart-subtotal").innerText = subtotal;
        document.getElementById("cart-total").innerText = subtotal + 399;
    }

    cartTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            let index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    cartTable.addEventListener("input", function (event) {
        if (event.target.classList.contains("quantity")) {
            let index = event.target.getAttribute("data-index");
            cart[index].quantity = parseInt(event.target.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    updateCartDisplay();
// });    */
//new js code
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function addToCart(name, price, image) {
        let existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart!");
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");
            let image = this.getAttribute("data-image");
            addToCart(name, price, image);
        });
    });
});







//for cart


/*document.addEventListener("DOMContentLoaded", function () {
    let cartTable = document.querySelector("#cart tbody");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let shippingCost = 399;

    function updateCartDisplay() {
        cartTable.innerHTML = "";
        let subtotal = 0;

        cart.forEach((item, index) => {
            let itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;

            let row = `
                <tr>
                    <td><button class="remove-item" data-index="${index}">X</button></td>
                    <td><img src="${item.image}" width="50"></td>
                    <td>${item.name}</td>
                    <td>NPR ${item.price}</td>
                    <td>
                        <button class="decrease-qty" data-index="${index}">-</button>
                        <input type="number" class="quantity" data-index="${index}" value="${item.quantity}" min="1">
                        <button class="increase-qty" data-index="${index}">+</button>
                    </td>
                    <td class="item-subtotal">NPR ${itemSubtotal}</td>
                </tr>
            `;
            cartTable.innerHTML += row;
        });

        document.getElementById("cart-subtotal").innerText = subtotal;
        document.getElementById("cart-total").innerText = subtotal + shippingCost;
    }

    function updateQuantity(index, newQuantity) {
        if (newQuantity < 1) return;
        cart[index].quantity = newQuantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    cartTable.addEventListener("click", function (event) {
        let index = event.target.getAttribute("data-index");

        if (event.target.classList.contains("remove-item")) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        } 
        else if (event.target.classList.contains("increase-qty")) {
            updateQuantity(index, cart[index].quantity + 1);
        } 
        else if (event.target.classList.contains("decrease-qty")) {
            updateQuantity(index, cart[index].quantity - 1);
        }
    });

    cartTable.addEventListener("input", function (event) {
        if (event.target.classList.contains("quantity")) {
            let index = event.target.getAttribute("data-index");
            updateQuantity(index, parseInt(event.target.value));
        }
    });

    updateCartDisplay();
});  */





//new for cart
document.addEventListener("DOMContentLoaded", function () {
    let cartTable = document.querySelector("#cart tbody");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let shippingCost = 399;

    function updateCartDisplay() {
        cartTable.innerHTML = "";
        let subtotal = 0;

        cart.forEach((item, index) => {
            let itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;

            let row = `
                <tr>
                    <td><button class="remove-item" data-index="${index}">X</button></td>
                    <td><img src="${item.image}" width="50"></td>
                    <td>${item.name}</td>
                    <td>NPR ${item.price}</td>
                    <td>
                        <input type="number" class="quantity" data-index="${index}" value="${item.quantity}" min="1">
                    </td>
                    <td class="item-subtotal" data-index="${index}">NPR ${itemSubtotal}</td>
                </tr>
            `;
            cartTable.innerHTML += row;
        });

        document.getElementById("cart-subtotal").innerText = subtotal;
        document.getElementById("cart-total").innerText = subtotal + shippingCost;
    }

    cartTable.addEventListener("input", function (event) {
        if (event.target.classList.contains("quantity")) {
            let index = event.target.getAttribute("data-index");
            let newQuantity = parseInt(event.target.value);
            if (newQuantity < 1 || isNaN(newQuantity)) return;

            cart[index].quantity = newQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    cartTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            let index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    updateCartDisplay();
});











//DISCOUNT COUPON
// Coupon codes with their respective discounts (percentage-based)
/*const coupons = {
    "JHOLANP": 50, // 50% off
    "WELCOME": 60, // 60% off
    "DISCOUNTOFFER": 10, // 10% off
    "DISCOUNT20": 20, // 20% off
    "DISCOUNT35": 35,
    "JHOLASHOPPING":100  // 35% off
    
};

function applyCoupon() {
    let couponInput = document.getElementById("coupon-code").value.trim().toUpperCase(); // Convert to uppercase
    let message = document.getElementById("coupon-message");
    let cartSubtotalElement = document.getElementById("cart-subtotal");
    let cartTotalElement = document.getElementById("cart-total");

    let cartSubtotal = parseFloat(cartSubtotalElement.innerText);

    if (coupons[couponInput]) {
        let discount = coupons[couponInput];
        let discountAmount = cartSubtotal * (discount / 100); // Calculate discount amount
        let newTotal = cartSubtotal - discountAmount;

        newTotal = Math.max(newTotal, 0); // Prevent negative total

        // Update UI with new total
        cartTotalElement.innerText = newTotal.toFixed(2);
        message.style.color = "green";
        message.innerText = `Coupon Applied! You saved NPR ${discountAmount.toFixed(2)} (${discount}% off)`;
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Coupon Code!";
    }
}
    */




//expire coupon


// Coupon codes with their respective discounts and usage limits
const coupons = {
    "JHOLANP": { discount: 50, usesLeft: 120 },
    "DISCOUNT60": { discount: 60, usesLeft: 120 },
    "DISCOUNT10": { discount: 10, usesLeft: 120 },
    "DISCOUNT20": { discount: 20, usesLeft: 120 },
    "DISCOUNT35": { discount: 35, usesLeft: 120 }
};

function applyCoupon() {
    let couponInput = document.getElementById("coupon-code").value.trim().toUpperCase(); // Convert to uppercase
    let message = document.getElementById("coupon-message");
    let cartSubtotalElement = document.getElementById("cart-subtotal");
    let cartTotalElement = document.getElementById("cart-total");

    let cartSubtotal = parseFloat(cartSubtotalElement.innerText);

    if (coupons[couponInput]) {
        let coupon = coupons[couponInput];

        if (coupon.usesLeft > 0) {
            let discountAmount = cartSubtotal * (coupon.discount / 100); // Calculate discount
            let newTotal = cartSubtotal - discountAmount;
            newTotal = Math.max(newTotal, 0); // Prevent negative total

            // Apply discount and reduce usage count
            cartTotalElement.innerText = newTotal.toFixed(2);
            coupon.usesLeft--;

            message.style.color = "green";
            message.innerText = `Coupon Applied! You saved NPR ${discountAmount.toFixed(2)} (${coupon.discount}% off). 
            Uses left: ${coupon.usesLeft}`;
        } else {
            message.style.color = "red";
            message.innerText = "This coupon has expired! All 120 uses have been redeemed.";
        }
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Coupon Code!";
    }
}









