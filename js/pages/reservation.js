document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const phone = document.getElementById('contact').value;

    const selectedDateTime = new Date(`${date}T${time}`);

    try {
        const conflictExists = await hasTimeConflict(date, selectedDateTime);
        
        if (conflictExists) {
            alert('Sorry, a reservation already exists within an hour of your selected time. Please choose another time.');
            return;
        }

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
        console.error('Error checking or submitting reservation:', error);
        alert('An error occurred. Please try again.');
    }
});

// 💡 Checks for conflicting reservations within 1 hour of selected time
async function hasTimeConflict(date, selectedDateTime) {
    try {
        const snapshot = await db.collection('reservationForm').where('date', '==', date).get();

        for (const doc of snapshot.docs) {
            const data = doc.data();
            const existingTime = new Date(`${data.date}T${data.time}`);
            const diffInMs = Math.abs(existingTime - selectedDateTime);
            const diffInHours = diffInMs / (1000 * 60 * 60);

            if (diffInHours < 1) {
                return true;
            }
        }

        return false;
    } catch (error) {
        console.error('Error checking for time conflicts:', error);
        return false; // fail-safe: allow reservation if check fails
    }
}

async function checkReservationConflict() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const warningEl = document.getElementById('reservation-warning');

    // Only check if both date and time are selected
    if (!date || !time) {
        warningEl.style.display = 'none';
        return;
    }

    const selectedDateTime = new Date(`${date}T${time}`);
    const conflict = await hasTimeConflict(date, selectedDateTime);

    if (conflict) {
        warningEl.textContent = 'Warning: A reservation already exists within 1 hour of this time.';
    } else {
        warningEl.textContent = '';
        warningEl.style.display = 'none';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const sessionUser = localStorage.getItem('sessionUser');
    if (sessionUser) {
        const user = JSON.parse(sessionUser);
        const firstname = user.username || "";
        const lastname = user.lastname || "";
        document.getElementById("name").value = firstname + " " + lastname;
    }

    //Checks conflict live incase someone puts in booked time
    document.getElementById('date').addEventListener('change', checkReservationConflict);
    document.getElementById('time').addEventListener('change', checkReservationConflict);
});
