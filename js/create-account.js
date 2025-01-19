// Hashing function
async function hashField(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Use SHA-256
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Convert to hex
    return hashHex;
}

function hashFieldText(input) {
    hashField(input).then(hash =>{
        return hash;}
    );
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

// Initialize Firestore
const db = firebase.firestore();

// Form submission handler
document.getElementById("accountForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = getElementVal("username");
    const email = getElementVal("email");
    const password = await hashField(getElementVal("password"));
    const confirm_password = await hashField(getElementVal("confirm-password"));

    try {
        if (password != confirm_password) {
            console.log("Hashed passwords: ");
            console.log("password: ", password);
            console.log("confirm_password: ", confirm_password);
            alert("Passwords do not match!");
            return;
        }
        await db.collection("accountForm").add({
            username,
            email,
            password,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a server-side timestamp
        });
        console.log("Message saved successfully!");
    } 
    catch (error) {
        console.error("Error saving message:", error);
    }
});

// Utility function to get form field values
const getElementVal = (id) => document.getElementById(id).value;

//   // Fetch data from Firestore
//   async function fetchData() {
//     try {
//       const querySnapshot = await db.collection("contactForm").get();
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data());
//       });
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   }

//   // fetchData();