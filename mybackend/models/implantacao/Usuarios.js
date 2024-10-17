// models/Usuarios.js
const { DataTypes } = require('sequelize');
const connection = require('../database');

const Usuarios = connection.define('Usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Usuarios',
    timestamps: false
});

module.exports = Usuarios;
