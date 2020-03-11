const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

    cpf:{
        type: String,
        require: true
    },

    crea:{
        type: String,
        require: true
    },

    telefone: {
        type: String,
        require: true
    },

    endereco:{
        type: String,
        require:true
    },

    email:{
        type: String,
        require: true
    }
});

module.exports = mongoose.Schema('Engenheiro', esquema, 'engenheiro');