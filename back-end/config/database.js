const mongoose = require('mongoose')

module.exports = function(uri) {
   mongoose.connect(uri, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useFindAndModify: false 
   })

   mongoose.connection.on('connected', () => 
      console.log(`Mongoose! conectado a ${uri}`)
   )

   mongoose.connection.on('disconnected', () => 
      console.log(`Mongoose! desconectado de ${uri}`)
   )

   mongoose.connection.on('error', erro => 
      console.log(`Mongoose! ERRO na conexão a ${uri}: ${erro}`)
   )

   // Capturamos um sinal de encerramento (SIGINT), Ctrl+C
   process.on('SIGINT', () => 
      mongoose.connection.close(() => {
         console.log('* Mongoose! Desconectado pelo término da aplicação');
         // 0 indica que a finalização ocorreu sem erros 
         process.exit(0);
      })
   )

}