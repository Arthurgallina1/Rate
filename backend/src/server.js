const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes')
const morgan = require('morgan')
const app = express();
const path = require('path');
 
const { uDB, pDB } = require('./config/config')
const mongoose = require('mongoose')

// mongodb+srv://${uDB}:${pDB}@clustermevn-cztsy.mongodb.net/dev?retryWrites=true&w=majority
mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const corsConfig = {
    origin: 'https://upbeat-varahamihira-17c567.netlify.com',
        

}


app.use(express.json());
app.use(morgan('common'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use(cors(corsConfig));
app.use(routes);
app.listen(8000, '0.0.0.0');

