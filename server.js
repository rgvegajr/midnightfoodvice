require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// import routes
const authRoutes = require('./routes/auth');
const truckRoutes = require('./routes/trucks');

//define global variables
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect((process.env.MONGODB_URI || "mongodb://localhost/foodtrucks"), {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true 
})
.then(() => console.log('DB connected'))
.catch(() => console.log('DB Connection Error', err));;

// Define middleware and configuration here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors()); //allows all origins  or configure to restrict calls to certain domains

//routes
app.use('/api', authRoutes);
app.use('/api', truckRoutes);

// // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'), function(err){
            if (err) {
                res.status(500).send(err)
            }
        });
    });
}

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT} - ${process.env.NODE_ENV}`);
});