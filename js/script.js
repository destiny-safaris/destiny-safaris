

function sendEmail() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var datetime = document.getElementById("datetime").value;
    var country = document.getElementById("country").value;
    var selectElement = document.getElementById("select1");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var destination = selectedOption.text;
    var message = document.getElementById("message").value;

    // EmailJS service ID and template ID
    var serviceID = "service_9awsq7r"; // Replace with your service ID
    var templateID = "template_ffbe28o"; // Replace with your template ID

    // EmailJS parameters
    var parameters = {
        name: name,
        email: email,
        phone: phone,
        datetime: datetime,
        country: country,
        destination: destination,
        message: message
    };

    emailjs.send(serviceID, templateID, parameters)
        .then(function (response) {
            console.log('Email sent successfully:', response.status);
            // Show a success message to the user
            alert("Your booking has been submitted successfully. We will contact you shortly.");
        })
        .catch(function (error) {
            console.error('Failed to send email:', error);
            // Show an error message to the user
            alert("An error occurred while sending your booking. Please try again later.");
        });
}