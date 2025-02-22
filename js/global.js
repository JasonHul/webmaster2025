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
    foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    console.log("Global.js - foodItems: ", foodItems);
    const totalItems = getNumberOfItems();

    // Update the inner text for all cart label elements
    cartLabels.forEach(label => {
        label.innerText = `Cart (${totalItems})`;
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


function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

try {
    let message = isMobile() ? "You are using a mobile device. (Just A test)" : "You are using a desktop browser. (Just a test)";
    document.getElementById("deviceType").textContent = message;
}
catch (error) {
    console.error("Error:", error);
}


