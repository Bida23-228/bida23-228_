
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " added to cart!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  document.getElementById("cart-total").textContent = "Total: $" + total;
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

if (document.getElementById("cart-items")) {
  displayCart();
}

document.getElementById("buy-now")?.addEventListener("click", function() {
  alert("Thank you for your purchase!");
});
