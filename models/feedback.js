'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    feedback.init({

        email: DataTypes.STRING,
        added_on: DataTypes.DATE,
        subject: DataTypes.STRING,
        message: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'feedback',
    });
    return feedback;
};