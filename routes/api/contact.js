const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const user = process.env.USER_EMAIL;
const pass = process.env.USER_PASS;
const myEmail = process.env.MY_EMAIL;

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass
    }
  });

  const mailOpts = {
    from: 'PORTFOLIO',
    to: myEmail,
    subject: `${req.body.name} has emailed you from your portfolio`,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };

  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log('FAILURE ', error);
    } else {
      console.log('SUCCESS');
    }
  });
});

module.exports = router;
