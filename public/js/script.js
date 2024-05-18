document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const bookingData = {
        name,
        email,
        date,
        time
    };

    fetch('/book-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Appointment booked successfully!');
        document.getElementById('booking-form').reset();
    })
    .catch(error => {
        alert('There was an error booking your appointment. Please try again.');
        console.error('Error:', error);
    });
});
