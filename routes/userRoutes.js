const express = require('express');
const userModel = require('../models/user');
const app = express();

app.get('/', (req, res)=> {
    res.send('We are one home')
})
//get data
app.get('/user', async(req, res) => {
    try {
        const us = await app.find();
        res.json(us);
    }catch(err){
        res.json({message:err});
    }
});
//add data
app.post('/user', async(req, res) => {
        const u = new userModel(req.body);
        try {
            await u.save();
            res.send(u);
        } catch (error) {
            res.status(500).send(error);
        }
});

module.exports = app;