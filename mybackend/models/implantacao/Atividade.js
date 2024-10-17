// models/Atividades.js
const { DataTypes } = require('sequelize');
const connection = require('../database');
const Cronograma = require('./Cronograma');

const Atividades = connection.define('Atividades', {
    id_atividade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cronograma: {
        type: DataTypes.INTEGER,
        references: {
            model: Cronograma,
            key: 'id_cronograma'
        }
    }
}, {
    tableName: 'Atividades',
    timestamps: false
});

module.exports = Atividades;
