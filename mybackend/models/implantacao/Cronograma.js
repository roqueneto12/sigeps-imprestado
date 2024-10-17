// models/Cronograma.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Cronograma = connection.define('Cronograma', {
    id_cronograma: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    atividade_cronograma: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    desenvolvimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    material_suporte: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Cronograma',
    timestamps: false
});

module.exports = Cronograma;
