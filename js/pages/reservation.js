document.getElementById('reservationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const contact = document.getElementById('contact').value;

    try {
        await db.collection('reservation').add({
            name,
            date,
            time,
            guests,
            contact,
            status: 'pending'
        });
        console.log('Reservation submitted successfully!');
        alert('Reservation submitted successfully!');
    } catch (error) {
        console.error('Error submitting reservation:', error);
    }
});

function autoFillInfo() {
    if (localStorage.getItem('sessionUser')) {
        const sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
        document.getElementById('name').value = sessionUser.username;
        document.getElementById('contact').value = sessionUser.email;
    }
}