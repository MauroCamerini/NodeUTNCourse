const usersModel = require("../models/usersModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports={

    //
    // Alta de usuario
    //
    create: async function (req,res,next) {
        try{
            const user = new usersModel({
                "name": req.body.name,
                "email": req.body.email,
                "password": req.body.password,
            })

            const doc = await user.save()

            res.status(201).json(doc)
        }catch(e){
            console.log(e)
            next(e)
        }
    },

    //
    // Login
    //
    login: async function (req,res,next) {
        try {
            const user = await usersModel.findOne({email:req.body.email})

            if(!user){
                res.json({message: "Email or password incorrect"})
                return
            }

            if(bcrypt.compareSync(req.body.password, user.password)){
                
                //
                // Se debe utilizar JWT para la generación del token
                //
                const token =jwt.sign({userId: user._id}, req.app.get("secretKey"), {expiresIn:"1h"})
                
                
                res.status(201).json({token})
            } else {
                res.json({message: "Email or password incorrect"})
                return
            }

        }catch(e){
            console.log(e)
            next(e)
        }
    }, 

}