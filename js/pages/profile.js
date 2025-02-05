function logout() {
    // Clear the session
    localStorage.removeItem("sessionUser");
    localStorage.removeItem("foodItems");

    // Redirect to the login page
    window.location.href = "login.html";
}

/* USER DATA AND HISTORY AREA */

const accountDetailsSection = document.getElementById("account-details-section");
const pastOrdersSection = document.getElementById("past-orders-section");

function searchUserFromDatabase(callback) {
    console.log("sessionUser: ", localStorage.getItem("sessionUser"));

    const sessionUser = localStorage.getItem("sessionUser");
    if (!sessionUser) {
        console.log("No session user found!");
        return callback(null);
    }

    const userId = JSON.parse(sessionUser).userId;
    const userRef = db.collection("accountForm").doc(userId);

    userRef.get().then((doc) => {
        if (doc.exists) {
            const docData = doc.data();
            console.log("Document data:", docData);
            callback(docData); // Pass data to callback function
        } else {
            console.log("No such document!");
            callback(null);
        }
    }).catch((error) => {
        console.error("Error fetching document:", error);
        callback(null);
    });
}


function searchOrderHistoryFromDatabase(callback) {
    const sessionUser = localStorage.getItem("sessionUser");
    if (!sessionUser) {
        console.log("No session user found!");
        return callback(null);
    }

    const userId = JSON.parse(sessionUser).userId;
    const orderHistoryRef = db.collection("orderHistory").where("userId", "==", userId);

    orderHistoryRef.get().then((querySnapshot) => {
        if (querySnapshot.empty) {
            console.log("No order history found for the user.");
            callback(null);
        } else {
            const orderHistoryData = [];
            querySnapshot.forEach((doc) => {
                const docData = doc.data();
                console.log("Order history data:", docData);
                orderHistoryData.push(docData);
            });
            callback(orderHistoryData); // Pass data to callback function
        }
    }).catch((error) => {
        console.error("Error fetching order history:", error);
        callback(null);
    })
}

function generatePersonalDetails() {
    searchUserFromDatabase((user) => {
        if (!user) {
            console.log("No user data available.");
            return;
        }
        
        const detailsHTML = `
            <h2 class="section-title">Personal Details</h2>
            <p><strong>Name:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone || "N/A"}</p>
        `;
        
        accountDetailsSection.innerHTML += detailsHTML;
    });
}
 

function generatePastOrders() {
    searchOrderHistoryFromDatabase((orderHistory) => {
        if (!orderHistory) {
            console.log("No order history data available.");
            return;
        }

        const ordersHTML = `
            <h2 class="section-title">Past Orders</h2>
            <ul>
                ${orderHistory.map((order) => `
                    <li>
                        Order #${order.orderId} - 
                        <strong>${order.foodItems.map(item => item.item).join(", ")}</strong> - 
                        $${order.totalPrice} - 
                        ${order.timestamp.toDate().toLocaleString()}
                    </li>
                `).join("")}
            </ul>
        `;

        pastOrdersSection.innerHTML += ordersHTML;
    });
}



generatePersonalDetails();
generatePastOrders();

