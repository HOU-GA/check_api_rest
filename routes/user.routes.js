//l'import de l'express: Routing
const express = require('express')

//import auto du modele
const User = require('../models/User')

const router = express.Router()

router.post('/add', async(req,res) => {
    try {
       
        //l'interpretation de la requete
        const {name, email, adress, phone} = req.body
       
        //creation d'un objet user (nv utilisateur)
        const newUser = new User({name, email, adress, phone})
       
        //l'insertion dans la BD
        await newUser.save();
        
        //response positive
        res.status(201).json({msg:"l'utilisateur est bien ajoutée a la BD", newUser})
    } catch (error) {
        //response negative
        res.status(400).json(error);
    }


});

module.exports = router;