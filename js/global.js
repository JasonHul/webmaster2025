
const cartLabel = document.getElementById("cart-label");

// Function to update the cart label
function updateCartLabel() {
    foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    console.log("Global.js - foodItems: ", foodItems);
    const totalItems = getNumberOfItems();
    cartLabel.innerText = `Cart (${totalItems})`;
}

function getNumberOfItems() {
    let totalCount = 0;
    foodItems.forEach(item => {
        totalCount += item.saved_quantity;
    });
    return totalCount;
}

updateCartLabel();