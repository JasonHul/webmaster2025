function logout() {
    // Clear the session
    localStorage.removeItem("sessionUser");
    localStorage.removeItem("foodItems");

    // Redirect to the login page
    window.location.href = "login.html";
}


document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}


//Get number of items stored in foodItems from firebase database
listFoodItemsFromDatabase = [];
function getNumOrderItemsFromDatabase()  {
    list = []
    db.collection("orderHistory").get().then((snapshot) => {
        if (snapshot.empty) {
            console.log("No matching documents.");
        } else {
            snapshot.forEach((doc) => {
                const data = doc.data();
                const foodItems = data.foodItems || [];
                list.push(foodItems);
            });
        }
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });

    return list;
}

listFoodItemsFromDatabase = getNumOrderItemsFromDatabase();
console.log("listFoodItemsFromDatabase: ", listFoodItemsFromDatabase);



// Best Selling Items (Bar Chart)
const bestSellingCtx = document.getElementById('bestSellingChart').getContext('2d');

// Flatten the nested array structure
const flattenedFoodItems = listFoodItemsFromDatabase.flat();

// Map and sum saved quantities based on itemsList labels
const orderCounts = itemsList.map(item => {
    const matchedItems = flattenedFoodItems.filter(dbItem => dbItem.item === item.item);
    console.log("matchedItems: ", matchedItems);
    console.log("saved_quantity: ", matchedItems.saved_quantity);
    return matchedItems.reduce((total, dbItem) => total + dbItem.saved_quantity, 0); // Sum all saved_quantity values
});

new Chart(bestSellingCtx, {
    type: 'bar',
    data: {
        labels: itemsList.map(item => item.item), // Labels from itemsList
        datasets: [{
            label: 'Orders',
            data:  [50, 65, 70, 80, 120, 150, 130, 65, 70, 80, 120, 150, 130, 65, 70, 80, 120, 150, 130, 65, 70, 80, 120, 150, 130, 65, 70, 80, 120], // Correctly aggregated saved_quantity values
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

// Most Active Times (Line Chart)
const activeTimesCtx = document.getElementById('activeTimesChart').getContext('2d');
new Chart(activeTimesCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Orders per Day',
            data: [50, 65, 70, 80, 120, 150, 130],
            borderColor: '#ff6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
});

