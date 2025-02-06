
foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
console.log("cart.js - foodItems: ", foodItems);

subtotal = 0;
delivery_fee = 0;
discount = 0;

function removeItem(button) {
    const row = button.parentElement.parentElement;
    
    product = foodItems.find(i => i.item === row.querySelector('h3').innerText);
    item = itemsList.find(i => i.item === product.item);
    subtotal -= +(product.saved_quantity * item.price).toFixed(2);
    console.log("subtotal: ", subtotal);
    regenerateSummary();

    foodItems = foodItems.filter(item => item.item !== row.querySelector('h3').innerText);
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
    saveToDatabase();
    updateCartLabel();
    row.remove();
    if (foodItems.length === 0) {
        displayEmptyCart();
    }
}



function generateProduct(item) {
        product = itemsList.find(i => i.item === item.item);
        console.log("cart.js - product: ", product);
        pricing = (product.price * item.saved_quantity).toFixed(2);
        subtotal += +pricing;
        image = product.pictureURL.con;
    return `
        <div class="cart-item">
            <img src="${product.pictureURL.substring(3)}" alt="${product.item}" class="item-image">
            <div class="item-details">
                <h3>${product.item}</h3>
                <p>${product.description}</p>
            </div>
            <div class="item-summary">
                <p>${item.saved_quantity} $${product.price}</p>
                <p><strong>$${pricing}</strong></p>
                <button class="remove-btn" onclick="removeItem(this)">Remove</button>
            </div>
        </div>
    `;
    
}


function generateSummary() {
    return `
            <h2>Total Payment</h2>
            <div class="payment-summary">
                <p>Subtotal: <strong>$${subtotal.toFixed(2)}</strong></p>
                <p>Delivery fee: <strong>$${delivery_fee.toFixed(2)}</strong></p>
                <p>Discount: <strong>-$${discount.toFixed(2)}</strong></p>
                <p class="remaining-amount">Total: <strong id="strong-total">$${(+subtotal + +delivery_fee - +discount).toFixed(2)}</strong></p>
            </div>
            <button onclick="saveOrderToDatabase()" class="confirm-order-btn">Send Order</button>
            <p class="note">The delivery fee is split among group members, and any balance is refunded based on the total amount.</p>
        </div>
    `;

}


function regenerateSummary() {
    const summarySection = document.getElementById('summary-section');
    summarySection.innerHTML = generateSummary();
}

async function saveOrderToDatabase() {
    try {
        const sessionUser = JSON.parse(localStorage.getItem("sessionUser"));
        const userId = sessionUser ? sessionUser.userId : null;
        tempID = Math.floor(Math.random() * 1000000); //WILL NEED TO REPLACE WITH PROPER SYSTEM W/o DUPLICATES

        if (userId) {
            await db.collection("orderHistory").add({
                userId, // Save userId for reference
                foodItems,
                orderId: tempID,
                totalPrice: (+subtotal + +delivery_fee - +discount).toFixed(2),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            console.log("Order Placed Successfully!");
            alert("Order created successfully! Check Your Profile!");
            localStorage.removeItem("foodItems");
            console.log("FoodItems was cleared");
        } else {
            alert("Please login to place an order!");
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Error saving order:", error);
        alert("An error occurred while placing the order. Please try again.");
    }
}


const cartContainer = document.getElementById('cart-section');
console.log("cartContainer: ", cartContainer);

function displayEmptyCart() {
    cartContainer.innerHTML = `<h2 class="empty-cart">Your Cart is Empty</h2>`;
}

if (foodItems.length > 0) {
    foodItems.forEach(item => {
            cartContainer.innerHTML += generateProduct(item);
    });
}
else {
    displayEmptyCart();
}

const summarySection = document.getElementById('summary-section');
    summarySection.innerHTML += generateSummary();

