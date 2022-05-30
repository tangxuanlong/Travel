
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoytes');
const url ="mongodb+srv://admin:Long140320@travel-words.pxcnrxs.mongodb.net/dbUserManager?retryWrites=true&w=majority"; 
const app = express();
app.use(express.json);

mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true});
app.listen(3000, () => {console.log('Kết nối thành công');
})