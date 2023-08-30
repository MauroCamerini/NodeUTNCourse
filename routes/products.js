var express = require('express');
var router = express.Router(); 
const productsController = require('../controllers/productsController');



/* 
    ---------------------------------------------------------------------------
    Home
        - Json de productos destacados
    ---------------------------------------------------------------------------
*/
router.get('/highlights', productsController.getHighlights);

/* 
    ---------------------------------------------------------------------------
    Pagina de detalle de producto
        - Deberá retornar un json con los siguientes datos
            - Nombre
            - Precio
            - Código
            - Descripción
            - Categoría
    ---------------------------------------------------------------------------
*/
router.get('/:id', productsController.getById)


router.get('/', productsController.getAll);

router.post('/', (req,res,next) => {req.app.verifyToken(req,res,next)}, productsController.create)

router.put('/:id', (req,res,next) => {req.app.verifyToken(req,res,next)},productsController.update)

router.delete('/:id', (req,res,next) => {req.app.verifyToken(req,res,next)},productsController.delete)


module.exports = router;
