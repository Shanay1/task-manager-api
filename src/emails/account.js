const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

const sendWelcomeEmail = (email, name) => {
    mg.messages.create('sandbox781fe354c4eb45cfbe04b583b9b16eda.mailgun.org', {
        to: email,
        from: 'mailgun@sandbox781fe354c4eb45cfbe04b583b9b16eda.mailgun.org',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    mg.messages.create('sandbox781fe354c4eb45cfbe04b583b9b16eda.mailgun.org', {
        to: email,
        from: 'mailgun@sandbox781fe354c4eb45cfbe04b583b9b16eda.mailgun.org',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

// mg.messages.create('sandbox781fe354c4eb45cfbe04b583b9b16eda.mailgun.org', {
// 	from: 'mailgun@sandbox781fe354c4eb45cfbe04b583b9b16eda.mailgun.org',
// 	to: ['sasoonasra@gmail.com'],
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomeness!',
// 	html: '<h1>Testing some Mailgun awesomeness!</h1>'
// })
// .then(msg => console.log(msg)) // logs response data
// .catch(err => console.log(err)); // logs any error


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}