const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   razao_social: {
      type: String,
      required: true
   },
   nome_fantasia: {
      type: String
   },
   cnpj: {
      type: String,
      required: true
   },
   endereco: {
      type: String,
      required: true
   },
   telefone: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   }
})

module.exports = mongoose.model('Fornecedor', esquema, 'fornecedores')