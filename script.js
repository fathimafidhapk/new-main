```javascript
function selectVenue(venueName) {
    document.getElementById("venue").value = venueName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let venue = document.getElementById("venue").value;
    let date = document.getElementById("date").value;
    let guests = Number(document.getElementById("guests").value);

    let capacity = {
        "Grand Auditorium": 1000,
        "College Auditorium": 500,
        "Mini Auditorium": 200
    };

    if (date < new Date().toLocaleDateString("en-CA")) {
        document.getElementById("message").textContent =
            "Please select today or a future date.";
        return;
    }

    if (guests > capacity[venue]) {
        document.getElementById("message").textContent =
            "Too many guests for this auditorium.";
        return;
    }

    document.getElementById("message").textContent =
        "Thank you, " + name +
        "! Your booking request for " + venue +
        " has been submitted successfully.";

    document.getElementById("bookingForm").reset();
});
```