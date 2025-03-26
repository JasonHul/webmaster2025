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

// Best Selling Items (Bar Chart)
const bestSellingCtx = document.getElementById('bestSellingChart').getContext('2d');
new Chart(bestSellingCtx, {
    type: 'bar',
    data: {
        labels: ['Burger', 'Pizza', 'Fries', 'Pasta', 'Salad'],
        datasets: [{
            label: 'Orders',
            data: [120, 95, 80, 60, 40],
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