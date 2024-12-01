function increment() {
    let price = document.getElementById("price");
    let quantity = document.getElementById("order-quantity");
    if (quantity.value < 10) {
        quantity.value = parseInt(quantity.value) + 1;
        price.value = 10 * parseInt(quantity.value);
    }
}

function decrement() {
    let price = document.getElementById("price");
    let quantity = document.getElementById("order-quantity");
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
        price.value = 10 * parseInt(quantity.value);
    }
}

function order() {
    let quantity = document.getElementById("order-quantity").value;
    let price = document.getElementById("price").value;
    alert(`You have ordered ${quantity} Matcha Tea(s) for ¥${price}`);
    window.location.href = "homepage.html";
}