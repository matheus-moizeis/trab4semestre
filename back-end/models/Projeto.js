const mongoose = require('mongoose')

const mongooseSeq = require('mongoose-sequence')(mongoose);

const esquema = mongoose.Schema({
    data_projeto: {
        type: Date, // Date armezana data e hora,
        default: Date.now,
        required: true
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

    num_projeto: {
        type: Number,
        index: { unique: true } // Número da venda não pode se repetir
    },

    valor_projeto: {
        type: Number,
        required: true,
        min: 1
    },

    tamanho_terreno: {
        type: String,
        required: true,
        validate:{
            validator: function(val){
                return val>0
            }
        },
        message: 'Quantidade deve ser maior que 0'
    },

    tamanho_projeto: {
        type: String,
        required: true,
        validate:{
            validator: function(val){
                return val>0
            }
        },
        message: 'Quantidade deve ser maior que 0'
    },

    arquiteto: {
        type: mongoose.ObjectId,
        ref: 'Arquiteto'
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

esquema.plugin(mongooseSeq, {inc_field: 'num_projeto', start_seq: 1}),

module.exports = mongoose.model('Projeto', esquema, 'projetos')