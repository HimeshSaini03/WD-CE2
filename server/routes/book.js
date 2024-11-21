const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Booking = require('../models/Booking');

const router = express.Router();

router.get("/:token", async (req, res) => {

    const token = req.params.token;

    if(token)
    {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err)
            {
                console.log('err:', err);
                res.status(400).send({error: 'Token is invalid'});
            }
            else
            {
                const {id} = decoded;
                res.status(200).send({message: 'Token is valid', UserId: id});
            }
        });
    }
    else
    {
        res.status(400).send({error: 'Token is invalid'});
    }
});