const mongoose = require('mongoose')

const mongooseSeq = require('mongoose-sequence')(mongoose);


const esquema = mongoose.Schema({
    
    data_construcao: {
        type: Date,
        default: Date.now,
        required: true,
    },

    forma_pagamento: {
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
        required: true
    },

    tamanho_construcao: {
        type: String,
        required: true
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

    cliente: {
        type: mongoose.ObjectId,
        ref: 'Cliente',
    },

    orcamento:{
        type: Boolean,
        required: true
    }
})

esquema.plugin(mongooseSeq, {inc_field: 'num_construcao', start_seq: 1}),

module.exports = mongoose.model('Construcao', esquema, 'construcoes')