const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");
const sequelizePaginate = require('sequelize-paginate')

const Users = sequelize.define(
    "user",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: Sequelize.STRING(255)
        },
        mobile: {
            type: Sequelize.NUMBER(255)
        },
        verified: {
            type: Sequelize.STRING(255)
        },
        email: {
            type: Sequelize.STRING(255)
        }

    }, { timestamps: false }
);
sequelizePaginate.paginate(Users)
module.exports = Users;



