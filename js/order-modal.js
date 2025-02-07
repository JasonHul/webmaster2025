// Modal functionality
const modal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");
const confirmOrder = document.getElementById("confirmOrder");
const modalItemName = document.getElementById("modalItemName");
const modalItemImage = document.getElementById("modalItemImage");
const modalItemPrice = document.getElementById("modalItemPrice");
const quantityInput = document.getElementById("quantity");

// Close modal functionality
closeModal.onclick = function() {
    modal.style.display = "none";
}



// Open modal with item details when "Order Now" button is clicked
document.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("btn")) {
        const itemName = event.target.getAttribute("data-item");
        const itemPrice = event.target.getAttribute("data-price");
        const itemImage = event.target.getAttribute("data-picture");

        modalItemName.textContent = itemName;
        modalItemPrice.textContent = `$${itemPrice}`;
        modalItemImage.src = itemImage;

        modal.style.display = "flex"; 
    }
});


// Confirm order functionality (for now, just log quantity)
confirmOrder.onclick = function() {
    const quantity = quantityInput.value;
    addFoodItem(modalItemName.textContent, quantity);
    saveToDatabase();
    console.log(`Add to cart confirmed for ${quantity} ${modalItemName.textContent}(s)`);
    modal.style.display = "none";  
}
