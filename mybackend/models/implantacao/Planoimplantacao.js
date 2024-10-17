// models/PlanoImplementacao.js
const { DataTypes } = require('sequelize');
const connection = require('../database');
const Sistemas = require('./Sistemas');
const Usuarios = require('./Usuarios');

const PlanoImplementacao = connection.define('Plano_implementacao', {
    id_implantacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_sistema: {
        type: DataTypes.INTEGER,
        references: {
            model: Sistemas,
            key: 'id_sistema'
        }
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuarios,
            key: 'id_usuario'
        }
    }
}, {
    tableName: 'Plano_implementacao',
    timestamps: false
});

module.exports = PlanoImplementacao;
