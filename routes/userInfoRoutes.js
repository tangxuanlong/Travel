const express = require('express');
const userInfoModel = require('../models/userInfo');
const app = express();

//add data
app.post('/userInfo', async(req, res) => {
        const u = new userModel(req.body);
        try {
            await u.save();
            res.send(u);
        } catch (error) {
            res.status(500).send(error);
        }
});

module.exports = app;