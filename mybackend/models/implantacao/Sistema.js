// models/Sistemas.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Sistemas = connection.define('Sistemas', {
    id_sistema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_sistema: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sigla_sistema: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao_sistema: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Sistemas',
    timestamps: false
});

module.exports = Sistemas;
