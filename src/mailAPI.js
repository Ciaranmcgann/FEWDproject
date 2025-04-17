// API for EmailJS
export async function sendEmail(nameInput, emailInput, messageInput) {
  const serviceID = "service_vngqn86";
  const userID = "o1H0AqWWwgG-dBN0r";

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  const userMessageData = {
    service_id: serviceID,
    template_id: "template_rbx9u4m",
    user_id: userID,
    template_params: {
      from_name: name,
      from_email: email,
      message,
    },
  };

  const autoReplyData = {
    service_id: serviceID,
    template_id: "template_o5bn3x9",
    user_id: userID,
    template_params: {
      to_name: name,
      to_email: email,
    },
  };

  try {
    const response1 = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userMessageData),
    });

    const result1 = await response1.text();
    console.log("User message sent!", result1);

    const response2 = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(autoReplyData),
    });

    const result2 = await response2.text();
    console.log("Auto-reply sent!", result2);

    alert("Email sent successfully!");

    // Optionally clear the form
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  } catch (error) {
    console.error("Email send failed:", error);
    alert("There was an error sending your message.");
  }
}
