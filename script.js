const operacoes = require('./operações');
const area = require('./area');

module.exports = {...operacoes, ...area}; 


console.log(operacoes, area);