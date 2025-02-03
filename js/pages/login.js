// Firebase configuration (already initialized above)
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

// Hashing function
async function hashField(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data); // SHA-256 hashing
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Function to check and maintain session
function checkSession() {
    const sessionUser = localStorage.getItem("sessionUser");
    if (sessionUser) {
        // If a session exists, redirect to the dashboard
        // window.location.href = "menu.html";
    }
}

// Call this on every login page load
checkSession();

// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const hashedPassword = await hashField(document.getElementById('password').value);


    try {
        // Query Firestore to find an account with the matching email
        const querySnapshot = await db.collection("accountForm").where("email", "==", email).get();
        
        if (querySnapshot.empty) {
            alert("No account found with that email.");
            return;
        }

        // Check if the password matches
        querySnapshot.forEach(doc => {
            const accountData = doc.data();
            if (accountData.password === hashedPassword) {
                alert("Login successful!");
                localStorage.setItem("sessionUser", JSON.stringify({ email: accountData.email, userId: doc.id }));
                console.log("session id (doc.id): ", doc.id);
                // Redirect to another page or load user-specific data
                // window.location.href = "menu.html"; 
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    } catch (error) {
        console.error("Error checking credentials:", error);
        alert("An error occurred during login.");
    }
});

// Logout functionality
function logout() {
    // Clear the session
    localStorage.removeItem("sessionUser");
    localStorage.removeItem("foodItems");

    // Redirect to the login page
    window.location.href = "login.html";
}



//Code trying to implment
// document.getElementById('loginForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     const email = document.getElementById('email').value;
//     const hashedPassword = await hashField(document.getElementById('password').value);


//     try {
//         // Query Firestore to find an account with the matching email
//         const querySnapshot = await db.collection("accountForm").where("email", "==", email).get();
        
//         if (querySnapshot.empty) {
//             alert("No account found with that email.");
//             return;
//         }

//         // Check if the password matches
//         querySnapshot.forEach(doc => {
//             const accountData = doc.data();
//             if (accountData.password === hashedPassword) {
//                 alert("Login successful!");
//                 localStorage.setItem("sessionUser", JSON.stringify({ email: accountData.email, userId: doc.id, username: accountData.username }));
//                 console.log("session id (doc.id): ", doc.id);
//                 // Redirect to another page or load user-specific data
//                 // window.location.href = "menu.html";
//                 const items = getCartHistory(doc.id);
//                 console.log("login.js - FoodItems: ", items);
//                 localStorage.setItem("foodItems", items); 
//             } else {
//                 alert("Incorrect password. Please try again.");
//             }
//         });
//     } catch (error) {
//         console.error("Error checking credentials:", error);
//         alert("An error occurred during login.");
//     }
// });

// async function getCartHistory(userId) {
//     try {
//         const querySnapshot = await db.collection("cartHistory").get();

//         if (querySnapshot.empty) {
//             console.log("No cart history found.");
//             return null;
//         }

//         let cartHistory = [];
//         querySnapshot.forEach(foodDoc => {
//             // Check if the document ID matches the userId
//             if (foodDoc.id === userId) {
//                 console.log("User's cart history found.");
//                 const data = foodDoc.data().foodItems;
//                 cartHistory.push(data);
//             }
//         });

//         if (cartHistory.length === 0) {
//             console.log("No cart history found for this user.");
//             return null;
//         }

//         console.log("Cart History:", cartHistory);
//         return cartHistory;
//     } catch (error) {
//         console.error("Error fetching cart history:", error);
//         return null;
//     }
// }



