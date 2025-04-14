document.addEventListener("DOMContentLoaded", function () {
  console.log("mailAPI.js loaded");

  const form = document.querySelector("form");
  if (form) {
      form.addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent page refresh

          const serviceID = "service_vngqn86";  // EmailJS Service ID
          const userID = "o1H0AqWWwgG-dBN0r";  // EmailJS Public Key

          const userName = document.getElementById("name").value;
          const userEmail = document.getElementById("email").value;
          const userMessage = document.getElementById("message").value;

          if (!userName || !userEmail || !userMessage) {
              alert("All fields are required!");
              return;
          }

          // First email: User message sent to inbox
          const userMessageData = {
              service_id: serviceID,
              template_id: "template_rbx9u4m", // email template ID
              user_id: userID,
              template_params: {
                  from_name: userName,
                  from_email: userEmail,
                  message: userMessage
              }
          };

          // Second email: Auto-reply to user
          const autoReplyData = {
              service_id: serviceID,
              template_id: "template_o5bn3x9", // auto-reply template ID
              user_id: userID,
              template_params: {
                  to_name: userName,
                  to_email: userEmail, 
              }
          };

          console.log("🚀 Sending user message:", userMessageData);

          // Send first email (user message)
          fetch("https://api.emailjs.com/api/v1.0/email/send", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(userMessageData)
          })
          .then(response => response.text())
          .then(responseText => {
              console.log("User message sent successfully!", responseText);

              // Send auto-reply email
              console.log("🚀 Sending auto-reply:", autoReplyData);
              return fetch("https://api.emailjs.com/api/v1.0/email/send", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(autoReplyData)
              });
          })
          .then(response => response.text())
          .then(responseText => {
              alert("Email sent successfully!");
              console.log("Auto-reply sent successfully!", responseText);
          })
          .catch(error => {
              alert("Error sending email.");
              console.error("FAILED:", error);
          });
      });
  } else {
      console.error("Form element not found.");
  }
});
