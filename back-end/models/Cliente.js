const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    
    pessoa_fisica:{
        type: Boolean,
        required: true,
        default: true
    },

    nome:{
        type: String, 
        required:  () => this.pessoa_fisica
    },    

    cpf:{
        type: String,
        required: () => this.pessoa_fisica
    },
        
    endereco:{
        type: String,
        required: true
    },

    telefone_1:{
        type: String,
        required: true
    },

    telefone_2:{
        type: String,
    },

    email:{
        type: String,
        required: true
    },

    razao_social:{
        type: String,
        required: ()=> this.pessoa_fisica == false
    },

    nome_fantasia:{
        type: String,
        required: ()=> this.pessoa_fisica == false
    },

    cnpj:{
        type: String,
        required: ()=> this.pessoa_fisica == false
    },
});

module.exports = mongoose.model('Cliente', esquema, 'clientes');