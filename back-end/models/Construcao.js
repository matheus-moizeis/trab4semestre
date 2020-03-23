const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    valor_construcao: {
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

    engenheiro: {
        type: mongoose.ObjectId,
        ref: 'Engenheiro'
    },

    fornecedores:{
        type: mongoose.ObjectId,
        ref: 'Fornecedor'
    },

    qtde_pedreiros:{
        type: Number,
        require: true,
        min: 1
    },

    clientePf: {
        type: mongoose.ObjectId,
        ref: 'ClientePf'
    },

    clientePj: {
        type: mongoose.ObjectId,
        ref: 'ClientePj'
    }
})

module.exports = mongoose.model('Construcao', esquema, 'construcoes')