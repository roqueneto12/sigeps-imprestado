// models/RecursosSistemas.js
const { DataTypes } = require('sequelize');
const connection = require('../database');
const Recursos = require('./Recursos');
const Sistemas = require('./Sistemas');

const RecursosSistemas = connection.define('Recursos_Sistemas', {
    id_recurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Recursos,
            key: 'id_recurso'
        }
    },
    id_sistema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Sistemas,
            key: 'id_sistema'
        }
    }
}, {
    tableName: 'Recursos_Sistemas',
    timestamps: false
});

module.exports = RecursosSistemas;
