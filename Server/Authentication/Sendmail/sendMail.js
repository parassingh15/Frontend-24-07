const nodemailer = require('nodemailer');

async function mail(OtpCode, receiver) {
    let account = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: account.user,
            pass: account.pass,
        },
        logger: true
    });
    
    const info = await transporter.sendMail({
        from: '"Sender Name" <from@example.net>',
        to: receiver,
        subject: "Hello from node",
        text: "Hello world?",
        html: `<b>We have received a password change request from your account<br><br>This is your OTP.<br><br><h1>${OtpCode}</h1><br><br><p>Otp valid for only 5 minutes</p></b>`,
        headers: { 'x-myheader': 'test header' }
    });
    console.log("Message sent: %s", info.response);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return true;
}

mail().catch((err)=>{
    return false;
})

module.exports = mail;