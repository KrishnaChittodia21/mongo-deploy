const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./DB/Conncection');
const profile = require('./Api/profile');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();
// app.use(express.json({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index')
})
app.use('/api', profile);
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started', Port));
