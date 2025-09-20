let total = 0;

function addToCart(drink, price) {
  let cartItems = document.getElementById("cartItems");
  let li = document.createElement("li");
  li.textContent = drink + " – $" + price;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = function() {
    cartItems.removeChild(li);
    total -= price;
    document.getElementById("total").textContent = total.toFixed(2);
  };

  li.appendChild(removeBtn);
  cartItems.appendChild(li);

  total += price;
  document.getElementById("total").textContent = total.toFixed(2);
}
