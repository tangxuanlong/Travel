const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
// require(dotenv/config);
//Import Routes
const userRouter = require('./routes/userRoutes');
const userInfoRouter = require('./routes/userInfoRoutes');

const url ="mongodb+srv://admin:Long140320@travel-words.pxcnrxs.mongodb.net/dbUserManager?retryWrites=true&w=majority"; 

app.use(express.json);

mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true});
app.listen(3000, () => {console.log('Kết nối thành công');
})