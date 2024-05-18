const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','index.html'));
});

app.post('/book-appointment', (req, res) => {
    const { name, email, date, time } = req.body;

    // Logic to handle the booking, e.g., send an email notification
    // For now, we'll just log it to the console
    console.log(`Appointment booked by ${name} (${email}) on ${date} at ${time}`);

    res.json({ message: 'Appointment booked successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
