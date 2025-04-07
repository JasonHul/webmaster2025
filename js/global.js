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

const cartLabels = document.querySelectorAll(".cart-label");

function updateCartLabel() {
    const foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    const totalItems = foodItems.length;

    const cartLabelSpans = document.querySelectorAll('.cart-count-text');
    
    cartLabelSpans.forEach(span => {
        span.innerText = `(${totalItems})`; 
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

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  