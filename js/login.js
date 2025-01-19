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
                // Redirect to another page or load user-specific data
                window.location.href = "dashboard.html"; // Example redirect to dashboard
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    } catch (error) {
        console.error("Error checking credentials:", error);
        alert("An error occurred during login.");
    }
});

