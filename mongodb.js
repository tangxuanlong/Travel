const express = require('express');
const app = express();
const mongoose = require('mongoose');
//app.use(express.json);
const bodyParser = require('body-parser');
// require(dotenv/config);

    //Import Routes
const userRouter = require('./routes/userRoutes');
//const userInfoRouter = require('./routes/userInfoRoutes');

const url ="mongodb+srv://admin:Long140320@travel-words.pxcnrxs.mongodb.net/dbUserManager?retryWrites=true&w=majority"; 

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
app.get('/', (req, res)=> {
    res.send('We are on home')
});
app.listen(3000, () => {console.log('Kết nối thành công');
})
