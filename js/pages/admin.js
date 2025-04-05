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
// listFoodItemsFromDatabase = [];
// function getNumOrderItemsFromDatabase()  {
//     list = []
//     db.collection("orderHistory").get().then((snapshot) => {
//         if (snapshot.empty) {
//             console.log("No matching documents.");
//         } else {
//             snapshot.forEach((doc) => {
//                 const data = doc.data();
//                 const foodItems = data.foodItems || [];
//                 list.push(foodItems);
//             });
//         }
//     }).catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

//     return list;
// }

// listFoodItemsFromDatabase = getNumOrderItemsFromDatabase();
// console.log("listFoodItemsFromDatabase: ", listFoodItemsFromDatabase);



// Best Selling Items (Bar Chart)
const bestSellingCtx = document.getElementById('bestSellingChart').getContext('2d');

// Flatten the nested array structure
// const flattenedFoodItems = listFoodItemsFromDatabase.flat();

// Map and sum saved quantities based on itemsList labels
// const orderCounts = itemsList.map(item => {
//     const matchedItems = flattenedFoodItems.filter(dbItem => dbItem.item === item.item);
//     console.log("matchedItems: ", matchedItems);
//     console.log("saved_quantity: ", matchedItems.saved_quantity);
//     return matchedItems.reduce((total, dbItem) => total + dbItem.saved_quantity, 0);
// });

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



/* ORDER HISTORY FORM SEECTION */


/* RESERVATION FORM SECTION */
let listReservationFormFromDatabase = [];
async function getReservationFormFromDatabase() {
    console.log("getReservationFormFromDatabase called");
    try {
        const snapshot = await db.collection("reservationForm").get();
        if (snapshot.empty) {
            console.log("No matching reservation documents.");
        } else {
            snapshot.forEach((doc) => {
                const data = doc.data();
                const name = data.name || "N/A";
                const date = data.date || "N/A";
                const time = data.time || "N/A";
                const guests = data.guests || "N/A";
                const phone = data.phone || "N/A";
                const status = data.status || "N/A";
                const timestamp = formatTimestamp(data.timestamp);

                const reservation = {
                    name,
                    date,
                    time,
                    guests,
                    phone,
                    status,
                    timestamp
                };

                listReservationFormFromDatabase.push(reservation);
                console.log("Reservation Data: ", reservation);
            });
        }

        // Call the function to load reservation table
        loadReservationTable();

    } catch (error) {
        console.log("Error getting reservation documents: ", error);
    }
}

function loadReservationTable() {
    try {
        const reservationList = document.getElementById('reservation-list');
        console.log("reservation-list", reservationList);

        if (!reservationList) {
            console.error("Element with ID 'reservation-list' not found.");
            return;
        }

        listReservationFormFromDatabase.forEach(reservation => {
            reservationList.innerHTML += generateReservationRow(
                reservation.name,
                reservation.date,
                reservation.time,
                reservation.guests,
                reservation.phone,
                reservation.status,
                reservation.timestamp
            );
        });

    } catch (error) {
        console.log(error);
    }
}

function generateReservationRow(name, date, time, guests, phone, status, timestamp) {
    return `
    <tr>
        <td>${name}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${guests}</td>
        <td>${phone}</td>
        <td>${status}</td>
        <td>${timestamp}</td>
    </tr>
    `;
}

getReservationFormFromDatabase();


/* CONTACT FORM SECTION */
let listContactFormFromDatabase = [];
async function getContactFormFromDatabase() {
    console.log("getContactFormFromDatabase called");
    try {
        const snapshot = await db.collection("contactForm").get();
        if (snapshot.empty) {
            console.log("No matching documents.");
        } else {
            snapshot.forEach((doc) => {
                const data = doc.data();
                const name = data.name || "N/A";
                const email = data.email || "N/A";
                const subject = data.subject || "N/A";
                const message = data.message || "N/A";
                const timestamp = formatTimestamp(data.timestamp);

                const contactForm = {
                    name,
                    email,
                    subject,
                    message,
                    timestamp,
                };

                listContactFormFromDatabase.push(contactForm);
                console.log("Contact Form Data: ", contactForm);
            });
        }

        loadContactFormTable();

    } catch (error) {
        console.log("Error getting documents: ", error);
    }
}


function loadContactFormTable() {
    try {
        const messageList = document.getElementById('messages-list');
        console.log("messages-list", messageList);

        if (!messageList) {
            console.error("Element with ID 'messages-list' not found.");
            return;
        }

        listContactFormFromDatabase.forEach(contactForm => {
            console.log("Foreach Contact Form: ", contactForm);
            messageList.innerHTML += generateMessageRow(
                contactForm.name,
                contactForm.email,
                contactForm.subject,
                contactForm.message,
                contactForm.timestamp
            );
        });

    } catch (error) {
        console.log(error);
    }
}

function generateMessageRow(name, email, subject, message, timestamp) {
    return `
    <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${subject}</td>
        <td>${message}</td>
        <td>${timestamp}</td>
    </tr>
    `;
}

getContactFormFromDatabase();




//Miscellaneous functions
function formatTimestamp(timestamp) {
    if (timestamp && timestamp.toDate) {
        const date = timestamp.toDate();
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }
    return "N/A";
}
