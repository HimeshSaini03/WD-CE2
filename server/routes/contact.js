const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

router.get("/", async (req, res) => {
    try
    {
        const messages = await Message.find();
        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send({error: 'Error during fetching messages'}); 
        console.error('Error during fetching messages:', error);
    }
});