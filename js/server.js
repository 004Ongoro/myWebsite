const nodeMailer = require("nodemailer");

// INPUT FIELDS
const fullname = document.getElementById("txt_name");
const email = document.getElementById("txt_email");
const textMessage = document.getElementById("txt_message");
const contactForm = document.getElementById("contact_form");
const statusBox = document.querySelector(".status");
alert("helo");
textMessage.value = "Message is here";

const mailMarkup = `
  <h1>Message From: ${fullname} of ${email}</h1>
  <p>The Message <br /> ${textMessage}</p>
`;

contactForm.addEventListener("submit", () => {
  sendMail();
});

const sendMail = () => {
  main().catch((e) => console.log(e));
};

async function main() {
  const transport = nodeMailer.createTransport({
    host: "gtechong72@gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "",
      pass: "",
    },
  });

  const info = await transport.sendMail({
    from: `${fullname.value} <${email.value}>`,
    to: "gtechong72@gmail.com",
    subject: `New Message from ${fullname} for PORTFOLIO`,
    html: mailMarkup,
  });

  console.log("Messsage sent: " + info.messageId);
}
