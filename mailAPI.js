document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  const formData = {
      service_id: "service_h527y6j", // Replace with your actual service ID
      template_id: "template_rbx9u4m", // Replace with your actual template ID
      user_id: "o1H0AqWWwgG-dBN0r", // Replace with your EmailJS Public API Key
      template_params: {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          message: document.getElementById("message").value
      }
  };

  fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      alert("Email sent successfully!");
      console.log("SUCCESS:", data);
  })
  .catch(error => {
      alert("Error sending email.");
      console.error("FAILED:", error);
  });
});