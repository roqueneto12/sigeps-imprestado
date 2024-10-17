// models/TipoRecurso.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const TipoRecurso = connection.define('Tipo_recurso', {
    id_tipo_recurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_tipo_recurso: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Tipo_recurso',
    timestamps: false
});

module.exports = TipoRecurso;
