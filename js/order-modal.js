// Modal functionality
const modal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");
const confirmOrder = document.getElementById("confirmOrder");
const modalItemName = document.getElementById("modalItemName");
const modalItemImage = document.getElementById("modalItemImage");
const modalItemPrice = document.getElementById("modalItemPrice");
const quantityInput = document.getElementById("quantity");
const decreaseQty = document.getElementById("decreaseQty");
const increaseQty = document.getElementById("increaseQty");
const totalPriceElement = document.getElementById("totalPrice");

let basePrice = 0; // Store base price for calculations

// Close modal functionality
closeModal.onclick = function () {
    modal.style.display = "none";
};

// Open modal with item details when "Order Now" button is clicked
document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("btn")) {
        const itemName = event.target.getAttribute("data-item");
        const itemPrice = parseFloat(event.target.getAttribute("data-price"));
        const itemImage = event.target.getAttribute("data-picture");

        modalItemName.textContent = itemName;
        modalItemPrice.textContent = `Price: $${itemPrice.toFixed(2)}`;
        modalItemImage.src = itemImage;
        
        basePrice = itemPrice; // Store the base price for calculations
        quantityInput.value = 1; // Reset quantity to 1
        updateTotalPrice(); // Update total price initially

        modal.style.display = "flex";
    }
});

// Function to update total price based on quantity
function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = (basePrice * quantity).toFixed(2);
    totalPriceElement.textContent = totalPrice;
}

// Increase quantity
increaseQty.addEventListener("click", function () {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity < 15) {
        quantityInput.value = currentQuantity + 1;
        updateTotalPrice();
    }
});

// Decrease quantity (ensures at least 1)
decreaseQty.addEventListener("click", function () {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        updateTotalPrice();
    }
});

// Confirm order functionality
confirmOrder.onclick = function () {
    const quantity = parseInt(quantityInput.value);

    if (quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }
    if (quantity > 15) {
        alert("Please enter a quantity less than or equal to 15.");
        return;
    }

    addFoodItem(modalItemName.textContent, quantity);
    saveToDatabase();
    console.log(`Add to cart confirmed for ${quantity} ${modalItemName.textContent}(s)`);
    modal.style.display = "none";
};
