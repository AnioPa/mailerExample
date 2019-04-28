const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const exec = require('child_process').exec;


// app.use(bodyParser.json({ type: 'application/*+json' }));
// app.use(bodyParser.urlencoded({ extended: true,  }));
// app.use(require('body-parser').json())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


const nodemailer = require("nodemailer");

// TODO: SETUP proper headers for cross origin comunication – global
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send("OK")
})

/**
* Used by noinputsignal.com contact form
*/
app.post('/sendmail', (req, res) => {
  // TODO: SETUP proper headers for cross origin comunication – as per route
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  console.log(req.body)
  //if(req.query && req.query.pass == 'dsfdsfsdfsdfsdf') {
  async function main(){
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let account = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.emaillabs.net.pl",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: '1.superkoderzy.smtp', // generated ethereal user
        pass: 'DwbGQdx3' // generated ethereal password
      }
    });
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"No Input Signal Sp. z o.o. 👻" <kazik@kazikkoduje.pl>', // sender address
      to: "kazik@kazikkoduje.pl", // list of receivers
      subject: "Hello ✔" , // Subject line
      text: "Hi", // plain text body
      html: `<p>${req.body.message}</p>`// html body
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions)

    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  }

  main().catch(console.error);

  res.send(main().catch(console.error))
//}
//res.send("not send")
});


module.exports = app;
