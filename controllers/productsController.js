const productsModel = require("../models/productsModel")

module.exports={
    getAll: async function(req, res, next) {
        try {
            const products = await productsModel.find()
            res.status(200).send(products);
        }catch(e){
            console.log(e)
            next(e)
        }
    },

    //
    // Home
    //
    getHighlights: async function(req, res, next) {
        try {
            const products = await productsModel.find({highlighted: true})
            res.status(200).send(products);
        }catch(e){
            console.log(e)
            next(e)
        }
    },

    //
    // Pagina de detalle de producto
    //
    getById: async function (req,res,next) {
        try {
            const doc = await productsModel.findById(req.params.id)
            res.status(200).send(doc);
        }catch(e){
            console.log(e)
            next(e)
        }
    },
    create: async function (req,res,next) {
        try{
            const product = new productsModel({
                "sku": req.body.sku,
                "title": req.body.title,
                "price": req.body.price,
                "description": req.body.description,
                "category": req.body.category,
                "highlighted": req.body.highlighted
            })

            const doc = await product.save()

            res.status(201).json(doc)
        }catch(e){
            console.log(e)
            next(e)
        }
    },
    update: async function (req,res,next) {
        try {
            const doc = await productsModel.updateOne({_id: req.params.id}, req.body)
            res.status(200).send(doc);
        }catch(e){
            console.log(e)
            next(e)
        }
    }, 
    delete: async function (req,res,next) {
        try {
            const doc = await productsModel.deleteOne({_id: req.params.id}, req.body)
            res.status(200).send(doc);
        }catch(e){
            console.log(e)
            next(e)
        }
    },
}