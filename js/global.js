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



const cartLabels = document.querySelectorAll(".cart-label"); // Select all elements with class "cart-label"

// Function to update all cart labels
function updateCartLabel() {
    const foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    const totalItems = foodItems.length; // or use getNumberOfItems() if it's a separate function

    // Find the cart label (span) where we want to update the count
    const cartLabelSpans = document.querySelectorAll('.cart-count-text');
    
    // Update the text of the cart count
    cartLabelSpans.forEach(span => {
        span.innerText = `(${totalItems})`; // Update the count
    });
}


function getNumberOfItems() {
    let totalCount = 0;
    foodItems.forEach(item => {
        totalCount += item.saved_quantity;
    });
    return totalCount;
}

updateCartLabel();

