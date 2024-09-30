document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission for demo purposes

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let adTitle = document.getElementById('ad-title').value;
    let date = document.getElementById('date').value;

    // Simple validation
    if(name && email && adTitle && date) {
        alert(`Thank you, ${name}! Your booking for "${adTitle}" on ${date} has been received.`);
        // You can add code here to send the data to the server
    } else {
        alert('Please fill out all the fields.');
    }
});
