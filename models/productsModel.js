const mongoose = require('../config/mongodb')
const errorMessage = require('../utils/errorMessage')

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
const productShcema = mongoose.Schema({
    "sku": { //- Código
        type: String,
        required: [true, errorMessage.GENERAL.required],
        maxLength: [15, "Maximum length is 15"]
    },
    "title": { // - Nombre
        type: String,
        required: [true, errorMessage.GENERAL.required],
        maxLength: [15, "Maximum length is 15"]
    },
    "price": { // - Precio
        type: Number,
        required: [true, errorMessage.GENERAL.required],
        min: 0,
    },
    "description": { // - Descripción
        type: String,
        required: [true, errorMessage.GENERAL.required],
        maxLength: [45, "Maximum length is 15"]
    },
    "category": { // - Categoría
        type: String,
        required: [true, errorMessage.GENERAL.required],
        maxLength: [15, "Maximum length is 15"]
    },
    "highlighted": {
        type: Boolean,
        required: [true, errorMessage.GENERAL.required],
    }
})

module.exports = mongoose.model('products', productShcema )

