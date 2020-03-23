const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    valor_projeto: {
        type: Number,
        require: true,
        min: 0
    },

    tamanho_terreno: {
        type: String,
        require: true
    },

    tamanho_construcao: {
        type: String,
        require: true
    },

    arquiteto: {
        type: mongoose.ObjectId,
        ref: 'Arquiteto'
    },

    clientePf: {
        type: mongoose.ObjectId,
        ref: 'ClientePf'
    },
    
    // clientePj: {
    //     type: mongoose.ObjectId,
    //     ref: 'ClientePj'
    // }
})

module.exports = mongoose.model('Projeto', esquema, 'projetos')