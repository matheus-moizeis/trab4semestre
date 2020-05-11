const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    
    data_construcao: {
        type: Date, // Date armezana data e hora
        required: true,
    },

    forma_construcao: {
        type: String,
        // DI = dinheiro
        // CH = cheque
        // CC = cartão de crédito
        // CD = cartão de débito
        enum: ['DI', 'CH', 'CC', 'CD'],
        required: true
    },
    
    num_construcao: {
        type: Number,
        index: { unique: true } // Número da venda não pode se repetir
    },

    valor_construcao: {
        type: Number,
        require: true,
        min: 1
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