<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data from the POST request
    $name = $_POST['name'];
    $address = $_POST['address'];
    $seat = $_POST['seat'];
    $boarding = $_POST['boarding'];
    $destination = $_POST['destination'];

    // Calculate fare (simple example, you can adjust the logic)
    $base_fare = 100; // Example base fare for the journey
    $fare = $base_fare + (abs(strlen($destination) - strlen($boarding)) * 10); // Fare calculation

    // Generate ticket
    $ticket = "
        <h2>Ticket Booking Confirmation</h2>
        <p><strong>Passenger Name:</strong> $name</p>
        <p><strong>Address:</strong> $address</p>
        <p><strong>Seat Number:</strong> $seat</p>
        <p><strong>Boarding Station:</strong> $boarding</p>
        <p><strong>Destination:</strong> $destination</p>
        <p><strong>Fare:</strong> KSH " . number_format($fare, 2) . "</p>

    ";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bus Ticket Booking</title>
    <style>
        fieldset {
            background-color: pink;
        }
    </style>
    <script>
        function validateform() {
            let a = document.frm.name.value; 
            let b = document.frm.address.value; 
            let c = document.frm.seat.value; 
            let d = document.frm.boarding.value; 
            let e = document.frm.destination.value; 

            // Check for each condition separately using if-else
            if (a === "") {
                alert("Name field is required.");
                document.frm.name.focus();
                return false;
            } else if (b === "") {
                alert("Address field is required.");
                document.frm.address.focus();
                return false;
            } else if (c < 1) {
                alert("Seat number must be greater than 0.");
                document.frm.seat.focus();
                return false;
            } else if (d === "") {
                alert("Boarding station field is required.");
                document.frm.boarding.focus();
                return false;
            } else if (e === "") {
                alert("Destination field is required.");
                document.frm.destination.focus();
                return false;
            } else if (d === e) {
                alert("Boarding station and destination cannot be the same.");
                return false;
            } else {
                return true; // Proceed with form submission
            }
        }
    </script>
</head>
<body>
    <fieldset>
        <legend>Ticket Booking</legend>
        <form action="booking ticket.php" name="frm" method="post" autocomplete="off" onsubmit="return validateform()">
            <label for="name">Passenger Name:</label>
            <input type="text" id="name" name="name" required>
            <br><br>
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required>
            <br><br>
            <label for="seat">Seat Number:</label>
            <input type="number" id="seat" name="seat" min="1" required>
            <br><br>
            <label for="boarding">Boarding Station:</label>
            <input type="text" id="boarding" name="boarding" required>
            <br><br>
            <label for="destination">Destination:</label>
            <input type="text" id="destination" name="destination" required>
            <br><br>
            <input type="submit" value="Book Ticket">
        </form>
    </fieldset>

    <?php
    // Display the ticket if the form is submitted
    if (isset($ticket)) {
        echo $ticket;
    }
    ?>

</body>
</html>
