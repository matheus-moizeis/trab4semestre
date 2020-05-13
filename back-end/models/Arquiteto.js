const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    cpf:{
        type: String,
        required: true
    },

    cau:{
        type: String,
        required: true
    },

    telefone: {
        type: String,
        required: true
    },

    endereco:{
        type: String,
        required:true
    },

    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Arquiteto', esquema, 'arquitetos');