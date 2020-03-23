var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

let db = require('./config/database')
db('mongodb://localhost:27017/pojeto4Sem')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const fornecedor = require('./routes/fornecedor');
app.use('/fornecedor', fornecedor);

const clientePf = require('./routes/clientePf');
app.use('/clientePf', clientePf);

const clientePj = require('./routes/clientePj');
app.use('/clientePj', clientePj);

const arquiteto = require('./routes/arquiteto');
app.use('/arquiteto', arquiteto);

const engenheiro = require('./routes/engenheiro');
app.use('/engenheiro', engenheiro);

const projeto = require('./routes/projeto');
app.use('/projeto', projeto);

const contrucao = require('./routes/construcao');
app.use('/construcao', contrucao)

module.exports = app;
