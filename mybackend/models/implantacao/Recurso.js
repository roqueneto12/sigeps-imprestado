// models/Recursos.js
const { DataTypes } = require('sequelize');
const connection = require('../database');
const TipoRecurso = require('./TipoRecurso');

const Recursos = connection.define('Recursos', {
    id_recurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plano_recurso: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tipo_sistema: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_recurso: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoRecurso,
            key: 'id_tipo_recurso'
        }
    }
}, {
    tableName: 'Recursos',
    timestamps: false
});

module.exports = Recursos;
