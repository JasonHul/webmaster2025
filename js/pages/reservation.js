document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const phone = document.getElementById('contact').value;

    try {
        await db.collection('reservationForm').add({
            name,
            date,
            time,
            guests,
            phone,
            status: 'pending'
        });
        console.log('Reservation submitted successfully!');
        alert('Reservation submitted successfully!');
    } catch (error) {
        console.error('Error submitting reservation:', error);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").value = localStorage.getItem('sessionUser') ? JSON.parse(localStorage.getItem('sessionUser')).username  +
     " " + JSON.parse(localStorage.getItem('sessionUser')).lastname: "";    
});