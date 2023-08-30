var express = require('express');
var router = express.Router(); 
const usersController = require('../controllers/usersController');

/* GET products listing. */


/* 
    ---------------------------------------------------------------------------
    Registro 
        Alta de usuario (Enviar un json por post y desde express darlo de alta, crearlo en la base de datos)
    ---------------------------------------------------------------------------
*/
router.post('/', usersController.create)


/* 
    ---------------------------------------------------------------------------
    Login
        Validar el usuario enviando un json por POST
    ---------------------------------------------------------------------------
*/
router.post('/login', usersController.login)


module.exports = router;
