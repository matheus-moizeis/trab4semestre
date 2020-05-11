const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    data_projeto: {
        type: Date, // Date armezana data e hora,
        default: Date.now,
        require: true
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
        require: true,
        min: 1
    },

    tamanho_terreno: {
        type: String,
        require: true,
        validate:{
            validator: function(val){
                return val>0
            }
        },
        message: 'Quantidade deve ser maior que 0'
    },

    tamanho_projeto: {
        type: String,
        require: true,
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

    clientePf: {
        type: mongoose.ObjectId,
        ref: 'ClientePf'
    },
    
    clientePj: {
        type: mongoose.ObjectId,
        ref: 'ClientePj'
    }
})

module.exports = mongoose.model('Projeto', esquema, 'projetos')