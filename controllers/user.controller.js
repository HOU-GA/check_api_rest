
const User = require('../models/User');

//fonction call back pour la creation de user
exports.addUser= async(req,res) => {
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
}

exports.allUser= async (req,res) => {
    try {
        const listUser = await User.find();
        res.status(200).json({msg:"Liste de tous les utilisateurs",listUser})
    } catch (error) {
        res.status(400).json(error);
    }
}

//controller pour lire un seul utilisateur
exports.getOne = async(req,res) => {
    try {
        const {id} = req.params;
        const userToGet = await User.findById(id);
        if(!userToGet) return res.status (404).json({msg:"Utilisateur non trouvé"});
        res.status(200).json({msg: "L'utilisateur est", userToGet})

    } catch (error) {
        res.status(400).json(error);
    }
}

//controller pour mise a jour de user
exports.updateUser = async(req,res) => {
    try {
        //recuperer id dans la barre navig
        const {id} = req.params;
        //console.log(id)

        const userToUpdate = await User.findByIdAndUpdate(
            id,
            {$set: {...req.body}},
            {new: true});
            res.status(200).json({msg: "Mise a jour reussi", userToUpdate})

    } catch (error) {
        res.status(400).json(error);
    }
}

//supprimer user
exports.supUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const userToDel = await User.findByIdAndDelete(id);
        if(!userToDel) return res.status (404).json({msg:"Utilisateur non trouvé"});
        res.status(200).json({msg: "suppression de l'utilisateur", userToDel})
    } catch (error) {
        res.status(400).json(error);
    }
}