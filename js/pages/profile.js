function logout() {
    // Clear the session
    localStorage.removeItem("sessionUser");
    localStorage.removeItem("foodItems");

    // Redirect to the login page
    window.location.href = "login.html";
}

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLnWMQFQelUfRT1AMw_ynbUqPm-fBLdy4",
    authDomain: "webmaster25-d336f.firebaseapp.com",
    databaseURL: "https://webmaster25-d336f-default-rtdb.firebaseio.com",
    projectId: "webmaster25-d336f",
    storageBucket: "webmaster25-d336f.appspot.com",
    messagingSenderId: "592082921682",
    appId: "1:592082921682:web:ce8c62ffb626640713650b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


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
    return `
    <h2 class="section-title">Past Orders</h2>
    <ul>
        <li>Order #1234 - Quinoa Salad - $12.99</li>
        <li>Order #1235 - Vegan Burger - $15.99</li>
        <li>Order #1236 - Organic Smoothie - $8.50</li>
    </ul>
    `;
}


generatePersonalDetails();
generatePastOrders();

