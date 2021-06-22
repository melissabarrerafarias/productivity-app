const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGOD_URI || 'mongoose://localhost/productivity-app', {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }); 


// // log mongoose queries in console
// mongoose.set('debug', true); 

app.listen(PORT, () => console.log(`🥳 On localhost:${PORT}`)); 

