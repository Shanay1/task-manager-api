const mongoose = require('mongoose')
const { required } = require('yargs')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})