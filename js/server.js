const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../en"));

// NODEMAILER TRANSPORTER

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gtechong7u2@gmail.com",
    pass: "password",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "gtechong72@gmail.com",
    subject: `New Message from ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error sending message.");
    }

    console.log("Email sent: " + info.response);

    res.status(200).send("Email sent successfully");
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
