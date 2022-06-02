const express = require('express');
const userInfoModel = require('../models/userInfo');
const app = express();

//add data
app.get('/userInfo', async(req, res) => {
        const u = new userInfoModel.find();
        try {
            res.json(u)
        } catch (error) {
            res.status(500).send(error);
        }
});

module.exports = app;