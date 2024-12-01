let priceElement = document.getElementById("price");
let quantity = document.getElementById("order-quantity");
const initialPrice = parseFloat(priceElement.value);
const name = document.getElementById("product-name").innerText;

function increment() {
    if (quantity.value < 10) {
        quantity.value = parseInt(quantity.value) + 1;
        priceElement.value = initialPrice * parseInt(quantity.value);
    }
}

function decrement() {
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
        priceElement.value = initialPrice * parseInt(quantity.value);
    }
}

function order() {
    alert(`You have ordered ${quantity.value} ${name}(s) for ¥${priceElement.value}`);
    window.location.href = "homepage.html";
}