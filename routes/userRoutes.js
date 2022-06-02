const express = require('express');
const router =express.Router();
const userModel = require('../models/user');
const app = express();

app.get('/', (req, res)=> {
    res.send('We are one home')
});
//get data
app.get('/user', async(req, res) => {
    try {
        const us = await userModel.find();
        res.json(us);
    }catch(err){
        console.error(err)
        res.json({message:err});
    }
});

app.get('/user/new', async(req, res) => {
    try {
        const kitty = new userModel({ fullName: 'John Doe' });
        await kitty.save()
        res.json({
            success:true
        });
    }catch(err){
        console.error(err)
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