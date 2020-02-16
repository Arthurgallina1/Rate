const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes')
const morgan = require('morgan')
const app = express();
const { uDB, pDB } = require('./config/config')
const mongoose = require('mongoose')

// mongodb+srv://${uDB}:${pDB}@clustermevn-cztsy.mongodb.net/dev?retryWrites=true&w=majority
mongoose.connect(`mongodb://localhost:27017/ratedb`, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use(express.json());
app.use(morgan('common'))
app.use(cors());
app.use(routes);
app.listen(8000);

